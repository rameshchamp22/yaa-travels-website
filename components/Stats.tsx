// import { Users, Car, MapPinned, Clock3 } from "lucide-react";

// const stats = [
//   {
//     icon: Users,
//     value: "500+",
//     title: "Happy Customers",
//   },
//   {
//     icon: Car,
//     value: "1000+",
//     title: "Trips Completed",
//   },
//   {
//     icon: MapPinned,
//     value: "50+",
//     title: "Destinations",
//   },
//   {
//     icon: Clock3,
//     value: "24×7",
//     title: "Support",
//   },
// ];

// export default function Stats() {
//   return (
//     <section className="bg-gradient-to-r from-blue-700 to-blue-600 py-24">
//       <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-4">
//         {stats.map((item) => {
//           const Icon = item.icon;

//           return (
//             <div key={item.title} className="text-center">
//               <Icon className="mx-auto h-12 w-12 mb-4" />

//               <h2 className="text-4xl font-bold">
//                 {item.value}
//               </h2>

//               <p className="mt-2 text-blue-100">
//                 {item.title}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
import { Users, Car, MapPinned, Clock3, Star } from "lucide-react";

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
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 py-24">

      {/* Background Glow */}

      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-300/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="group rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:bg-white/20 hover:shadow-2xl"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 transition duration-300 group-hover:scale-110 group-hover:bg-white">

                  <Icon className="h-8 w-8 text-white group-hover:text-blue-700" />

                </div>

                <h2 className="mt-6 text-4xl font-extrabold text-white">

                  {item.value}

                </h2>

                <p className="mt-2 text-blue-100">

                  {item.title}

                </p>

                {/* Stars */}

                <div className="mt-5 flex justify-center gap-1">

                  {[...Array(5)].map((_, index) => (

                    <Star
                      key={index}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />

                  ))}

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}