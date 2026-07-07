import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Plane,
  Car,
  Star,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-blue-600 text-white"
    >
      {/* Background Glow */}

      {/* Premium Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[120px]" />

        <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[120px]" />

        <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

      </div>


      <div className="mx-auto max-w-7xl px-6 pt-48 pb-44">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 backdrop-blur-md">

              <Car size={18} />

              <span className="text-sm font-semibold">
                Trusted by 500+ Happy Travelers
              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">

              Travel Beyond

              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-white to-yellow-300 bg-clip-text text-transparent">

                Expectations

              </span>

            </h1>

            {/* Rating */}

            <div className="mt-8 flex items-center gap-4">

              <div className="flex">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <span className="font-semibold">
                4.9 Rating • 500+ Happy Customers
              </span>

            </div>

            {/* Description */}

            Premium taxi services from

            <span className="font-semibold text-white">
              {" "}Coimbatore{" "}
            </span>

            for airport transfers, outstation trips, corporate travel and family vacations across

            <span className="font-semibold text-white">
              {" "}Tamil Nadu, Kerala, Andra & Karnataka.
            </span>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="https://wa.me/919788289050"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-green-500 px-8 py-5 font-bold shadow-xl transition duration-300 hover:scale-105 hover:bg-green-600"
              >
                <MessageCircle size={22} />
                Book on WhatsApp
              </a>

              <a
                href="tel:+919788289050"
                className="flex items-center gap-3 rounded-2xl border border-white px-8 py-5 font-bold transition hover:bg-white hover:text-blue-700"
              >
                <Phone size={22} />
                Call Now
              </a>

            </div>

            {/* Trust Features */}

            <div className="mt-12 grid grid-cols-2 gap-5 text-sm">

              <div className="flex items-center gap-3">

                <ShieldCheck className="text-green-400" />

                <span>24×7 Service</span>

              </div>

              <div className="flex items-center gap-3">

                <Plane className="text-yellow-400" />

                <span>Airport Pickup</span>

              </div>

              <div className="flex items-center gap-3">

                <Car className="text-cyan-300" />

                <span>Outstation Trips</span>

              </div>

              <div className="flex items-center gap-3">

                <ShieldCheck className="text-green-400" />

                <span>Professional Drivers</span>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative hidden justify-center lg:flex">

            {/* Blue Glow */}

            <div className="absolute h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl"></div>

            <Image
              src="/images/dzire.png"
              alt="Swift Dzire Tour"
              width={700}
              height={450}
              priority
              className="relative z-10 w-full max-w-xl animate-float drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
            />

          </div>

        </div>

      </div>

    </section>
  );
}