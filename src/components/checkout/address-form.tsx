"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Loader2,
  MapPin,
  Phone,
  Home,
  MessageCircleMoreIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useAddressStore } from "@/stores/usAddressStore";
import { fetchLocations } from "@/services/api";
import { syncOrderSummary } from "@/lib/syncOrderSummary";

interface Address {
  address_line1?: string;
  address_line2?: string;
  postalcode_id?: number;
  postcode_id?: number;
  postalcode?: number;
  post_name?: string;
  is_service_available?: number;
  city_id?: number;
  city?: string;
  district_id?: number;
  district?: string;
  state_id?: number;
  state?: string;
  country_id?: number;
  country?: string;
  contact_no?: string;
  postalname?: string;
}

export default function AddressForm() {
  const { setSelectedAddress, selectedAddress } = useAddressStore();
  const [addressOptions, setAddressOptions] = useState<Address[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchPostalCode, setSearchPostalCode] = useState("");

  const [formData, setFormData] = useState<any>({
    address_line1: selectedAddress?.address_line1 || "",
    address_line2: selectedAddress?.address_line2 || "",
    postalcode_id: selectedAddress?.postalcode_id || 0,
    postcode_id: selectedAddress?.postcode_id || 0,
    postalcode: selectedAddress?.postalcode || 0,
    post_name: selectedAddress?.post_name || "",
    is_service_available: selectedAddress?.is_service_available || 0,
    city_id: selectedAddress?.city_id || 0,
    city: selectedAddress?.city || "",
    district_id: selectedAddress?.district_id || 0,
    district: selectedAddress?.district || "",
    state_id: selectedAddress?.state_id || 0,
    state: selectedAddress?.state || "",
    country_id: selectedAddress?.country_id || 89,
    country: selectedAddress?.country || "India",
    contact_no: selectedAddress?.contact_no || "",
    postalname: selectedAddress?.postalname || "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchPostalCodes = async () => {
      setIsLoading(true);
      try {
        const locations = await fetchLocations();
        setAddressOptions(locations.data.data as any);
      } catch (error) {
        console.error("Error fetching postal codes:", error);
        toast("Failed to fetch postal codes. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostalCodes();
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.address_line1?.trim()) {
      newErrors.address_line1 = "Address Line 1 is required";
    }
    if (!formData.postalname?.trim()) {
      newErrors.postalname = "Postal name is required";
    }
    if (!formData.postalcode_id) {
      newErrors.postalcode_id = "Please select a postal code";
    }

    if (!formData.contact_no?.trim()) {
      newErrors.contact_no = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.contact_no.replace(/\D/g, ""))) {
      newErrors.contact_no = "Please enter a valid 10-digit contact number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    try {
      setSelectedAddress(formData);
      syncOrderSummary();
      toast.success(
        `Address saved: ${formData.postalcode} - ${formData.post_name}`
      );
    } catch (error) {
      toast.error("Failed to save address. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof Address, value: string | number) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handlePostalCodeSelect = (postal: any) => {
    setFormData((prev: any) => ({
      ...prev,
      postalcode_id: postal.postalcode_id,
      postalcode: postal.postalcode,
      post_name: postal.post_name,
      is_service_available: postal.is_service_available,
      city_id: postal.city_id,
      city: postal.city_name,
      district_id: postal.district_id,
      district: postal.district_name,
      state_id: postal.state_id,
      state: postal.state_name,
      country_id: postal.country_id,
      country: postal.country_name,
    }));
    setSelectedAddress(formData);
  };

  const filteredAddressOptions = addressOptions.filter(
    (option) =>
      option.postalcode?.toString().includes(searchPostalCode) ||
      option.post_name?.toLowerCase().includes(searchPostalCode.toLowerCase())
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-2 sm:p-4">
      <Card className="w-full shadow-lg">
        <CardHeader className="space-y-2 p-4 sm:p-6">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600" />
            <CardTitle className="text-lg sm:text-xl">
              Shipping Address
            </CardTitle>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Please provide your complete shipping address details
          </p>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Postal Code Selection */}
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center gap-1">
                Select Postal Code <span className="text-red-500">*</span>
              </Label>
              {isLoading ? (
                <div className="flex items-center justify-center p-3 sm:p-4 border rounded-md">
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  <span className="text-sm">Loading postal codes...</span>
                </div>
              ) : (
                <Select
                  value={
                    formData.postalcode_id
                      ? formData.postalcode_id.toString()
                      : ""
                  }
                  onValueChange={(value) => {
                    const selected = addressOptions.find(
                      (p) => p.postalcode_id?.toString() === value
                    );
                    if (selected) handlePostalCodeSelect(selected);
                  }}
                >
                  <SelectTrigger
                    className={`h-11 sm:h-12 ${
                      errors.postalcode_id ? "border-red-500" : ""
                    }`}
                  >
                    <SelectValue placeholder="Search and select postal code" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60 sm:max-h-80">
                    <div className="p-2">
                      <Input
                        placeholder="Search postal code or area..."
                        value={searchPostalCode}
                        onChange={(e) => setSearchPostalCode(e.target.value)}
                        className="mb-2 h-9 sm:h-10"
                      />
                    </div>
                    {filteredAddressOptions.map((postal: any) => (
                      <SelectItem
                        key={postal.postalcode_id}
                        value={postal.postalcode_id?.toString() || ""}
                        className="p-2 sm:p-3"
                      >
                        <div className="flex flex-col items-start w-full">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-medium text-sm">
                              {postal.postalcode} - {postal.post_name}
                            </span>
                            {postal.is_service_available ? (
                              <Badge
                                variant="secondary"
                                className="text-xs bg-green-100 text-green-800"
                              >
                                Available
                              </Badge>
                            ) : (
                              <Badge variant="destructive" className="text-xs">
                                Not Available
                              </Badge>
                            )}
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                    {filteredAddressOptions.length === 0 && (
                      <div className="p-4 text-center text-sm text-muted-foreground">
                        No postal codes found
                      </div>
                    )}
                  </SelectContent>
                </Select>
              )}
              {errors.postalcode_id && (
                <p className="text-xs sm:text-sm text-red-500">
                  {errors.postalcode_id}
                </p>
              )}
            </div>

            {/* Address Lines */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center gap-1">
                  <Home className="h-3 w-3 sm:h-4 sm:w-4" />
                  Address Line 1 <span className="text-red-500">*</span>
                </Label>
                <Input
                  value={formData.address_line1}
                  onChange={(e) =>
                    handleInputChange("address_line1", e.target.value)
                  }
                  placeholder="House/Flat number, Building name, Street"
                  className={`h-11 sm:h-12 ${
                    errors.address_line1 ? "border-red-500" : ""
                  }`}
                />
                {errors.address_line1 && (
                  <p className="text-xs sm:text-sm text-red-500">
                    {errors.address_line1}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Address Line 2</Label>
                <Input
                  value={formData.address_line2}
                  onChange={(e) =>
                    handleInputChange("address_line2", e.target.value)
                  }
                  placeholder="Landmark, Area (Optional)"
                  className="h-11 sm:h-12"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center gap-1">
                  <MessageCircleMoreIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                  Postal Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  value={formData.postalname}
                  onChange={(e) =>
                    handleInputChange("postalname", e.target.value)
                  }
                  placeholder="Devasandra S.O"
                  className={`h-11 sm:h-12 ${
                    errors.postalname ? "border-red-500" : ""
                  }`}
                />
                {errors.postalname && (
                  <p className="text-xs sm:text-sm text-red-500">
                    {errors.postalname}
                  </p>
                )}
              </div>
            </div>

            {/* Auto-filled Location Fields */}
            {formData.postalcode_id && (
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                  Location Details (Auto-filled)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm">City</Label>
                    <Input
                      value={formData.city}
                      readOnly
                      className="bg-muted h-10 sm:h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm">District</Label>
                    <Input
                      value={formData.district}
                      readOnly
                      className="bg-muted h-10 sm:h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm">State</Label>
                    <Input
                      value={formData.state}
                      readOnly
                      className="bg-muted h-10 sm:h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm">Postal Code</Label>
                    <Input
                      value={formData.postalcode}
                      readOnly
                      className="bg-muted h-10 sm:h-11"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Contact */}
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center gap-1">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                Contact Number <span className="text-red-500">*</span>
              </Label>
              <Input
                value={formData.contact_no}
                onChange={(e) =>
                  handleInputChange("contact_no", e.target.value)
                }
                placeholder="Enter 10-digit contact number"
                type="tel"
                inputMode="numeric"
                className={`h-11 sm:h-12 ${
                  errors.contact_no ? "border-red-500" : ""
                }`}
              />
              {errors.contact_no && (
                <p className="text-xs sm:text-sm text-red-500">
                  {errors.contact_no}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 h-11 sm:h-12 text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving Address...
                </>
              ) : (
                "Save Address"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
