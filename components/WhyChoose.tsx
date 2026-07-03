import { ShieldCheck, Clock3, Car, BadgeIndianRupee } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
    title: "Safe & Secure",
    description: "Professional drivers and well-maintained vehicles.",
  },
  {
    icon: <Clock3 className="h-10 w-10 text-blue-600" />,
    title: "24×7 Service",
    description: "Available anytime for airport and outstation travel.",
  },
  {
    icon: <Car className="h-10 w-10 text-blue-600" />,
    title: "Comfortable Ride",
    description: "Clean, air-conditioned Swift Dzire Tour.",
  },
  {
    icon: <BadgeIndianRupee className="h-10 w-10 text-blue-600" />,
    title: "Affordable Pricing",
    description: "Transparent pricing with no hidden charges.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Why Choose Yaa Travels
        </h2>

        <p className="mt-4 text-center text-gray-500">
          Reliable taxi services you can trust.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              {item.icon}

              <h3 className="mt-5 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}