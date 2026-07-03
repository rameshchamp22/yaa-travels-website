import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChoose />
      <Services />
      <Fleet />
      <Footer />
    </>
  );
}