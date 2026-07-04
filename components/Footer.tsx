import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              YAA TRAVELS
            </h2>

            <p className="mt-4 text-gray-400">
              Your trusted travel partner for safe, comfortable and affordable
              taxi services from Coimbatore to anywhere in Tamil Nadu and
              neighbouring states.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#fleet" className="hover:text-white">Fleet</a></li>
              <li><a href="#destinations" className="hover:text-white">Destinations</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex items-center gap-3">
                <Phone size={18}/>
                <span>+91 97882 89050</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18}/>
                <span>yaaenterprises25@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18}/>
                <span>Podanur, Coimbatore</span>
              </div>

            </div>
          </div>

          {/* Social */}
          <div>

            <h3 className="mb-4 text-xl font-semibold">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="rounded-full bg-blue-600 p-3 hover:bg-blue-700"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="#"
                className="rounded-full bg-pink-600 p-3 hover:bg-pink-700"
              >
                <FaInstagram size={20} />
              </a>

            </div>

            <a
              href="https://wa.me/919788289050"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-xl bg-green-600 px-6 py-3 font-semibold hover:bg-green-700"
            >
              Book on WhatsApp
            </a>

          </div>

        </div>

        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-gray-500">
          © {new Date().getFullYear()} Yaa Travels. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}