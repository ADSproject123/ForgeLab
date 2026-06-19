import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { Process } from "@/components/Process";
import { WhyForgelab } from "@/components/WhyForgelab";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <TechStack />
        <Process />
        <WhyForgelab />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
