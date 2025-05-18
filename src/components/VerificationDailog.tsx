import { useState, useRef, useEffect } from "react";
import { ArrowLeft, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function VerificationDialog() {
  const [open, setOpen] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);

  const otpRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  // Handle clicking outside the dialog
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

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      mobileNumber &&
      otp.every((digit) => digit !== "") &&
      fullName &&
      email
    ) {
      setOpen(false);
      console.log("Form submitted:", { mobileNumber, otp, fullName, email });
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <div className="relativ top-10">
      <User
        className="h-6 w-6"
        onClick={() => setOpen(true)}
        color="white"
        style={{
          cursor: "pointer",
        }}
      />

      {open && (
        <motion.div
          className="fixed inset-0 z-[999] bg-black/50 overflow-y-auto min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="flex min-h-screen justify-center px-4 py-10 sm:items-start"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              ref={dialogRef}
              className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg relative"
              role="dialog"
              aria-modal="true"
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>

              <div className="flex justify-center py-6">
                <img
                  src="https://magicads.ae/indus-viva/assets/img/new/logo-black.png"
                  alt="IndusViva Logo"
                  className="h-12 object-contain"
                />
              </div>

              <form onSubmit={handleSubmit}>
                <div className="px-4 sm:px-6 pb-6">
                  <div className="mb-6">
                    <div className="text-center">
                      <h2 className="text-xl font-semibold">
                        A bit about yourself
                      </h2>
                      <p className="text-gray-500">Let us know you better</p>
                    </div>

                    <div className="mt-4 text-center text-sm text-gray-600">
                      <p>
                        Please ensure the mobile number entered is correct.
                        Mobile number cannot be changed after placing the order.
                      </p>
                      <p className="mt-2">
                        Confirmation of the order and the link for OTP
                        verification will be shared via SMS to the number you
                        enter here.
                      </p>
                    </div>

                    <div className="mt-4">
                      <label
                        htmlFor="mobile-number"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Mobile Number
                      </label>
                      <div className=" grid md:grid-cols-2 grid-cols-1 items-center gap-2">
                        <Input
                          id="mobile-number"
                          placeholder="Your Mobile Number"
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          className="w-full"
                          required
                        />
                        <Button className=" bg-teal-600 hover:bg-teal-700 text-white px-8 ">
                          Proceed
                        </Button>
                      </div>
                      <p className="mt-1 text-xs text-teal-600 text-center">
                        Don't worry we are good secret keepers
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h3 className="text-lg font-semibold text-center mb-2">
                      Verify OTP
                    </h3>
                    <p className="text-sm text-gray-600 text-center mb-4">
                      Check your phone
                    </p>

                    <p className="text-sm text-gray-600 text-center mb-4">
                      We have sent OTP to: {mobileNumber || "7306326701"}
                    </p>

                    <div className="flex justify-center space-x-2 mb-4">
                      {otp.map((digit, index) => (
                        <Input
                          key={index}
                          ref={otpRefs[index]}
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          maxLength={1}
                          value={digit}
                          onChange={(e) =>
                            handleOtpChange(index, e.target.value)
                          }
                          onKeyDown={(e) => handleOtpKeyDown(index, e)}
                          className="w-12 h-12 text-center text-xl"
                          required
                        />
                      ))}
                    </div>
                    <div className=" w-full flex items-center justify-center">
                      <Button className=" bg-teal-600 hover:bg-teal-700 text-white px-8 mx-auto">
                        <ArrowLeft className=" w-4 h-4" />
                        <span>Back</span>
                      </Button>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-center mb-4">
                      Complete Your Profile
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="full-name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Full Name
                        </label>
                        <Input
                          id="full-name"
                          placeholder="Your Full Name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full"
                          required
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                      <Button
                        type="submit"
                        className="bg-teal-600 hover:bg-teal-700 text-white px-8 w-full sm:w-auto"
                      >
                        Finish
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
