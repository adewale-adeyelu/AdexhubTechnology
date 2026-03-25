import { Locate, Mail, MapPin, PhoneCall } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section id="contact" className="px-5 md:px-10 lg:px-16 py-16">
      <div className="text-center mb-12" data-aos="fade-up">
        <p className="text-[#1ebb70] text-lg font-bold">
          Get In Touch
        </p>
        <h2 className="text-[#0F172A] font-bold text-lg md:text-4xl mt-1 md:mt-2 tracking-tight">
          Build Your Dream Retailer Website Today
        </h2>
        <p className="text-[#64748B] text-sm md:text-md font-normal mt-2 md:mt-4 leading-6">
          Discover how our expert team can help you build your dream website. Our technical team <br className="hidden md:block" /> is always available to help.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center mt-10">
        <div className="space-y-5" data-aos="fade-left" data-aos-delay="100">
          {/* 1st grid */}
            <div className="flex space-x-2 items-center">
              <div className="bg-emerald-50 p-4 rounded-2xl">
                <MapPin className="text-[#1ebb70]" size={24} /> 
              </div>
              <div>
                <p className="text-[#0F172A] text-md font-semibold">Address</p>
                <p className="text-[#64748B] leading-6 text-sm">Lagos State, Nigeria</p>
              </div>
            </div>
            <div className="flex space-x-2 items-center">
              <div className="bg-emerald-50 p-4 rounded-2xl">
                <PhoneCall className="text-[#1ebb70]" size={24} /> 
              </div>
              <div>
                <p className="text-[#0F172A] text-md font-semibold">Call Us</p>
                <p className="text-[#64748B] leading-6 text-sm"> +2347015919477</p>
              </div>
            </div>
            <div className="flex space-x-2 items-center">
              <div className="bg-emerald-50 p-4 rounded-2xl">
                <Mail className="text-[#1ebb70]" size={24} /> 
              </div>
              <div>
                <p className="text-[#0F172A] text-md font-semibold">Email Us</p>
                <p className="text-[#64748B] leading-6 text-sm">adexhubtechnology@gmail.com</p>
              </div>
            </div>
          </div>

          {/* 2nd grid */}
          <div data-aos="fade-right" data-aos-delay="100">
            {/* 1st input */}
            <div className="flex space-x-2 items-center mb-4">
              <input type="name" name="name" placeholder="Your Name" className="text-[#0F172A] w-full border border-slate-300 rounded-2xl p-3 leading-6 text-sm focus:border-[#1ebb70] focus:ring-2 focus:ring-[#1ebb70]/20 outline-none" />
              <input type="email" name="email" placeholder="Your Email" className="text-[#0F172A] w-full border border-slate-300 rounded-2xl p-3 leading-6 text-sm focus:border-[#1ebb70] focus:ring-2 focus:ring-[#1ebb70]/20 outline-none" />
            </div>

            {/* 2nd input */}
            <input type="subject" placeholder="Subject" className="text-[#0F172A] w-full border border-slate-300 rounded-2xl p-3  leading-6 text-sm mb-3 focus:border-[#1ebb70] focus:ring-2 focus:ring-[#1ebb70]/20 outline-none" />

            {/* textarea */}
            <textarea name="message" id="message" placeholder="Type your message here..." className="w-full mt-2 px-4 py-3 h-20 rounded-2xl border border-slate-300 focus:border-[#1ebb70] focus:ring-2 focus:ring-[#1ebb70]/20 outline-none resize-none transition-all duration-300 text-sm text-[#0F172A] placeholder:text-slate-400 mb-4"></textarea>

            {/* button */}
            <button className="bg-[#1ebb70] w-full rounded-2xl py-2 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:translate-x-1">
              <p className="text-white font-semibold text-lg">
                Send Message
              </p>
            </button>
          </div>
      </div>
    </section>
  );
}