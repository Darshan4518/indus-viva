import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Navbar from "@/components/navbar";
import Footer from "./components/Footer";

function Layout() {
  return (
    <main className="">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        lazy: async () => {
          const module = await import("@/pages/Home");
          return { Component: module.default };
        },
      },
      {
        path: "/about",
        lazy: async () => {
          const module = await import("@/pages/About");
          return { Component: module.default };
        },
      },
      {
        path: "/medical-panel",
        lazy: async () => {
          const module = await import("@/pages/MedicalPanel");
          return { Component: module.default };
        },
      },
      {
        path: "/medical-panel",
        lazy: async () => {
          const module = await import("@/pages/MedicalPanel");
          return { Component: module.default };
        },
      },
      {
        path: "/our-products",
        lazy: async () => {
          const module = await import("@/pages/Products");
          return { Component: module.default };
        },
      },
      {
        path: "/contact-us",
        lazy: async () => {
          const module = await import("@/pages/ConactUs");
          return { Component: module.default };
        },
      },
      {
        path: "/customer-care",
        lazy: async () => {
          const module = await import("@/pages/CostumerCare");
          return { Component: module.default };
        },
      },
      {
        path: "/virtual-office",
        lazy: async () => {
          const module = await import("@/pages/Login");
          return { Component: module.default };
        },
      },
    ],
  },
  {
    path: "/login",
    lazy: async () => {
      const module = await import("@/pages/Login");
      return { Component: module.default };
    },
  },
]);

export default function App() {
  return <RouterProvider router={appRouter} />;
}
