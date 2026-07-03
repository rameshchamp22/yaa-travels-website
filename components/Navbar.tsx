"use client";

import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Fleet", href: "#fleet" },
    { name: "Destinations", href: "#destinations" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-xl text-white">
            🚖
          </div>

          <div>
            <h1 className="text-2xl font-bold text-blue-700">
              YAA TRAVELS
            </h1>

            <p className="text-xs text-gray-500">
              Your Trusted Travel Partner
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-gray-700 transition hover:text-blue-700"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+919788289050"
            className="flex items-center gap-2 rounded-lg border border-blue-700 px-4 py-2 font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
          >
            <Phone size={18} />
            Call
          </a>

          <a
            href="https://wa.me/919788289050"
            target="_blank"
            className="rounded-lg bg-green-600 px-5 py-2 font-semibold text-white transition hover:bg-green-700"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white md:hidden">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-6 py-4 hover:bg-gray-100"
            >
              {item.name}
            </a>
          ))}

          <div className="space-y-3 p-4">
            <a
              href="tel:+919788289050"
              className="block rounded-lg border border-blue-700 py-3 text-center font-semibold text-blue-700"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919788289050"
              target="_blank"
              className="block rounded-lg bg-green-600 py-3 text-center font-semibold text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}