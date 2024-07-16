import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Avicenna Medical Travel",
  description: "Get started with Avicenna",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <FAQ />
      <Testimonial />
      <Contact />
    </main>
  );
}
