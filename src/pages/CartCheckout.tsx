"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Minus, Plus } from "lucide-react";
import NavigationHeroSection from "@/components/NavigationHeroSection";
import AddressForm from "@/components/checkout/address-form";
import { useCartStore } from "@/stores/useCartStore";
import { useAddressStore } from "@/stores/usAddressStore";

export default function CheckoutPage() {
  const { selectedAddress } = useAddressStore();
  const {
    items: products,
    incQuantity,
    decQuantity,
    getTotalPrice,
  } = useCartStore();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [termsAccepted, setTermsAccepted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const handleIncQuantity = (productId: number) => {
    incQuantity(productId);
  };
  const handleDecQuantity = (productId: number) => {
    decQuantity(productId);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref} className="bg-gray-50">
      <NavigationHeroSection title="Checkout" path="Checkout" />
      <div className="py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Left: Order Summary */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-xl shadow-sm p-4 sm:p-6 md:p-8"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Your Order
                </h2>

                <div className="border-b pb-4 mb-4">
                  <div className="space-y-4">
                    {/* Desktop Header */}
                    <div className="hidden md:flex justify-between font-medium text-gray-700 pb-4 border-b">
                      <div className="w-1/2">Product</div>
                      <div className="w-1/4 text-center">Quantity</div>
                      <div className="w-1/4 text-right">Total</div>
                    </div>

                    {products.map((product) => (
                      <div
                        key={product.id}
                        className="border rounded-md md:border-none p-4 md:p-0 md:py-4 md:border-t"
                      >
                        {/* Mobile Layout */}
                        <div className="md:hidden space-y-3">
                          <div className="flex items-start gap-4">
                            <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                              <img
                                src={product.img || "/placeholder.svg"}
                                alt={product.name}
                                width={64}
                                height={64}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-sm font-medium text-gray-900">
                                {product.name}
                              </h3>
                              <p className="text-sm text-gray-500">
                                ₹{product.price.toFixed(2)} each
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-gray-600">
                                Qty:
                              </span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  handleDecQuantity(product?.id);
                                }}
                                disabled={product?.quantity <= 1}
                                className="h-8 w-8 p-0"
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="px-3 py-1 bg-gray-100 rounded-md text-sm"></span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleIncQuantity(product?.id)}
                                className="h-8 w-8 p-0"
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            <div className="font-medium sm:text-base text-xs">
                              ₹{(product.price * product?.quantity).toFixed(2)}
                            </div>
                          </div>
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden md:flex items-center">
                          <div className="w-1/2 flex items-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-md mr-4">
                              <img
                                src={product.img || "/placeholder.svg"}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">
                                {product.name}
                              </h3>
                              <p className="text-sm text-gray-500">
                                ₹{product.price.toFixed(2)} each
                              </p>
                            </div>
                          </div>
                          <div className="w-1/4 text-center">
                            <div className="flex items-center justify-center space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleDecQuantity(product?.id)}
                                disabled={product?.quantity <= 1}
                                className="h-8 w-8 p-0"
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="px-3 py-1 bg-gray-100 rounded-md">
                                {product?.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleIncQuantity(product?.id)}
                                className="h-8 w-8 p-0"
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                          <div className="w-1/4 text-right font-medium">
                            ₹{(product.price * product?.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between py-4 border-b font-bold text-base sm:text-lg">
                  <div>Total</div>
                  <div>₹{getTotalPrice().toFixed(2)}</div>
                </div>

                <div className="mt-6 flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    checked={termsAccepted}
                    onCheckedChange={(checked) =>
                      setTermsAccepted(checked as boolean)
                    }
                  />
                  <Label htmlFor="terms" className="text-sm text-gray-600">
                    I have read and agree to the website terms and conditions.
                  </Label>
                </div>

                <Button
                  className="mt-6 w-full bg-teal-600 hover:bg-teal-700 text-white py-3 text-base sm:text-lg disabled:opacity-50"
                  disabled={!selectedAddress || !termsAccepted}
                >
                  Place Order
                </Button>

                {(!selectedAddress || !termsAccepted) && (
                  <p className="text-sm text-red-600 mt-2 text-center">
                    Please fill address details and accept terms to place order
                  </p>
                )}
              </motion.div>

              {/* Right: Address Form */}
              <motion.div variants={itemVariants}>
                <AddressForm />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
