import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Navbar from "@/components/navbar";
import Footer from "./components/Footer";
import FooterTextSlider from "./components/FooterTextSlider";

function Layout() {
  return (
    <main className="bg-white">
      <Navbar />
      <FooterTextSlider />
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
        path: "about",
        lazy: async () => {
          const module = await import("@/pages/About");
          return { Component: module.default };
        },
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={appRouter} />;
}
