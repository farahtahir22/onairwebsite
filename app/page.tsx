import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Equipment from "@/components/sections/Equipment";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Expertise from "@/components/sections/Expertise";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Equipment />
      <WhyChooseUs />
      <Expertise />
      <Contact />
    </>
  );
}
