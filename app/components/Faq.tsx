import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Faq() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section id="faq" className="px-5 md:px-10 lg:px-16 py-10">
      <div className="text-center mb-12" data-aos="fade-up">
        <p className="text-[#1ebb70] text-lg font-bold">
          FAQ
        </p>
        <h2 className="text-[#0F172A] font-bold text-lg md:text-4xl mt-1 md:mt-2 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-[#64748B] text-sm md:text-md font-normal mt-2 md:mt-4 leading-6">
          Welcome to our FAQ section! Whether you're looking to purchase airtime, order data, get data pins, <br className="hidden md:block" /> or pay for electricity and TV subscriptions, ADEXHUB has got you covered. 💡📱📡
        </p>
      </div>
      <div className="grid md:grid-cols-2 items-center gap-8">
        {/* grid 1 */}
        <div className="flex flex-col" data-aos="fade-right" data-delay="100">
          {/* Item 1 */}
          <div className="border-b border-slate-200">
            <button onClick={() => toggle(1)} className="group w-full py-6 flex justify-between items-center text-left transition-colors hover:text-[#1ebb70] cursor-pointer">
              <span className={`text-md font-semibold ${openIndex === 1 ? 'text-[#1ebb70]' : 'text-[#0F172A] group-hover:text-[#1ebb70]'}`}>
                How do I purchase airtime or data using ADEXHUB?
              </span>
              <span className={`transition-transform duration-300 ${openIndex === 1 ? 'rotate-180 text-[#1ebb70]' : 'text-[#0F172A] group-hover:text-[#1ebb70]'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === 1 ? 'max-h-40 pb-6' : 'max-h-0'}`}>
              <p className="text-[#64748B] leading-relaxed">
                Simply create an account, fund your wallet, and navigate to the Airtime or Data section. Select your network, enter your phone number, choose a plan, and confirm your purchase. It's instant!
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="border-b border-slate-200">
            <button onClick={() => toggle(2)} className="group w-full py-6 flex justify-between items-center text-left transition-colors hover:text-[#1ebb70] cursor-pointer">
              <span className={`text-md font-semibold ${openIndex === 2 ? 'text-[#1ebb70]' : 'text-[#0F172A] group-hover:text-[#1ebb70]'}`}>
                Can I pay for my electricity and TV subscriptions on ADEXHUB?
              </span>
              <span className={`transition-transform duration-300 ${openIndex === 2 ? 'rotate-180 text-[#1ebb70]' : 'text-[#0F172A] group-hover:text-[#1ebb70]'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === 2 ? 'max-h-40 pb-6' : 'max-h-0'}`}>
              <p className="text-[#64748B] leading-relaxed">
                Yes! ADEXHUB supports DSTV, GOtv, Startimes, and all major electricity distribution companies. Just select the service, enter your details, and pay securely.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="border-b border-slate-200">
            <button onClick={() => toggle(3)} className="group w-full py-6 flex justify-between items-center text-left transition-colors hover:text-[#1ebb70] cursor-pointer">
              <span className={`text-md font-semibold ${openIndex === 3 ? 'text-[#1ebb70]' : 'text-[#0F172A] group-hover:text-[#1ebb70]'}`}>
                What is a data pin, and how do I order one?
              </span>
              <span className={`transition-transform duration-300 ${openIndex === 3 ? 'rotate-180 text-[#1ebb70]' : 'text-[#0F172A]  group-hover:text-[#1ebb70]'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === 3 ? 'max-h-40 pb-6' : 'max-h-0'}`}>
              <p className="text-[#64748B] leading-relaxed">
                A data pin is a voucher code similar to airtime recharge cards. You can load data without internet by dialing the pin code. Order them directly from your ADEXHUB dashboard.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="border-b border-slate-200">
            <button onClick={() => toggle(4)} className="group w-full py-6 flex justify-between items-center text-left transition-colors hover:text-[#1ebb70] cursor-pointer">
              <span className={`text-md font-semibold ${openIndex === 4 ? 'text-[#1ebb70]' : 'text-[#0F172A] group-hover:text-[#1ebb70]'}`}>
                Is ADEXHUB safe and secure?
              </span>
              <span className={`transition-transform duration-300 ${openIndex === 4 ? 'rotate-180 text-[#1ebb70]' : 'text-[#0F172A] group-hover:text-[#1ebb70]'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === 4 ? 'max-h-40 pb-6' : 'max-h-0'}`}>
              <p className="text-[#64748B] leading-relaxed">
                Absolutely. We use industry-standard encryption and secure payment gateways to protect all your transactions and personal information.
              </p>
            </div>
          </div>
        </div>

        {/* grid 2 */}
        <div data-aos="zoom-in" data-delay="100">

        </div>
      </div>
    </section>
  );
}