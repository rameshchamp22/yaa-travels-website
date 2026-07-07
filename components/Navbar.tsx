"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  CarFront,
  ChevronRight,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Fleet", href: "#fleet" },
    { name: "Destinations", href: "#destinations" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-slate-200 bg-white/95 backdrop-blur-xl shadow-large"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="#home" className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-blue-500 shadow-lg">

            <CarFront className="h-7 w-7 text-white" />

          </div>

          <div>

            <h1 className="text-2xl font-black tracking-tight">

              <span className="text-blue-700">YAA</span>{" "}

              <span className="text-amber-500">TRAVELS</span>

            </h1>

            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">

              Trusted Travel Partner

            </p>

          </div>

        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-10 lg:flex">

          {menuItems.map((item) => (

            <a
              key={item.name}
              href={item.href}
              className={`group relative font-semibold transition duration-300 ${
                scrolled
                  ? "text-slate-700 hover:text-blue-700"
                  : "text-white hover:text-cyan-300"
              }`}
            >
              {item.name}

              <span className="absolute -bottom-2 left-0 h-[3px] w-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full" />

            </a>

          ))}

        </nav>

        {/* Right Side */}

        <div className="hidden items-center gap-6 lg:flex">

          <a
            href="tel:+919788289050"
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
              scrolled
                ? "text-slate-700 hover:text-blue-700"
                : "bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
            }`}
          >
            <Phone size={18} />

            +91 97882 89050

          </a>

          <a
            href="https://wa.me/919788289050"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
          >
            Book Ride

            <ChevronRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />

          </a>

        </div>

        {/* Mobile */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-xl border p-2 transition ${
            scrolled
              ? "border-slate-300 bg-white"
              : "border-white/20 bg-white/10 text-white backdrop-blur-md"
          } lg:hidden`}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {isOpen && (

        <div className="border-t border-slate-200 bg-white lg:hidden">

          <div className="space-y-2 p-6">

            {menuItems.map((item) => (

              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
              >
                {item.name}
              </a>

            ))}

            <div className="mt-6 space-y-3">

              <a
                href="tel:+919788289050"
                className="flex items-center justify-center gap-2 rounded-xl border border-blue-700 py-3 font-semibold text-blue-700"
              >
                <Phone size={18} />

                Call Now

              </a>

              <a
                href="https://wa.me/919788289050"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-semibold text-white"
              >
                Book Ride

                <ChevronRight size={18} />

              </a>

            </div>

          </div>

        </div>

      )}

    </header>
  );
}