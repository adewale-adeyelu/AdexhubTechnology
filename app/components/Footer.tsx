import { ArrowUp, Facebook, Instagram } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import Logo from "~/assests/adexhub-logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <footer className="px-5 md:px-10 lg:px-16 py-16 bg-[hsl(220_60%_12%)]" data-aos="fade-up">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* 1st grid */}
        <div>
          <div className="flex items-center space-x-1">
            <div>
              <a href="">
                <img src={Logo} alt="Logo" className="w-12 h-12" />
              </a>
            </div>
            <div>
              <a href="">
                <h1 className="uppercase font-bold text-xl text-white">Adex<span className="text-[#1ebb70]">hub</span></h1>
              </a>
            </div>
          </div>
          <h3 className="text-sm font-medium text-[#6a7181]">
            ADEXHUB is always here to provide reliable, cheap and fast-delivery digital services.
          </h3>
          <div className="flex items-center gap-3 mt-4">
          <div className="p-2 rounded-full border border-[#1ebb70] hover:bg-[#1ebb70] transition-all duration-300 cursor-pointer">
            <Facebook className="text-[#1ebb70] hover:text-white" size={20} />
          </div>

          <div className="p-2 rounded-full border border-[#1ebb70] hover:bg-[#1ebb70] transition-all duration-300 cursor-pointer">
            <Instagram className="text-[#1ebb70] hover:text-white" size={20} />
          </div>

          <div className="p-2 rounded-full border border-[#1ebb70] hover:bg-[#1ebb70] transition-all duration-300 cursor-pointer">
            <BsWhatsapp className="text-[#1ebb70] hover:text-white" size={20} />
          </div>
        </div>
        </div>

        {/* 2nd grid */}
        <div>
          <h3 className="text-white font-semibold text-lg">
            Customer
          </h3>
          <div className="mt-3 space-y-2">
            <p className="text-sm font-medium">
              <a href="/signup" className="text-[#6a7181] hover:text-[#1ebb70]">
                Dashboard
              </a>
            </p>
            <p className="text-sm font-medium">
              <a href="#contact" className="text-[#6a7181] hover:text-[#1ebb70]">
                Chat
              </a>
            </p>
            <p className="text-sm font-medium">
              <a href="#contact" className="text-[#6a7181] hover:text-[#1ebb70]">
                Refer
              </a>
            </p>
          </div>
        </div>

        {/* 3rd grid */}
        <div>
          <h3 className="text-white font-semibold text-lg">
            Product
          </h3>
          <div className="space-y-2 mt-3">
            <p className="text-sm font-medium">
              <a href="/signup" className="text-[#6a7181] hover:text-[#1ebb70]">
                Buy Airtime
              </a>
            </p>
            <p className="text-sm font-medium">
              <a href="/signup" className="text-[#6a7181] hover:text-[#1ebb70]">
                Buy Data
              </a>
            </p>
            <p className="text-sm font-medium">
              <a href="/signup" className="text-[#6a7181] hover:text-[#1ebb70]">
                Pay Bills
              </a>
            </p>
            <p className="text-sm font-medium">
              <a href="/signup" className="text-[#6a7181] hover:text-[#1ebb70]">
                Buy Exam Pin
              </a>
            </p>
          </div>
        </div>

        {/* 4th grid */}
        <div>
          <h3 className="text-white font-semibold text-lg">
            Support
          </h3>
          <div className="space-y-2 mt-3">
            <p className="text-sm font-medium">
              <a href="#faq" className="text-[#6a7181] hover:text-[#1ebb70]">
                FAQ
              </a>
            </p>
            <p className="text-sm font-medium">
              <a href="#contact" className="text-[#6a7181] hover:text-[#1ebb70]">
                Contact
              </a>
            </p>
            <p className="text-sm font-medium">
              <a href="" className="text-[#6a7181] hover:text-[#1ebb70]">
                Whatsapp
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-[#6a7181] mt-7"></div>
      <div className="text-center mt-10">
        <p className="text-md font-medium text-[#6a7181]">&copy; 2026 Adexhub all rights reserved.</p>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <a href="#top" className="bg-[#1ebb70] p-3 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl">
          <ArrowUp className="text-white" size={18} />
        </a>
      </div>
    </footer>
  );
}