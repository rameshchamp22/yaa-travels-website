import { Phone, MessageCircle, MapPin, Clock3 } from "lucide-react";

export default function BookingCTA() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-blue-900 p-10 text-white shadow-2xl">

          <div className="grid items-center gap-10 md:grid-cols-2">

            {/* Left */}
            <div>
              <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
                🚖 Book Your Taxi Today
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight">
                Need a Taxi?
                <br />
                We're Available 24×7
              </h2>

              <p className="mt-6 text-lg text-blue-100">
                Book your ride in seconds through WhatsApp or call us directly.
                Safe, comfortable and affordable taxi services from Coimbatore
                to anywhere in Tamil Nadu, Kerala and Karnataka.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href="https://wa.me/919788289050?text=Hello%20Yaa%20Travels,%20I%20would%20like%20to%20book%20a%20taxi."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-green-500 px-6 py-4 font-semibold transition hover:bg-green-600"
                >
                  <MessageCircle size={22} />
                  Book on WhatsApp
                </a>

                <a
                  href="tel:+919788289050"
                  className="flex items-center gap-2 rounded-xl border border-white px-6 py-4 font-semibold transition hover:bg-white hover:text-blue-700"
                >
                  <Phone size={22} />
                  Call Now
                </a>

              </div>
            </div>

            {/* Right */}
            <div className="rounded-2xl bg-white p-8 text-slate-800">

              <h3 className="text-2xl font-bold">
                Contact Information
              </h3>

              <div className="mt-8 space-y-6">

                <div className="flex items-center gap-4">
                  <Phone className="text-blue-700" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p>+91 97882 89050</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="text-blue-700" />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p>Podanur, Coimbatore</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Clock3 className="text-blue-700" />
                  <div>
                    <h4 className="font-semibold">Working Hours</h4>
                    <p>24 Hours • 7 Days</p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}