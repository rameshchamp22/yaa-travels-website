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
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="-mt-32 relative z-20">
        <BookingForm />
      </div>

      <FadeIn>
        <Stats />
      </FadeIn>

      <FadeIn delay={0.1}>
        <WhyChoose />
      </FadeIn>

      <FadeIn delay={0.2}>
        <Services />
      </FadeIn>

      <FadeIn delay={0.3}>
        <Fleet />
      </FadeIn>

      <FadeIn delay={0.4}>
        <Destinations />
      </FadeIn>

      <FadeIn delay={0.5}>
        <Testimonials />
      </FadeIn>

      <FadeIn delay={0.6}>
        <Contact />
      </FadeIn>

      <FadeIn delay={0.7}>
        <Footer />
      </FadeIn>

      <FloatingButtons />
    </>
  );
}