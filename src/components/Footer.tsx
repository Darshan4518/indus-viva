import { Facebook, Twitter, Linkedin } from "lucide-react";
import FooterBrandSlider from "./FooterBrandSlider";
import logo from "@/assets/img/new/logo.svg";
import { Link } from "react-router";
import FooterCertificateSlider from "./FooterCertificate";

export default function Footer() {
  return (
    <footer className="bg-[#e6e6e6] text-black py-6 relative z-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-center items-center my-10 gap-4 text-center">
          <div className="w-full sm:w-[40%] bg-gray-500/40 h-0.5" />
          <h2 className="text-base sm:text-lg font-medium">
            Global Trusted Partner
          </h2>
          <div className="w-full sm:w-[40%] bg-gray-500/40 h-0.5" />
        </div>

        <FooterBrandSlider />

        <div className="flex flex-col sm:flex-row justify-center items-center my-10 gap-4 text-center">
          <div className="w-full sm:w-[40%] bg-gray-500/40 h-0.5" />
          <h2 className="text-base sm:text-lg font-medium">
            Certified by Leading Authorities
          </h2>
          <div className="w-full sm:w-[40%] bg-gray-500/40 h-0.5" />
        </div>

        <FooterCertificateSlider />

        <div className="flex flex-col sm:flex-row items-center justify-between my-6 gap-4">
          <img src={logo} alt="Logo" className="h-10" />
          <div className="hidden sm:block w-full sm:w-[60%] bg-gray-500/30 h-0.5" />
          <div className="flex space-x-4 text-gray-400">
            <Facebook className="w-5 h-5 hover:text-white" />
            <Twitter className="w-5 h-5 hover:text-white" />
            <Linkedin className="w-5 h-5 hover:text-white" />
          </div>
        </div>

        {/* Link Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 py-8 text-sm">
          <div>
            <h4 className="font-semibold mb-3">Main Links</h4>
            <ul className="space-y-2 text-gray-900">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/careers">Career</Link>
              </li>
              <li>
                <Link to="/medical-panel">Medical Panel</Link>
              </li>
              <li>
                <Link to="/our-products">Our Products</Link>
              </li>
              <li>
                <Link to="/virtual-office">Virtual Office</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-900">
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

          {/* Policies */}
          <div>
            <h4 className="font-semibold mb-3">Policies</h4>
            <ul className="space-y-2 text-gray-900">
              <li>
                <Link
                  to="https://indusviva.com/wp-content/uploads/2025/02/VBO-Contract-C.pdf"
                  target="_blank"
                >
                  VBO Contract
                </Link>
              </li>
              <li>
                <Link
                  to="https://indusviva.com/wp-content/uploads/2025/01/Directseller-Application-Form.pdf"
                  target="_blank"
                >
                  VBO Application
                </Link>
              </li>
              <li>
                <Link
                  to="https://indusviva.com/wp-content/uploads/2025/01/policies-and-procedures.pdf"
                  target="_blank"
                >
                  Policies & Procedures
                </Link>
              </li>
              <li>
                <Link
                  to="https://indusviva.com/wp-content/uploads/2025/02/Return-Refund-Policy_C.pdf"
                  target="_blank"
                >
                  Return and Refund policy
                </Link>
              </li>
              <li>
                <Link
                  to="https://indusviva.com/wp-content/uploads/2025/01/Payment-Mode-Policy-C.pdf"
                  target="_blank"
                >
                  Payment Mode Policy
                </Link>
              </li>
              <li>
                <Link
                  to="https://indusviva.com/wp-content/uploads/2025/01/Grievance-redressal.pdf"
                  target="_blank"
                >
                  Grievance Redressal
                </Link>
              </li>
              <li>
                <Link
                  to="https://indusviva.com/wp-content/uploads/2025/01/Shipment-and-delivery-policy.pdf"
                  target="_blank"
                >
                  Shipment and Delivery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h4 className="font-semibold mb-3">Contact Info</h4>
            <p className="text-gray-900 font-semibold">Email us</p>
            <p className="text-black text-lg font-semibold">
              <a href="mailto:support@indusviva.com">support@indusviva.com</a>
            </p>
            <p className="text-gray-900 font-semibold">Phone no</p>
            <p className="text-black text-lg font-semibold">
              <a href="tel:1800 103 4916">1800 103 4916</a>
            </p>
          </div>
        </div>

        {/* Bottom Legal + Social */}
        <div className="border-t border-gray-800 text-xs text-gray-900 flex flex-col md:flex-row justify-between items-center gap-2 px-4 py-4">
          <p className="text-center">
            © Copyright 2025 | Powered by{" "}
            <span className="text-green-500">Grace Media</span>
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-2 text-center mt-2 md:mt-0">
            <Link to="/csr-policy">CSR POLICY</Link>
            <span className="hidden md:inline">|</span>
            <Link to="/privacy-policy">PRIVACY & POLICY</Link>
            <span className="hidden md:inline">|</span>
            <Link to="/disclaimer">DISCLAIMER</Link>
            <span className="hidden md:inline">|</span>
            <Link
              to="https://magicads.ae/indus-viva/assets/img/new/pdf/Terms.pdf"
              target="_blank"
            >
              TERMS & CONDITIONS
            </Link>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          className="fixed bottom-6 right-6 bg-teal-600 text-black py-2 px-3 rounded-full shadow-lg hover:bg-teal-700 transition duration-300 ease-in-out"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      </section>
    </footer>
  );
}
