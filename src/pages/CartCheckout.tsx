import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CreditCard, Landmark, Banknote, Truck } from "lucide-react";
import NavigationHeroSection from "@/components/NavigationHeroSection";

interface Product {
  id: number;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CheckoutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [shippingMethod, setShippingMethod] = useState("store");
  const [gstDetails, setGstDetails] = useState(true);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "ICare",
      variant: "Women health",
      price: 137,
      quantity: 2,
      image: "https://magicads.ae/indus-viva/assets/img/new/icare-cart.png",
    },
    {
      id: 2,
      name: "ICoffee",
      variant: "Black",
      price: 74,
      quantity: 1,
      image: "https://magicads.ae/indus-viva/assets/img/new/icoffee-black.png",
    },
    {
      id: 3,
      name: "ICoffee",
      variant: "Creamer",
      price: 120.67,
      quantity: 3,
      image: "https://magicads.ae/indus-viva/assets/img/new/icare-cart.png",
    },
    {
      id: 4,
      name: "IGlow",
      variant: "Skin health",
      price: 145,
      quantity: 1,
      image: "https://magicads.ae/indus-viva/assets/img/new/icoffee-black.png",
    },
  ];

  const subtotal = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  const shippingCost = shippingMethod === "store" ? 25 : 0;
  const total = subtotal + shippingCost;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref} className="bg-gray-50 ">
      <NavigationHeroSection title="Checkout" path="Checkout" />
      <div className="py-16 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg shadow-sm p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Your Order
              </h2>

              <div className="border-b pb-4 mb-4">
                <div className="flex justify-between font-medium text-gray-700 mb-4">
                  <div className="w-1/2">Product</div>
                  <div className="w-1/4 text-right">Quantity</div>
                  <div className="w-1/4 text-right">Total</div>
                </div>

                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center py-4 border-t"
                  >
                    <div className="w-1/2 flex items-center">
                      <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100 mr-4 flex-shrink-0">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {product.name} - {product.variant}
                        </h3>
                        <p className="text-sm text-gray-500">
                          ₹{product.price.toFixed(2)} each
                        </p>
                      </div>
                    </div>
                    <div className="w-1/4 text-right">
                      <span className="inline-flex items-center justify-center px-2 py-1 bg-gray-100 rounded-md">
                        x {product.quantity}
                      </span>
                    </div>
                    <div className="w-1/4 text-right font-medium">
                      ₹{(product.price * product.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}

                <div className="flex justify-between py-4 border-t font-medium">
                  <div>Subtotal</div>
                  <div className="text-blue-600">₹{subtotal.toFixed(2)}</div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-900">GST Details</h3>
                  <div className="flex items-center">
                    <RadioGroup
                      value={gstDetails ? "yes" : "no"}
                      onValueChange={(value) => setGstDetails(value === "yes")}
                      className="flex items-center space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="gst-yes" />
                        <Label htmlFor="gst-yes">
                          Do you Want to Enter GST Details For Tax Benifits
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-900">Shipping</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-end space-x-2">
                      <RadioGroup
                        value={shippingMethod}
                        onValueChange={setShippingMethod}
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center justify-end space-x-2">
                          <Label htmlFor="store-pickup" className="text-right">
                            Store Pickup: ₹25.00
                          </Label>
                          <RadioGroupItem value="store" id="store-pickup" />
                        </div>
                        <div className="flex items-center justify-end space-x-2">
                          <Label htmlFor="votm-delivery" className="text-right">
                            VOTM Delivery
                          </Label>
                          <RadioGroupItem value="votm" id="votm-delivery" />
                        </div>
                        <div className="flex items-center justify-end space-x-2">
                          <Label htmlFor="consent" className="text-right">
                            Consent
                          </Label>
                          <RadioGroupItem value="consent" id="consent" />
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between py-4 border-t border-b font-bold text-lg">
                <div>Total</div>
                <div>₹{total.toFixed(2)}</div>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="font-medium text-gray-900 mb-4">
                  Payment Method
                </h3>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-3 border p-4 rounded-md hover:bg-gray-50 transition-colors">
                    <RadioGroupItem value="bank" id="bank-transfer" />
                    <Label
                      htmlFor="bank-transfer"
                      className="flex items-center cursor-pointer"
                    >
                      <Landmark className="h-5 w-5 mr-2 text-gray-600" />
                      Direct Bank Transfer
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 border p-4 rounded-md hover:bg-gray-50 transition-colors">
                    <RadioGroupItem value="cheque" id="cheque-payment" />
                    <Label
                      htmlFor="cheque-payment"
                      className="flex items-center cursor-pointer"
                    >
                      <Banknote className="h-5 w-5 mr-2 text-gray-600" />
                      Cheque Payment
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 border p-4 rounded-md hover:bg-gray-50 transition-colors">
                    <RadioGroupItem value="cash" id="cash-delivery" />
                    <Label
                      htmlFor="cash-delivery"
                      className="flex items-center cursor-pointer"
                    >
                      <Truck className="h-5 w-5 mr-2 text-gray-600" />
                      Cash on Delivery
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 border p-4 rounded-md hover:bg-gray-50 transition-colors">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label
                      htmlFor="paypal"
                      className="flex items-center cursor-pointer"
                    >
                      <CreditCard className="h-5 w-5 mr-2 text-gray-600" />
                      PayPal
                      <div className="ml-4 flex space-x-2">
                        <img
                          src="	https://magicads.ae/indus-viva/assets/img/new/payment-option.png"
                          alt="Visa"
                          className="h-6"
                        />
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="mt-8 flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={(checked) =>
                    setTermsAccepted(checked as boolean)
                  }
                />
                <Label htmlFor="terms" className="text-sm text-gray-600">
                  I have read and agree to the website.
                </Label>
              </div>

              <Button
                className="mt-8 w-full bg-teal-600 hover:bg-teal-700 text-white py-3 text-lg"
                disabled={!termsAccepted}
              >
                Place Order
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
