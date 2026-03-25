import { CircleCheck } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Register() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section id="register" className="px-5 md:px-10 lg:px-16 py-16 bg-[#f8fafc]">
      <div className="text-center mb-12" data-aos="fade-up">
        <p className="text-[#1ebb70] text-lg font-bold">
          How To Register
        </p>
        <h2 className="text-[#0F172A] font-bold text-lg md:text-4xl mt-1 md:mt-2 tracking-tight">
          Just 3 Easy Steps
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
        {/* 1st grid */}
        <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-start transition-transform hover:scale-[1.02] h-full" data-aos="fade-up" data-aos-delay="200">
          <div className="rounded-xl mb-3">
            <div className="bg-emerald-50 p-4 rounded-2xl">
              <h1 className="text-[#1ebb70] font-bold text-2xl">
                01
              </h1>
            </div>
          </div>
          <h3 className="text-xl font-bold text-[#0F172A] mb-3">
            Enter Email
          </h3>
          <p className="text-[#64748B] leading-6 text-sm">
            Type your email in the input field to kick start the registration process
          </p>
          <div className="space-y-2 mt-3">
            <div className="flex space-x-2 items-center">
              <CircleCheck className="text-[#1ebb70]" size={16} /> 
              <p className="text-[#64748B] leading-6 text-sm">We will send you an OTP</p>
            </div>
            <div className="flex space-x-2 items-center">
              <CircleCheck className="text-[#1ebb70]" size={16} /> 
              <p className="text-[#64748B] leading-6 text-sm">Verify email address</p>
            </div>
          </div>
        </div>

        {/* 2nd grid */}
        <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-start transition-transform hover:scale-[1.02] h-full" data-aos="fade-up" data-aos-delay="400">
          <div className="rounded-xl mb-3">
            <div className="bg-emerald-50 p-4 rounded-2xl">
              <h1 className="text-[#1ebb70] font-bold text-2xl">
                02
              </h1>
            </div>
          </div>
          <h3 className="text-xl font-bold text-[#0F172A] mb-3">
            Fill Registration Form
          </h3>
          <p className="text-[#64748B] leading-6 text-sm">
            You will be required to fill your personal details
          </p>
          <div className="space-y-2 mt-3">
            <div className="flex space-x-2 items-center">
              <CircleCheck className="text-[#1ebb70]" size={16} /> 
              <p className="text-[#64748B] leading-6 text-sm">Type personal details</p>
            </div>
            <div className="flex space-x-2 items-center">
              <CircleCheck className="text-[#1ebb70]" size={16} /> 
              <p className="text-[#64748B] leading-6 text-sm">Choose strong password</p>
            </div>
          </div>
        </div>

        {/* 3rd grid */}
        <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-start transition-transform hover:scale-[1.02] h-full" data-aos="fade-up" data-aos-delay="600">
          <div className="rounded-xl mb-3">
            <div className="bg-emerald-50 p-4 rounded-2xl">
              <h1 className="text-[#1ebb70] font-bold text-2xl">
                03
              </h1>
            </div>
          </div>
          <h3 className="text-xl font-bold text-[#0F172A] mb-3">
            All Done
          </h3>
          <p className="text-[#64748B] leading-6 text-sm">
            Your registration has been completed. Congratulations & thanks for joining ADEXHUB!
          </p>
          <div className="space-y-2 mt-3">
            <div className="flex space-x-2 items-center">
              <CircleCheck className="text-[#1ebb70]" size={16} /> 
              <p className="text-[#64748B] leading-6 text-sm">Fund Wallet</p>
            </div>
            <div className="flex space-x-2 items-center">
              <CircleCheck className="text-[#1ebb70]" size={16} /> 
              <p className="text-[#64748B] leading-6 text-sm">You can now transact</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}