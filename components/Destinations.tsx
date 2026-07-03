import Image from "next/image";

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
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Popular Destinations
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Travel Anywhere with Yaa Travels
          </h2>

          <p className="mt-4 text-gray-600">
            Comfortable rides from Coimbatore to the most popular destinations.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((place) => (
            <div
              key={place.name}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <Image
                src={place.image}
                alt={place.name}
                width={500}
                height={300}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{place.name}</h3>

                <p className="mt-2 text-gray-500">
                  Pickup from Coimbatore
                </p>

                <a
                  href="https://wa.me/919788289050"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
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