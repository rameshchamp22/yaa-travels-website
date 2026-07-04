import {
  Plane,
  ArrowRightLeft,
  Route,
  Mountain,
  Building2,
  Clock3,
} from "lucide-react";

import SectionTitle from "./SectionTitle";

const services = [
  {
    icon: Plane,
    title: "Airport Pickup & Drop",
    description:
      "Reliable airport pickup and drop services from Coimbatore Airport.",
  },
  {
    icon: ArrowRightLeft,
    title: "One Way Taxi",
    description:
      "Affordable one-way taxi services across Tamil Nadu and nearby states.",
  },
  {
    icon: Route,
    title: "Round Trip",
    description:
      "Comfortable round-trip travel for families and business trips.",
  },
  {
    icon: Mountain,
    title: "Hill Station Tours",
    description:
      "Enjoy trips to Ooty, Munnar, Kodaikanal and Valparai.",
  },
  {
    icon: Building2,
    title: "Corporate Travel",
    description:
      "Professional transportation for business meetings and corporate travel.",
  },
  {
    icon: Clock3,
    title: "24×7 Taxi Service",
    description:
      "Available anytime for your travel needs.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="Our Services"
          title="Taxi Services Designed Around Your Travel Needs"
          subtitle="Airport transfers, one-way taxi, round trips, corporate travel and tour packages from Coimbatore."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-700">
                  <Icon className="h-8 w-8 text-blue-700 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}