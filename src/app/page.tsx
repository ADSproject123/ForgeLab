import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
// import { WhyForgelab } from "@/components/WhyForgelab";
// import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        {/* <WhyForgelab /> */}
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
