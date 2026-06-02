import Footer from "@/components/globals/footer";
import Navbar from "@/components/globals/navbar";
import About from "@/components/sections/about";
import Certificates from "@/components/sections/certificates";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Separator />
      <About />
      <Separator />
      <Projects />
      <Separator />
      <Skills />
      <Separator />
      <Certificates />
      <Separator />
      <Contact />
      <Footer />
    </>
  );
}
