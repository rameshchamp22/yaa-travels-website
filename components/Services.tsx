import {
  Plane,
  ArrowRightLeft,
  Route,
  Mountain,
  Building2,
  Clock3,
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Pickup & Drop",
    description: "On-time airport transfers to and from Coimbatore Airport.",
  },
  {
    icon: ArrowRightLeft,
    title: "One Way Taxi",
    description: "Affordable one-way taxi service across Tamil Nadu.",
  },
  {
    icon: Route,
    title: "Round Trip",
    description: "Comfortable round-trip rides for business and family travel.",
  },
  {
    icon: Mountain,
    title: "Tour Packages",
    description: "Explore Ooty, Munnar, Kodaikanal and more.",
  },
  {
    icon: Building2,
    title: "Corporate Travel",
    description: "Reliable transportation for companies and business trips.",
  },
  {
    icon: Clock3,
    title: "24×7 Taxi Service",
    description: "Available anytime, day or night, whenever you need us.",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Taxi Services Designed Around Your Travel Needs
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Whether it's an airport transfer, a family vacation, or a business
            trip, Yaa Travels provides safe, comfortable, and reliable rides.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 transition group-hover:bg-blue-600">
                  <Icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-600">
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