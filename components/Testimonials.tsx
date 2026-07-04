import { Star } from "lucide-react";
import SectionTitle from "./SectionTitle";

const reviews = [
  {
    name: "Arun Kumar",
    location: "Coimbatore",
    review:
      "Excellent service! The driver arrived on time, and the journey was very comfortable.",
  },
  {
    name: "Priya S",
    location: "Pollachi",
    review:
      "Booked an airport pickup. Very professional service and reasonable pricing.",
  },
  {
    name: "Karthik R",
    location: "Tiruppur",
    review:
      "Clean vehicle, friendly driver, and smooth ride. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="Customer Reviews"
          title="What Our Customers Say"
          subtitle="We are proud to provide safe, reliable and comfortable taxi services. Here's what some of our customers have to say."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="group rounded-3xl bg-slate-50 p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Rating */}
              <div className="mb-6 flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="leading-7 text-gray-600 italic">
                "{review.review}"
              </p>

              {/* Customer */}
              <div className="mt-8 border-t pt-5">
                <h3 className="text-lg font-bold text-slate-900">
                  {review.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}