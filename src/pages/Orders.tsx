import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Order = {
  id: string;
  productName: string;
  date: string;
  amount: number;
  status: "Pending" | "Delivered" | "Cancelled";
  image: string;
};

const orders: Order[] = [
  {
    id: "ORD123456",
    productName: "I - COFFEE BLACK",
    date: "2025-06-18",
    amount: 3097.5,
    status: "Delivered",
    image:
      "https://new-system-public.s3.amazonaws.com/uploads/product-images/PINC-HC-1675669241039-4.png",
  },
  {
    id: "ORD123457",
    productName: "I - COFFEE LATTE",
    date: "2025-06-17",
    amount: 2890.0,
    status: "Pending",
    image: "https://via.placeholder.com/80",
  },
];

export default function CustomerOrders() {
  return (
    <div className="p-6 sm:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Your Orders</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-4">
                <div className="flex gap-4 items-center">
                  <img
                    src={order.image}
                    alt={order.productName}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {order.productName}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Order ID: {order.id}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Placed on: {order.date}
                    </p>
                    <p className="text-md font-medium mt-1">
                      ₹ {order.amount.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <Badge
                    variant={
                      order.status === "Delivered"
                        ? "default"
                        : order.status === "Pending"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {order.status}
                  </Badge>
                  <Button size="sm" variant="ghost" className="text-primary">
                    View Details <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
