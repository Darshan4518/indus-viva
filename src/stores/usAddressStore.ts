import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Address {
  address_line1?: string;
  address_line2?: string;
  postalcode_id: number;
  postalcode: number;
  post_name: string;
  postalname?:string;
  is_service_available: number;
  city_id: number;
  city: string;
  district_id: number;
  district: string;
  state_id: number;
  state: string;
  country_id: number;
  country: string;
  contact_no?:string;
  postcode_id:number;
}

interface AddressStore {
  selectedAddress: Address | null;
  setSelectedAddress: (address: Address) => void;
}

export const useAddressStore = create<AddressStore>()(
  persist(
    (set) => ({
      selectedAddress: null,

      setSelectedAddress: (address) => {
        set({ selectedAddress: address });
      },
    }),
    {
      name: "selected-address-store",
    }
  )
);
