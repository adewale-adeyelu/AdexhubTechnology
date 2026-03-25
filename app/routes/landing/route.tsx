import LandingPage from "./index";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

export default function LandingLayout() {
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