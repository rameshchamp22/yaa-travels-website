import {
  ShieldCheck,
  Clock3,
  Car,
  BadgeIndianRupee,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description: "Professional drivers with well-maintained and sanitized vehicles.",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: Clock3,
    title: "24×7 Service",
    description: "Available anytime for airport, local and outstation trips.",
    color: "from-indigo-600 to-blue-500",
  },
  {
    icon: Car,
    title: "Comfortable Ride",
    description: "Clean, air-conditioned vehicles for a smooth journey.",
    color: "from-sky-600 to-cyan-500",
  },
  {
    icon: BadgeIndianRupee,
    title: "Affordable Pricing",
    description: "Transparent pricing with absolutely no hidden charges.",
    color: "from-green-600 to-emerald-500",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24">

      {/* Background Glow */}

      <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-blue-200/30 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

            Why Choose Us

          </span>

          <h2 className="mt-5 text-5xl font-extrabold text-slate-900">

            Why Choose YAA Travels

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">

            We provide safe, reliable and affordable taxi services across
            Tamil Nadu with experienced drivers and transparent pricing.

          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl"
              >

                {/* Hover Glow */}

                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                {/* Icon */}

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg transition-all duration-300 group-hover:scale-110`}
                >

                  <Icon className="h-8 w-8 text-white" />

                </div>

                {/* Title */}

                <h3 className="mt-6 text-2xl font-bold text-slate-900">

                  {item.title}

                </h3>

                {/* Description */}

                <p className="mt-4 leading-7 text-slate-600">

                  {item.description}

                </p>

                {/* Bottom */}

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-green-600">

                  <CheckCircle2 size={18} />

                  Trusted by 500+ Customers

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}