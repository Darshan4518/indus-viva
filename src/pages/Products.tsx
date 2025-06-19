import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw, AlertCircle } from "lucide-react";

import ProductCard from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ApiProduct {
  id: number;
  product_name: string;
  thumbnail_url: string;
  selling_price: number;
  pv: number;
}

interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
  pv: number;
}

function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-lg border border-gray-100">
      {/* Image skeleton */}
      <div className="aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />

      {/* Content skeleton */}
      <div className="p-6 space-y-4">
        {/* Title skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
        </div>

        {/* Price skeleton */}
        <div className="flex justify-center">
          <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
        </div>

        {/* Button skeleton */}
        <div className="h-12 bg-gray-200 rounded-2xl animate-pulse" />
      </div>
    </div>
  );
}

export default function ProductSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [retrying, setRetrying] = useState<boolean>(false);

  const transformApiProduct = (apiProduct: ApiProduct): Product => ({
    id: apiProduct.id,
    name: apiProduct.product_name,
    img: apiProduct.thumbnail_url,
    price: apiProduct.selling_price,
    pv: apiProduct.pv,
  });

  const fetchProducts = async (isRetry = false) => {
    try {
      if (isRetry) {
        setRetrying(true);
        setError(null);
      } else {
        setLoading(true);
      }

      const response = await axios.get<{ data: ApiProduct[] }>(
        "https://uat-api.machinesarehere.com/sales/v1/website/products"
      );

      const transformedProducts = response.data.data.map(transformApiProduct);
      setProducts(transformedProducts);
      setError(null);
    } catch (err: any) {
      console.error("Failed to fetch products:", err);
      setError(
        err.response?.data?.message ||
          "Failed to fetch products. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
      setRetrying(false);
    }
  };

  const handleRetry = () => {
    fetchProducts(true);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="">
      <div className=" min-h-[50vh] h-[50vh]">
        <img
          src="./productbanner.png"
          alt="productbanner"
          className=" h-full w-full bg-no-repeat object-cover bg-center"
        />
      </div>

      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.p
              className="text-sm text-emerald-600 font-semibold mb-4 tracking-wider uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              ● OUR PRODUCTS
            </motion.p>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              From Nature to You
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Discover our carefully curated collection of premium products,
              sourced directly from nature to bring you the finest quality.
            </motion.p>
          </div>

          {/* Error State */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-12"
              >
                <Alert className="max-w-2xl mx-auto border-red-200 bg-red-50">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">
                    {error}
                  </AlertDescription>
                </Alert>

                <div className="text-center mt-4">
                  <Button
                    onClick={handleRetry}
                    disabled={retrying}
                    variant="outline"
                    className="border-red-200 text-red-700 hover:bg-red-50"
                  >
                    {retrying ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Retrying...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Try Again
                      </>
                    )}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Products Grid */}
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              >
                {Array.from({ length: 8 }).map((_, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                  >
                    <ProductCardSkeleton />
                  </motion.div>
                ))}
              </motion.div>
            ) : products.length > 0 ? (
              <motion.div
                key="products"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              >
                {products.map((product) => (
                  <motion.div key={product.id} variants={itemVariants}>
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      img={product.img}
                      price={product.price}
                      pv={product?.pv}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : !error ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No Products Found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any products at the moment. Please check
                    back later.
                  </p>
                  <Button onClick={handleRetry} disabled={retrying}>
                    {retrying ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Refreshing...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Refresh
                      </>
                    )}
                  </Button>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
