import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCartStore } from "@/stores/useCartStore";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router";

const CartSheet = () => {
  const { items } = useCartStore();
  const navigate = useNavigate();
  const total = items.reduce((acc, product) => acc + product.price, 0);

  return (
    <Sheet>
      <SheetTrigger asChild className=" cursor-pointer">
        <div className="relative">
          <ShoppingCart className="h-6 w-6" color="white" fill="white" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
            {items?.length}
          </span>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center space-x-2">
              <h3 className=" text-xl font-bold ">Your Cart </h3>
              <div className=" relative">
                <ShoppingCart className="h-7 w-7" fill="black" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {items?.length}
                </span>
              </div>
            </div>
          </SheetTitle>
          <SheetDescription>
            <div className="p-3">
              <ul className="divide-y divide-gray-300">
                {items.map((product) => (
                  <li
                    key={product.id}
                    className="flex items-center justify-between py-4"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-12 h-16 object-contain"
                      />
                      <span className="font-medium text-gray-800">
                        {product.name}
                      </span>
                    </div>
                    <span className="text-black font-semibold">
                      ₹ {product.price}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between mt-4 text-lg font-semibold">
                <span>Total:</span>
                <span>₹ {total.toFixed(1)}</span>
              </div>

              <button
                className="w-full mt-4 bg-teal-700 text-white py-2 rounded-md hover:bg-teal-800 transition"
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                Checkout
              </button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
