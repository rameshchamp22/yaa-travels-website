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
      className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#155EEF] to-[#2563EB] text-white"
    >
      {/* Background Glow */}

      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"></div>

      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6 pt-44 pb-24">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 backdrop-blur-md">

              <Car size={18} />

              <span className="text-sm font-semibold">
                Premium Taxi Service
              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-7xl">

              Travel

              <br />

              <span className="text-yellow-400">
                SAFE,
              </span>

              <br />

              Travel

              <br />

              <span className="text-cyan-300">
                SMART
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

            <p className="mt-8 max-w-xl text-lg leading-8 text-blue-100">

              Safe, reliable and affordable taxi services from
              <span className="font-semibold text-white">
                {" "}Coimbatore{" "}
              </span>

              to destinations across

              <span className="font-semibold text-white">
                {" "}Tamil Nadu, Kerala & Karnataka.
              </span>

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="https://wa.me/919788289050"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-green-500 px-8 py-4 font-bold shadow-xl transition duration-300 hover:scale-105 hover:bg-green-600"
              >
                <MessageCircle size={22} />
                Book on WhatsApp
              </a>

              <a
                href="tel:+919788289050"
                className="flex items-center gap-3 rounded-2xl border border-white px-8 py-4 font-bold transition hover:bg-white hover:text-blue-700"
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

            <img
              src="/images/dzire.png"
              alt="Swift Dzire Tour"
              className="relative z-10 w-full max-w-xl animate-float drop-shadow-[0_25px_45px_rgba(0,0,0,0.45)]"
            />

          </div>

        </div>

      </div>

    </section>
  );
}