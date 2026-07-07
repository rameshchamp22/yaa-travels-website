import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock3,
  CheckCircle2,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 97882 89050",
    href: "tel:+919788289050",
  },
  {
    icon: Mail,
    title: "Email",
    value: "yaaenterprises25@gmail.com",
    href: "mailto:yaaenterprises25@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Podanur, Coimbatore, Tamil Nadu",
  },
  {
    icon: Clock3,
    title: "Working Hours",
    value: "24 Hours • 7 Days a Week",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-100 py-24"
    >
      {/* Background Glow */}

      <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-blue-200/30 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="Contact Us"
          title="Book Your Ride Today"
          subtitle="We're available 24×7 for airport transfers, local trips, outstation travel and tour packages."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <div className="space-y-6">

            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex items-center gap-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
                >
                  <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-4 shadow-lg">

                    <Icon className="h-6 w-6 text-white" />

                  </div>

                  <div>

                    <h3 className="text-lg font-bold text-slate-900">

                      {item.title}

                    </h3>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-slate-600 transition hover:text-blue-700"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-600">

                        {item.value}

                      </p>
                    )}

                  </div>

                </div>
              );
            })}

          </div>

          {/* Right */}

          <div className="rounded-[32px] border border-slate-100 bg-white p-10 shadow-2xl">

            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2">

              <MessageCircle className="h-5 w-5 text-green-700" />

              <span className="text-sm font-semibold text-green-700">

                Instant Booking

              </span>

            </div>

            <h3 className="mt-6 text-4xl font-black text-slate-900">

              Quick WhatsApp Booking

            </h3>

            <p className="mt-5 leading-8 text-slate-600">

              Book your taxi in less than a minute. Click below,
              send your pickup location, destination and travel date,
              and we'll confirm your ride instantly.

            </p>

            <a
              href="https://wa.me/919788289050?text=Hello%20YAA%20Travels,%20I%20would%20like%20to%20book%20a%20taxi."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-green-600 to-green-500 px-8 py-5 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <MessageCircle className="h-6 w-6" />

              Book on WhatsApp

            </a>

            <div className="mt-10 rounded-3xl bg-blue-50 p-6">

              <h4 className="text-xl font-bold text-slate-900">

                Why Book With Us?

              </h4>

              <div className="mt-5 space-y-4">

                {[
                  "24×7 Taxi Service",
                  "Transparent Pricing",
                  "Professional Drivers",
                  "Clean & Comfortable Vehicles",
                  "Airport & Outstation Trips",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-600" />

                    <span className="text-slate-700">

                      {item}

                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}