// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import WhyChoose from "@/components/WhyChoose";
// import Services from "@/components/Services";
// import Fleet from "@/components/Fleet";
// import Footer from "@/components/Footer";
// import Destinations from "@/components/Destinations";
// import Testimonials from "@/components/Testimonials";
// import Contact from "@/components/Contact";
// import FloatingButtons from "@/components/FloatingButtons";
// import Stats from "@/components/Stats";

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Stats />
//       <WhyChoose />
//       <Services />
//       <Fleet />
//       <Destinations />
//       <Testimonials />
//       <Contact />
//       <FloatingButtons />
//       <Footer />
//     </>
//   );
// }
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingCTA from "@/components/BookingCTA";
import Stats from "@/components/Stats";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import Destinations from "@/components/Destinations";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FloatingButtons from "@/components/FloatingButtons";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BookingCTA />
      <BookingForm />
      <Stats />
      <WhyChoose />
      <Services />
      <Fleet />
      <Destinations />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButtons />
    </>
  );
}