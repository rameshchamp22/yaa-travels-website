import Image from "next/image";
import SectionTitle from "./SectionTitle";

const destinations = [
  {
    name: "Ooty",
    image: "/images/destinations/ooty.jpg",
  },
  {
    name: "Munnar",
    image: "/images/destinations/munnar.jpg",
  },
  {
    name: "Kodaikanal",
    image: "/images/destinations/kodaikanal.jpg",
  },
  {
    name: "Mysore",
    image: "/images/destinations/mysore.jpg",
  },
  {
    name: "Bangalore",
    image: "/images/destinations/bangalore.jpg",
  },
  {
    name: "Kochi",
    image: "/images/destinations/kochi.jpg",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="Popular Destinations"
          title="Travel Anywhere with Yaa Travels"
          subtitle="Explore the most popular destinations from Coimbatore with safe, comfortable and affordable taxi services."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((place) => (
            <div
              key={place.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <Image
                  src={place.image}
                  alt={place.name}
                  width={500}
                  height={300}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  {place.name}
                </h3>

                <p className="mt-2 text-gray-500">
                  Pickup from Coimbatore
                </p>

                <a
                  href={`https://wa.me/919788289050?text=${encodeURIComponent(
                    `Hello Yaa Travels, I would like to book a taxi from Coimbatore to ${place.name}. Please share the fare details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}