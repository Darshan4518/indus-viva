import { Mail, Phone, Facebook, Twitter, Linkedin } from "lucide-react";
import FooterBrandSlider from "./FooterBrandSlider";
import logo from "@/assets/img/new/logo.svg";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-6 relative Z-20">
      <section className=" max-w-6xl mx-auto">
        <div className=" flex justify-between items-center my-10">
          <div className=" w-[40%] bg-gray-500/40 h-0.5" />
          <h2>Global Trusted Partner</h2>
          <div className=" w-[40%] bg-gray-500/40 h-0.5" />
        </div>

        <FooterBrandSlider />

        <div className=" flex items-center justify-between my-4 py-6">
          <img src={logo} alt="Logo" className="h-10 mb-4" />
          <div className=" w-[60%] bg-gray-500/30 h-0.5" />
          <div className="flex space-x-4 mt-4 text-gray-400">
            <Facebook className="w-5 h-5 hover:text-white" />
            <Twitter className="w-5 h-5 hover:text-white" />
            <Linkedin className="w-5 h-5 hover:text-white" />
          </div>
        </div>

        <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-800 justify-evenly">
          <div>
            <h4 className="font-semibold mb-3">Main Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/career">Career</Link>
              </li>
              <li>
                <Link to="/medical-panel">Medical Panel</Link>
              </li>
              <li>
                <Link to="/products">Our Products</Link>
              </li>
              <li>
                <Link to="/virtual-office">Virtual Office</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/search-vbos">Search VBOs</Link>
              </li>
              <li>
                <Link to="/compensation-plan">Compensation Plan</Link>
              </li>
              <li>
                <Link to="/compliance-documents">Compliance Documents</Link>
              </li>
              <li>
                <Link to="/service-request">Create Service Request</Link>
              </li>
              <li>
                <Link to="/track-service">Track Service</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Policies</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="#vbo-contract">VBO Contract</Link>
              </li>
              <li>
                <Link to="#vbo-application">VBO Application</Link>
              </li>
              <li>
                <Link to="#policies-procedures">Policies & Procedures</Link>
              </li>
              <li>
                <Link to="#refund-policy">Return and Refund policy</Link>
              </li>
              <li>
                <Link to="#payment-policy">Payment Mode Policy</Link>
              </li>
              <li>
                <Link to="#grievance-redressal">Grievance Redressal</Link>
              </li>
              <li>
                <Link to="#shipping-policy">Shipment and Delivery</Link>
              </li>
            </ul>
          </div>

          <div className=" space-y-2">
            <h4 className="font-semibold mb-3">Contact Info</h4>
            <p className=" text-gray-400 font-semibold text-base">Email us</p>
            <p className="text-white flex items-center gap-2 text-lg font-semibold  ">
              support@indusviva.com
            </p>
            <p className=" text-gray-400 text-base font-semibold">Phone no</p>
            <p className="text-white flex items-center gap-2 mt-2 text-lg font-semibold">
              1800 103 4916
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center px-6 py-4">
          <p>
            © Copyright 2025 | Powered by{" "}
            <span className="text-green-500">Grace Media</span>
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link
                to="/csr-policy"
                className=" border-r-2 border-white/50 pr-2"
              >
                CSR POLICY
              </Link>
              <Link
                to="/privacy-policy"
                className=" border-r-2 border-white/50 pr-2"
              >
                PRIVACY & POLICY
              </Link>
              <Link
                to="/disclaimer"
                className=" border-r-2 border-white/50 pr-2"
              >
                DISCLAIMER
              </Link>
              <Link
                to="https://magicads.ae/indus-viva/assets/img/new/pdf/Terms.pdf"
                className=" border-r-2 border-white/50 pr-2"
                target="_blank"
              >
                TERMS & CONDITIONS
              </Link>
            </div>
          </div>
        </div>

        <button
          className="fixed bottom-6 right-6 bg-teal-600 text-white py-3 px-4  rounded-2xl shadow-lg hover:bg-teal-700 z-400 transition duration-300 ease-in-out"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      </section>
    </footer>
  );
}
