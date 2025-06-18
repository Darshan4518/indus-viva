import axios from "axios";

const BASE_URL = "https://uat-api.machinesarehere.com";
const DISTRIBUTOR_ID = "MTAwMi8zMjIwOTk1Mzk=";

export const verifyPhone = (phone: string) =>
  axios.post(`${BASE_URL}/enrollment/phone-verify`, { phone });

export const sendOtp = (phone: string) =>
  axios.post(`${BASE_URL}/auth/send-otp-to-customer-phone`, { phone });

export const verifyOtp = (phone: string, phone_otp: string) =>
  axios.post(`${BASE_URL}/auth/verify-customer-phone-otp`, {
    phone,
    phone_otp,
  });

export const signUpCustomer = (name: string, phone: string, email: string) =>
  axios.post(`${BASE_URL}/auth/customer-sign-up`, {
    name,
    phone,
    email,
    distributor_id: DISTRIBUTOR_ID,
  });

export const fetchCustomerDetails = (customer_user_id: number) =>
  axios.post(`${BASE_URL}/enrollment/fetch-customer-details`, {
    customer_user_id,
  });

export const fetchCustomerOrders = (customer_id: number, page_no = 1) =>
  axios.post(`${BASE_URL}/reports/store/fetch-my-orders`, {
    customer_id,
    distributor_id: DISTRIBUTOR_ID,
    page_no,
  });


