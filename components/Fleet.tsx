import Image from "next/image";
import { Users, Briefcase, Snowflake, ShieldCheck } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Fleet() {
  return (
    <section id="fleet" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="Our Fleet"
          title="Travel in Comfort"
          subtitle="Comfortable, air-conditioned sedan perfect for airport transfers, outstation trips and family travel."
        />
{/* 
          <h2 className="mt-4 text-4xl font-bold">
            Swift Dzire Tour
          </h2>

          <p className="mt-4 text-gray-600">
            Comfortable, clean and reliable for airport transfers,
            outstation trips and family travel.
          </p>
        </div> */}

        <div className="mt-16 grid items-center gap-14 md:grid-cols-2">

          <div className="flex justify-center">

            <Image
              src="/images/dzire.png"
              alt="Swift Dzire Tour"
              width={550}
              height={350}
              className="rounded-2xl"
              priority
            />

          </div>

          <div>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <Users className="text-blue-600" />
                <span>Up to 4 Passengers</span>
              </div>

              <div className="flex items-center gap-3">
                <Briefcase className="text-blue-600" />
                <span>2 Large Luggage</span>
              </div>

              <div className="flex items-center gap-3">
                <Snowflake className="text-blue-600" />
                <span>Air Conditioned</span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="text-blue-600" />
                <span>Clean & Sanitized Vehicle</span>
              </div>

            </div>

            <a
              href="https://wa.me/919788289050"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-xl bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
            >
              Book This Vehicle
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}