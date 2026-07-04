"use client";

import { useState } from "react";

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
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow-xl">

        <h2 className="text-center text-4xl font-bold">
          Book Your Taxi
        </h2>

        <p className="mt-3 text-center text-gray-500">
          Fill in your trip details and continue on WhatsApp.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          <input
            name="name"
            placeholder="Full Name"
            className="rounded-xl border p-4"
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone Number"
            className="rounded-xl border p-4"
            onChange={handleChange}
          />

          <input
            name="pickup"
            placeholder="Pickup Location"
            className="rounded-xl border p-4"
            onChange={handleChange}
          />

          <input
            name="drop"
            placeholder="Drop Location"
            className="rounded-xl border p-4"
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            className="rounded-xl border p-4"
            onChange={handleChange}
          />

          <input
            type="time"
            name="time"
            className="rounded-xl border p-4"
            onChange={handleChange}
          />

          <select
            name="passengers"
            className="rounded-xl border p-4"
            onChange={handleChange}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>

        </div>

        <button
          onClick={bookNow}
          className="mt-10 w-full rounded-xl bg-green-600 py-4 text-lg font-bold text-white hover:bg-green-700"
        >
          Book on WhatsApp
        </button>

      </div>
    </section>
  );
}