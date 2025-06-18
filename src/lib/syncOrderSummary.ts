import { useAddressStore } from "@/stores/usAddressStore";
import { useCartStore } from "@/stores/useCartStore";
import axios from "axios";

export const syncOrderSummary = async () => {
  const cartItems = useCartStore.getState().items;
  const address = useAddressStore.getState().selectedAddress;

  const payload: any = {
    platformId: 7,
    delivery_mode_id: 3,
    warehouse: null,
    address: {
      billing_same_as_shipping: 1,
      shipping: {
        id:null,
        ...address,
        is_shipping_address: 1,
        is_billing_address: 0,
      },
      billing: {
        ...address,
        is_shipping_address: 0,
        is_billing_address: 1,
      },
    },
    order_items: cartItems.map((item) => ({
      id: item.id,
      product_name: item.name,
      thumbnail_url: item.img,
      pv: item.pv,
      selling_price: item.price,
      quantity: item.quantity,
    })),
    is_faster_delivery: 0,
    otp_verification_status: 0,
    is_voucher_applied: 0,
    voucher: [],
  };

  try {
    console.log(payload);

    await axios.post(
      "https://uat-api.machinesarehere.com/sales/v1/website/order-summary",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("✅ Order summary synced");
  } catch (error) {
    console.error("❌ Order summary failed", error);
  }
};
