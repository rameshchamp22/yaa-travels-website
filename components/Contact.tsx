import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock3,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-100 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="Contact Us"
          title="Book Your Ride Today"
          subtitle="We're available 24×7 for airport transfers, outstation trips, local travel and tour packages. Contact us anytime."
        />

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left Side */}
          <div className="space-y-6">

            <div className="flex items-center gap-5 rounded-3xl bg-white p-6 shadow-md transition hover:shadow-xl">
              <div className="rounded-2xl bg-blue-100 p-4">
                <Phone className="text-blue-700" />
              </div>

              <div>
                <h3 className="text-lg font-bold">Call Us</h3>
                <a
                  href="tel:+919788289050"
                  className="text-gray-600 hover:text-blue-700"
                >
                  +91 97882 89050
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-3xl bg-white p-6 shadow-md transition hover:shadow-xl">
              <div className="rounded-2xl bg-blue-100 p-4">
                <Mail className="text-blue-700" />
              </div>

              <div>
                <h3 className="text-lg font-bold">Email</h3>
                <a
                  href="mailto:yaaenterprises25@gmail.com"
                  className="text-gray-600 hover:text-blue-700"
                >
                  yaaenterprises25@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-3xl bg-white p-6 shadow-md transition hover:shadow-xl">
              <div className="rounded-2xl bg-blue-100 p-4">
                <MapPin className="text-blue-700" />
              </div>

              <div>
                <h3 className="text-lg font-bold">Location</h3>
                <p className="text-gray-600">
                  Podanur, Coimbatore, Tamil Nadu
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-3xl bg-white p-6 shadow-md transition hover:shadow-xl">
              <div className="rounded-2xl bg-blue-100 p-4">
                <Clock3 className="text-blue-700" />
              </div>

              <div>
                <h3 className="text-lg font-bold">Working Hours</h3>
                <p className="text-gray-600">
                  24 Hours • 7 Days a Week
                </p>
              </div>
            </div>

          </div>

          {/* Right Side */}
          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <h3 className="text-3xl font-bold">
              Quick WhatsApp Booking
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Click the button below to instantly connect with Yaa Travels on
              WhatsApp. Share your pickup location, destination and travel
              date, and we'll confirm your booking quickly.
            </p>

            <a
              href="https://wa.me/919788289050?text=Hello%20Yaa%20Travels,%20I%20would%20like%20to%20book%20a%20taxi."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex items-center justify-center gap-3 rounded-2xl bg-green-600 px-8 py-5 text-lg font-bold text-white transition hover:bg-green-700"
            >
              <MessageCircle size={24} />
              Book on WhatsApp
            </a>

            <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <h4 className="font-bold text-blue-800">
                Why Book With Us?
              </h4>

              <ul className="mt-4 space-y-2 text-gray-700">
                <li>✅ 24×7 Taxi Service</li>
                <li>✅ Transparent Pricing</li>
                <li>✅ Professional Drivers</li>
                <li>✅ Clean & Comfortable Vehicles</li>
                <li>✅ Airport & Outstation Trips</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}