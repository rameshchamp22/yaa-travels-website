import {
  Star,
  Quote,
  BadgeCheck,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const reviews = [
  {
    name: "Arun Kumar",
    location: "Coimbatore",
    review:
      "Excellent service! The driver arrived on time, the car was very clean and the entire journey was smooth. Highly recommended!",
  },
  {
    name: "Priya S",
    location: "Pollachi",
    review:
      "Booked an airport pickup for my parents. The driver was punctual, polite and the pricing was very reasonable.",
  },
  {
    name: "Karthik R",
    location: "Tiruppur",
    review:
      "Clean vehicle, friendly driver and excellent customer service. Definitely my first choice for outstation travel.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24">

      {/* Background Glow */}

      <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-blue-200/30 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="Customer Reviews"
          title="What Our Customers Say"
          subtitle="We are proud to provide safe, reliable and comfortable taxi services. Here's what our customers say about YAA Travels."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {reviews.map((review) => (

            <div
              key={review.name}
              className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl"
            >

              {/* Hover Glow */}

              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

              {/* Quote */}

              <Quote className="mb-5 h-10 w-10 text-blue-100 transition group-hover:text-blue-500" />

              {/* Rating */}

              <div className="mb-5 flex gap-1">

                {[1,2,3,4,5].map((item)=>(

                  <Star
                    key={item}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>

              {/* Review */}

              <p className="leading-8 text-slate-600 italic">

                "{review.review}"

              </p>

              {/* Customer */}

              <div className="mt-8 flex items-center justify-between border-t pt-6">

                <div>

                  <h3 className="text-xl font-bold text-slate-900">

                    {review.name}

                  </h3>

                  <p className="text-sm text-slate-500">

                    {review.location}

                  </p>

                </div>

                <BadgeCheck className="h-7 w-7 text-green-600" />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}