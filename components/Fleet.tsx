import Image from "next/image";
import {
  Users,
  Briefcase,
  Snowflake,
  ShieldCheck,
  Star,
  CheckCircle,
  ChevronRight,
  IndianRupee,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Fleet() {
  return (
    <section
      id="fleet"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-blue-200/30 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="Our Fleet"
          title="Travel in Comfort"
          subtitle="Comfortable, air-conditioned sedan ideal for airport transfers, outstation trips, business travel and family rides."
        />

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-2">

          {/* Vehicle */}

          <div className="flex justify-center">

            <Image
              src="/images/dzire.png"
              alt="Swift Dzire Tour"
              width={620}
              height={400}
              priority
              className="animate-float drop-shadow-[0_30px_50px_rgba(0,0,0,0.25)] transition duration-500 hover:scale-105"
            />

          </div>

          {/* Details */}

          <div>

            {/* Rating */}

            <div className="mb-5 flex items-center gap-1">

              {[1,2,3,4,5].map((item)=>(
                <Star
                  key={item}
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}

              <span className="ml-2 text-sm font-semibold text-slate-600">

                Top Rated Vehicle

              </span>

            </div>

            <h2 className="text-4xl font-extrabold text-slate-900">

              Swift Dzire Tour

            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">

              A premium sedan designed for comfortable city rides,
              airport transfers, long-distance travel and family trips.
              Clean, spacious and driven by experienced chauffeurs.

            </p>

            {/* Price */}

            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-3">

              <IndianRupee className="text-green-700" size={18} />

              <span className="font-bold text-green-700">

                Starting From ₹13 / KM

              </span>

            </div>

            {/* Features */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              <div className="flex items-center gap-3">

                <Users className="text-blue-600" />

                <span>Up to 4 Passengers</span>

              </div>

              <div className="flex items-center gap-3">

                <Briefcase className="text-blue-600" />

                <span>2 Large Luggage</span>

              </div>

              <div className="flex items-center gap-3">

                <Snowflake className="text-blue-600" />

                <span>Air Conditioned</span>

              </div>

              <div className="flex items-center gap-3">

                <ShieldCheck className="text-blue-600" />

                <span>GPS Enabled</span>

              </div>

              <div className="flex items-center gap-3">

                <CheckCircle className="text-green-600" />

                <span>Daily Sanitized</span>

              </div>

              <div className="flex items-center gap-3">

                <CheckCircle className="text-green-600" />

                <span>Professional Driver</span>

              </div>

            </div>

            {/* Button */}

            <a
              href="https://wa.me/919788289050"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-green-600 to-green-500 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >

              Book This Vehicle

              <ChevronRight size={20} />

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}