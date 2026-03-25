import React from 'react';
import { Wifi, Key, Zap } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceProps> = ({ 
  title, 
  description, 
  icon, 
  iconBg, 
  iconColor,
  delay,
}) => {
  return (
    <div data-aos="fade-up" data-aos-delay={delay}>
      <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-start transition-transform hover:scale-[1.02] h-full">
        <div className={`p-3 rounded-xl mb-6 ${iconBg}`}>
          <div className={iconColor}>
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-[#0F172A] mb-3">
          {title}
        </h3>
        <p className="text-[#64748B] leading-6 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const services = [
    {
      title: "Buy Data/Airtime",
      description: "Get instant access to unlimited discounts on your subscriptions. You can also make extra income reselling our cheap services from the comfort of your home.",
      icon: <Wifi size={24} />,
      iconBg: "bg-emerald-50",
      iconColor: "text-[#1ebb70]"
    },
    {
      title: "Generate Data Pins",
      description: "Vouchers are just like regular airtime recharge cards that you can load without any internet connection. Introducing data pin is great!",
      icon: <Key size={24} />,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-500"
    },
    {
      title: "Bills Payments",
      description: "Recharge your DSTV, Gotv, Startimes and prepaid or postpaid NEPA bills. We have simplified everything for you, right here.",
      icon: <Zap size={24} />,
      iconBg: "bg-emerald-50",
      iconColor: "text-[#1ebb70]"
    }
  ];

  return (
    <section id="services" className="py-16 px-5 md:px-10 lg:px-16 bg-[#f8fafc]">
      <div className="text-center mb-12" data-aos="fade-up">
        <p className="text-[#1ebb70] text-lg font-bold">
          Our Services
        </p>
        <h2 className="text-[#0F172A] font-bold text-lg md:text-4xl mt-1 md:mt-2 tracking-tight">
          Everything You Need, One Platform
        </h2>
        <p className="text-[#64748B] text-sm md:text-md font-normal mt-2 md:mt-4 leading-6">
          At Adexhub, we simplify your everyday payments. From airtime and data to electricity and <br className='hidden md:block' /> TV subscriptions, enjoy reliable and secure transactions at your fingertips.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            iconBg={service.iconBg}
            iconColor={service.iconColor}
            delay={index * 200}
          />
        ))}
      </div>
    </section>
  );
}