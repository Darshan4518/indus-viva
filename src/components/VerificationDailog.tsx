import type React from "react";

import { useState, useRef, useEffect } from "react";
import {
  ArrowLeft,
  User,
  X,
  Loader2,
  CheckCircle,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { motion, AnimatePresence } from "framer-motion";
import {
  sendOtp,
  signUpCustomer,
  verifyOtp,
  verifyPhone,
} from "@/services/api";
import { useCustomerStore } from "@/stores/useCustomerStore";

type Step = "mobile" | "otp" | "profile";

interface AlertState {
  show: boolean;
  type: "success" | "error" | "info";
  message: string;
}

export default function VerificationDialog() {
  const { setCustomerUserId } = useCustomerStore();

  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<Step>("mobile");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState<AlertState>({
    show: false,
    type: "info",
    message: "",
  });
  const [otpAttempts, setOtpAttempts] = useState(0);
  const [canResendOtp, setCanResendOtp] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  const dialogRef = useRef<HTMLDivElement>(null);
  const otpRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => {
        setAlert((prev) => ({ ...prev, show: false }));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [alert.show]);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (resendTimer === 0 && currentStep === "otp") {
      setCanResendOtp(true);
    }
  }, [resendTimer, currentStep]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const showAlert = (type: AlertState["type"], message: string) => {
    setAlert({ show: true, type, message });
  };

  const resetDialog = () => {
    setCurrentStep("mobile");
    setMobileNumber("");
    setOtp(["", "", "", ""]);
    setFullName("");
    setEmail("");
    setOtpAttempts(0);
    setCanResendOtp(false);
    setResendTimer(0);
    setAlert({ show: false, type: "info", message: "" });
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(resetDialog, 300);
  };

  const handleVerifyPhoneNumber = async () => {
    if (!mobileNumber.trim()) {
      showAlert("error", "Please enter a valid mobile number");
      return;
    }

    if (mobileNumber.length < 10) {
      showAlert("error", "Mobile number must be at least 10 digits");
      return;
    }

    setIsLoading(true);
    try {
      const res = await verifyPhone(mobileNumber);
      if (res.status === 200) {
        showAlert("success", "Phone number verified successfully!");
        await sendOtp(mobileNumber);
        setCurrentStep("otp");
        setResendTimer(60);
        setCanResendOtp(false);
        showAlert("info", `OTP sent to ${mobileNumber}`);
      } else {
        showAlert("error", "Failed to verify phone number. Please try again.");
      }
    } catch (error) {
      showAlert(
        "error",
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== "" && index < 3) {
        otpRefs[index + 1].current?.focus();
      }
    }
  };

  const handleOtpKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      otpRefs[index - 1].current?.focus();
    }
  };

  const handleVerifyOtp = async () => {
    const otpString = otp.join("");
    if (otpString.length !== 4) {
      showAlert("error", "Please enter complete OTP");
      return;
    }

    setIsLoading(true);
    try {
      const res = await verifyOtp(mobileNumber, otpString);

      if (res.status === 200) {
        showAlert("success", "OTP verified successfully!");
        if (res.data?.data === false)
          setTimeout(() => setCurrentStep("profile"), 1000);
      } else {
        setOtpAttempts((prev) => prev + 1);
        if (otpAttempts >= 3) {
          showAlert(
            "error",
            "Maximum attempts reached. Please request a new OTP."
          );
          setCanResendOtp(true);
        } else {
          showAlert(
            "error",
            `Invalid OTP. ${3 - otpAttempts} attempts remaining.`
          );
        }
        setOtp(["", "", "", ""]);
        otpRefs[0].current?.focus();
      }
    } catch (error) {
      showAlert("error", "Failed to verify OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setIsLoading(true);
    try {
      await sendOtp(mobileNumber);
      setOtpAttempts(0);
      setCanResendOtp(false);
      setResendTimer(30);
      setOtp(["", "", "", ""]);
      showAlert("success", "New OTP sent successfully!");
    } catch (error) {
      showAlert("error", "Failed to resend OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCompleteProfile = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !email.trim()) {
      showAlert("error", "Please fill in all required fields");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      showAlert("error", "Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    try {
      const res = await signUpCustomer(fullName, mobileNumber, email);
      if (res.status === 200) {
        setCustomerUserId(res?.data?.costomer_user_id);
        showAlert("success", "Profile completed successfully!");
        setTimeout(() => {
          handleClose();
        }, 1000);
      }
    } catch (error) {
      showAlert("error", "Failed to complete profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const renderMobileStep = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h2 className="text-xl font-semibold">Enter Mobile Number</h2>
        <p className="text-gray-500 mt-1">We'll send you a verification code</p>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-sm text-blue-800">
          Please ensure the mobile number is correct.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="mobile-number"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Mobile Number
          </label>
          <Input
            id="mobile-number"
            placeholder="Enter your mobile number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ""))}
            className="w-full"
            maxLength={10}
            disabled={isLoading}
          />
        </div>

        <Button
          onClick={handleVerifyPhoneNumber}
          disabled={isLoading || !mobileNumber.trim()}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Verifying...
            </>
          ) : (
            "Send OTP"
          )}
        </Button>
      </div>
    </motion.div>
  );

  const renderOtpStep = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h2 className="text-xl font-semibold">Verify OTP</h2>
        <p className="text-gray-500 mt-1">
          Enter the code sent to {mobileNumber}
        </p>
      </div>

      <div className="flex justify-center space-x-3">
        {otp.map((digit, index) => (
          <Input
            key={index}
            ref={otpRefs[index]}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            onKeyDown={(e) => handleOtpKeyDown(index, e)}
            className="w-12 h-12 text-center text-xl font-semibold"
            disabled={isLoading}
          />
        ))}
      </div>

      <div className="space-y-3">
        <Button
          onClick={handleVerifyOtp}
          disabled={isLoading || otp.join("").length !== 4}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Verifying...
            </>
          ) : (
            "Verify OTP"
          )}
        </Button>

        <div className="text-center">
          {canResendOtp ? (
            <Button
              variant="ghost"
              onClick={handleResendOtp}
              disabled={isLoading}
              className="text-teal-600 hover:text-teal-700"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Resend OTP
                </>
              )}
            </Button>
          ) : (
            <p className="text-sm text-gray-500">
              Resend OTP in {resendTimer}s
            </p>
          )}
        </div>

        <Button
          variant="ghost"
          onClick={() => setCurrentStep("mobile")}
          className="w-full"
          disabled={isLoading}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Change Number
        </Button>
      </div>
    </motion.div>
  );

  const renderProfileStep = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h2 className="text-xl font-semibold">Complete Your Profile</h2>
        <p className="text-gray-500 mt-1">Just a few more details</p>
      </div>

      <form onSubmit={handleCompleteProfile} className="space-y-4">
        <div>
          <label
            htmlFor="full-name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name *
          </label>
          <Input
            id="full-name"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full"
            disabled={isLoading}
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address *
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
            disabled={isLoading}
            required
          />
        </div>

        <div className="space-y-3 pt-4">
          <Button
            type="submit"
            disabled={isLoading || !fullName.trim() || !email.trim()}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Completing...
              </>
            ) : (
              "Complete Profile"
            )}
          </Button>

          <Button
            type="button"
            variant="ghost"
            onClick={() => setCurrentStep("otp")}
            className="w-full"
            disabled={isLoading}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
      </form>
    </motion.div>
  );

  return (
    <div className="relative ">
      <User
        className="h-6 w-6 cursor-pointer transition-colors hover:text-gray-300"
        onClick={() => setOpen(true)}
        color="white"
      />

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/50 overflow-y-auto min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="flex min-h-screen justify-center px-4 py-10 sm:items-center"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div
                ref={dialogRef}
                className="w-full max-w-md rounded-lg bg-white shadow-xl relative"
                role="dialog"
                aria-modal="true"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://magicads.ae/indus-viva/assets/img/new/logo-black.png"
                      alt="IndusViva Logo"
                      className="h-8 object-contain"
                    />
                  </div>
                  <button
                    onClick={handleClose}
                    className="rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                    disabled={isLoading}
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </button>
                </div>

                {/* Alert */}
                <AnimatePresence>
                  {alert.show && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mx-6 mt-4"
                    >
                      <Alert
                        className={`${
                          alert.type === "success"
                            ? "border-green-200 bg-green-50"
                            : alert.type === "error"
                            ? "border-red-200 bg-red-50"
                            : "border-blue-200 bg-blue-50"
                        }`}
                      >
                        {alert.type === "success" ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <AlertCircle
                            className={`h-4 w-4 ${
                              alert.type === "error"
                                ? "text-red-600"
                                : "text-blue-600"
                            }`}
                          />
                        )}
                        <AlertDescription
                          className={`${
                            alert.type === "success"
                              ? "text-green-800"
                              : alert.type === "error"
                              ? "text-red-800"
                              : "text-blue-800"
                          }`}
                        >
                          {alert.message}
                        </AlertDescription>
                      </Alert>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="p-6">
                  <AnimatePresence mode="wait">
                    {currentStep === "mobile" && renderMobileStep()}
                    {currentStep === "otp" && renderOtpStep()}
                    {currentStep === "profile" && renderProfileStep()}
                  </AnimatePresence>
                </div>

                <div className="px-6 pb-6">
                  <div className="flex justify-center space-x-2">
                    {["mobile", "otp", "profile"].map((step, index) => (
                      <div
                        key={step}
                        className={`h-2 w-8 rounded-full transition-colors ${
                          currentStep === step
                            ? "bg-teal-600"
                            : index <
                              ["mobile", "otp", "profile"].indexOf(currentStep)
                            ? "bg-teal-300"
                            : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
