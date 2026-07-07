import {
  Plane,
  ArrowRightLeft,
  Route,
  Mountain,
  Building2,
  Clock3,
  ArrowRight,
} from "lucide-react";

import SectionTitle from "./SectionTitle";

const services = [
  {
    icon: Plane,
    title: "Airport Pickup & Drop",
    description:
      "Reliable airport pickup and drop services from Coimbatore International Airport.",
  },
  {
    icon: ArrowRightLeft,
    title: "One Way Taxi",
    description:
      "Affordable one-way taxi services across Tamil Nadu and neighbouring states.",
  },
  {
    icon: Route,
    title: "Round Trip",
    description:
      "Comfortable round-trip travel for families, tourists and business trips.",
  },
  {
    icon: Mountain,
    title: "Hill Station Tours",
    description:
      "Enjoy relaxing trips to Ooty, Munnar, Kodaikanal and Valparai.",
  },
  {
    icon: Building2,
    title: "Corporate Travel",
    description:
      "Professional transportation for meetings, events and corporate travel.",
  },
  {
    icon: Clock3,
    title: "24×7 Taxi Service",
    description:
      "Available anytime with experienced drivers for safe travel.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24"
    >
      {/* Background Glow */}

      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-200/30 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="Our Services"
          title="Taxi Services Designed Around Your Travel Needs"
          subtitle="Airport transfers, one-way taxi, round trips, corporate travel and tour packages from Coimbatore."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl"
              >

                {/* Glow */}

                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-500">

                  <Icon className="h-8 w-8 text-blue-700 transition group-hover:text-white" />

                </div>

                {/* Title */}

                <h3 className="mt-6 text-2xl font-bold text-slate-900">

                  {service.title}

                </h3>

                {/* Description */}

                <p className="mt-4 leading-7 text-slate-600">

                  {service.description}

                </p>

                {/* Bottom Link */}

                <div className="mt-8 flex items-center gap-2 font-semibold text-blue-700 opacity-0 transition-all duration-300 group-hover:opacity-100">

                  Learn More

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}