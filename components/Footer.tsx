import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Fleet", href: "#fleet" },
  { name: "Destinations", href: "#destinations" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-700/20 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-black">

              <span className="text-blue-400">YAA</span>{" "}

              <span className="text-amber-400">TRAVELS</span>

            </h2>

            <p className="mt-6 leading-8 text-slate-400">

              Your trusted travel partner for safe, reliable and affordable
              taxi services from Coimbatore to destinations across Tamil Nadu,
              Kerala and Karnataka.

            </p>

            <a
              href="https://wa.me/919788289050"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-green-600 to-green-500 px-6 py-4 font-bold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <FaWhatsapp />

              Book on WhatsApp

              <ChevronRight size={18} />

            </a>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-bold">

              Quick Links

            </h3>

            <ul className="space-y-4">

              {quickLinks.map((item) => (

                <li key={item.name}>

                  <a
                    href={item.href}
                    className="text-slate-400 transition hover:translate-x-1 hover:text-white"
                  >
                    {item.name}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-bold">

              Contact

            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3 text-slate-400">

                <Phone size={18} className="text-blue-400" />

                <a
                  href="tel:+919788289050"
                  className="hover:text-white"
                >
                  +91 97882 89050
                </a>

              </div>

              <div className="flex items-center gap-3 text-slate-400">

                <Mail size={18} className="text-blue-400" />

                <a
                  href="mailto:yaaenterprises25@gmail.com"
                  className="hover:text-white"
                >
                  yaaenterprises25@gmail.com
                </a>

              </div>

              <div className="flex items-start gap-3 text-slate-400">

                <MapPin
                  size={18}
                  className="mt-1 text-blue-400"
                />

                <span>

                  Podanur,
                  <br />
                  Coimbatore,
                  Tamil Nadu

                </span>

              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="mb-6 text-xl font-bold">

              Follow Us

            </h3>

            <p className="mb-6 text-slate-400">

              Stay connected with YAA Travels for offers,
              updates and travel tips.

            </p>

            <div className="flex gap-4">

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 transition hover:scale-110"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-600 transition hover:scale-110"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/919788289050"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 transition hover:scale-110"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-slate-800 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 md:flex-row">

            <p>

              © {new Date().getFullYear()} YAA Travels.
              All Rights Reserved.

            </p>

            <p>

              Designed with ❤️ in Coimbatore

            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}