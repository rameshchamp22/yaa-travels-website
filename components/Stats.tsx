import { Users, Car, MapPinned, Clock3 } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    title: "Happy Customers",
  },
  {
    icon: Car,
    value: "1000+",
    title: "Trips Completed",
  },
  {
    icon: MapPinned,
    value: "50+",
    title: "Destinations",
  },
  {
    icon: Clock3,
    value: "24×7",
    title: "Support",
  },
];

export default function Stats() {
  return (
    <section className="bg-blue-700 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="text-center">
              <Icon className="mx-auto h-12 w-12 mb-4" />

              <h2 className="text-4xl font-bold">
                {item.value}
              </h2>

              <p className="mt-2 text-blue-100">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}