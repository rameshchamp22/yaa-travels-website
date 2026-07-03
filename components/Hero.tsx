export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">

      <div className="mx-auto max-w-7xl px-6 py-28">

        <div className="grid items-center gap-12 md:grid-cols-2">

          <div>

            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
              🚖 Premium Taxi Service
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl">
              Travel Safe,
              <br />
              Travel Smart
            </h1>

            <p className="mt-6 text-lg text-blue-100">
              Reliable taxi services from Coimbatore to anywhere in Tamil Nadu
              and neighbouring states.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="https://wa.me/919788289050"
                target="_blank"
                className="rounded-xl bg-green-500 px-8 py-4 font-bold transition hover:scale-105"
              >
                Book on WhatsApp
              </a>

              <a
                href="tel:+919788289050"
                className="rounded-xl border border-white px-8 py-4 font-bold transition hover:bg-white hover:text-blue-700"
              >
                Call Now
              </a>

            </div>

          </div>

          <div className="hidden justify-center md:flex">

            <img
              src="/images/dzire.png"
              alt="Swift Dzire Tour"
              className="w-full max-w-lg"
            />

          </div>

        </div>

      </div>

    </section>
  );
}