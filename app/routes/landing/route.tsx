import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingPage from "./index";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

export default function LandingLayout() {
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
      AOS.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden min-h-screen">
      <Navbar />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}