"use client";

import { useState } from "react";
import {
  User,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Users,
  Car,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    date: "",
    time: "",
    passengers: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const bookNow = () => {
    const message = `Hello YAA TRAVELS,

I would like to book a taxi.

Name: ${form.name}
Phone: ${form.phone}

Pickup Location: ${form.pickup}
Drop Location: ${form.drop}

Travel Date: ${form.date}
Pickup Time: ${form.time}

Passengers: ${form.passengers}

Please share the fare details and confirm the booking.

Thank you!`;

    window.open(
      `https://wa.me/919788289050?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="relative bg-transparent py-0">
      <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-6xl rounded-[32px] border border-white/60 bg-white/90 p-10 shadow-[0_30px_80px_rgba(15,23,42,0.18)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_100px_rgba(15,23,42,0.22)]">

        <div className="text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-blue-700">

            <MessageCircle size={18} />

            <span className="text-sm font-semibold">

              🚖 Quick Booking

            </span>

          </div>

          <h2 className="text-5xl font-black text-slate-900">

            Book Your Ride

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-500">

            Fill in your trip details below and receive an instant booking confirmation through WhatsApp.

          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {/* Full Name */}

          <div className="relative">

            <User
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />

            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />

          </div>

          {/* Phone */}

          <div className="relative">

            <Phone
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />

            <input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />

          </div>

          {/* Pickup */}

          <div className="relative">

            <MapPin
              className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500"
              size={20}
            />

            <input
              name="pickup"
              placeholder="Pickup Location"
              value={form.pickup}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition-all duration-300 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
            />

          </div>

          {/* Drop */}

          <div className="relative">

            <MapPin
              className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500"
              size={20}
            />

            <input
              name="drop"
              placeholder="Drop Location"
              value={form.drop}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition-all duration-300 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
            />

          </div>

          {/* Date */}

          <div className="relative">

            <Calendar
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />

          </div>

          {/* Time */}

          <div className="relative">

            <Clock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />

            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />

          </div>

          {/* Passengers */}

          <div className="relative md:col-span-2">

            <Users
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />

            <select
              name="passengers"
              value={form.passengers}
              onChange={handleChange}
              className="w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            >
              <option value="">Select Passengers</option>
              <option value="1">1 Passenger</option>
              <option value="2">2 Passengers</option>
              <option value="3">3 Passengers</option>
              <option value="4">4 Passengers</option>
              <option value="5+">5+ Passengers</option>
            </select>

          </div>

        </div>
        <button
          onClick={bookNow}
          className="mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-green-600 to-green-500 py-5 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xshadow-[0_30px_80px_rgba(15,23,42,0.18)]"
        >
          Book Ride Now
        </button>

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <div className="flex items-center justify-center gap-2 rounded-xl bg-green-50 py-3">

          <CheckCircle
            size={18}
            className="text-green-600"
          />

          <span className="text-sm font-semibold">

            Instant Confirmation

          </span>

        </div>

        <div className="flex items-center justify-center gap-2 rounded-xl bg-blue-50 py-3">

          <CheckCircle
            size={18}
            className="text-blue-600"
          />

          <span className="text-sm font-semibold">

            No Hidden Charges

          </span>

        </div>

        <div className="flex items-center justify-center gap-2 rounded-xl bg-amber-50 py-3">

          <CheckCircle
            size={18}
            className="text-amber-600"
          />

          <span className="text-sm font-semibold">

            24×7 Support

          </span>

        </div>

      </div>

      </div>
    </section>
  );
}