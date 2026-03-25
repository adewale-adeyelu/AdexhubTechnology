import Hero from "~/components/Hero";
import Services from "~/components/Services";
import Partner from "~/components/partner";
import Faq from "~/components/Faq";
import Regsiter from "~/components/Register";
import Contact from "~/components/Contact";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Services />
      <Partner />
      <Faq />
      <Regsiter />
      <Contact />
    </>
  );
}