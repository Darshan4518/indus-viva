import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CustomerState {
  customerUserId: number | null;
  customerId: number | null;
  setCustomerUserId: (id: number) => void;
  setCustomerId: (id: number) => void;
  resetCustomer: () => void;
}

export const useCustomerStore = create<CustomerState>()(
  persist(
    (set) => ({
      customerUserId: null,
      customerId: null,
      setCustomerUserId: (id) => set({ customerUserId: id }),
      setCustomerId: (id) => set({ customerId: id }),
      resetCustomer: () => set({ customerUserId: null, customerId: null }),
    }),
    {
      name: "customer-store",
    }
  )
);
