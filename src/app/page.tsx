import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { WhyForgelab } from "@/components/WhyForgelab";
import { Testimonials } from "@/components/Testimonials";
import { Process } from "@/components/Process";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Projects />
        <WhyForgelab />
        <Testimonials />
        <Process />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
