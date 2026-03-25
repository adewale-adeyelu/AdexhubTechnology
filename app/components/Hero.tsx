import { DiDotnet } from "react-icons/di";
import { NavLink } from "react-router";
import HeroImg from "../assests/hero-img.png";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section id="home" className="px-5 md:px-10 lg:px-16 bg-[hsl(220_60%_12%)]">
      <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center pt-20 pb-10">
        {/* 1st grid */}
        <div className="pt-24 lg:pt-32 xl:pt-24 pb-5 md:pb-0">
          <div data-aos="zoom-in">
            <span className="inline-flex items-center px-3 py-1 text-md font-medium text-[#1ebb70] bg-[#06202A] border border-[#1ebb70] rounded-full">
              <span className="w-2 h-2 mr-2 bg-[#1ebb70] rounded-full"></span>
              Welcome to ADEXHUB
            </span>
            <div className="pt-6">
              <h1 className="text-white font-bold text-4xl lg:text-6xl tracking-wide leading-10 lg:leading-16">
                We Keep You <br /> <span className="text-[#1ebb70]">Connected</span>
              </h1>
            </div>
            <div className="pt-5">
              <p className="text-[#B3B3B3] text-lg">
                Get affordable data plans, airtime, electricity recharge, TV subscriptions, and more, all with cashback rewards. Start saving and earning today!
              </p>
            </div>
            <div className="pt-7">
              <NavLink to="/signup" className="text-md text-white bg-[#1ebb70] inline-flex shadow-md py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:translate-x-1">
                Get Started <ArrowRight className="ml-2"/>
              </NavLink>
            </div>
          </div>
        </div>

        {/* 2nd grid */}
        <div className="items-center" data-aos="zoom-in">
          <img src={HeroImg} alt="hero" className="relative animate md:my-8 z-10 justify-center items-center place-content-center max-w-full h-auto object-contain" />
        </div>
      </div>
    </section>
  );
}