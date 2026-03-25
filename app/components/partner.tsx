import Img1 from "~/assests/partner-img-1.png";
import Img2 from "~/assests/partner-img-2.png";
import Img3 from "~/assests/partner-img-3.png";
import Img4 from "~/assests/partner-img-4.png";
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
    <section className="px-5 md:px-10 lg:px-16 py-13">
        <div className="text-center" data-aos="fade-up">
            <h1 className="text-[#0F172A] font-bold text-lg md:text-2xl mt-1 md:mt-2 tracking-tight">
                Our Trusted Partners
            </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center pt-7">
            <img src={Img1} alt="img" data-aos="fade-up" data-aos-delay="200" />
            <img src={Img2} alt="img" data-aos="fade-up" data-aos-delay="400" />
            <img src={Img3} alt="img" data-aos="fade-up" data-aos-delay="600" />
            <img src={Img4} alt="img" data-aos="fade-up" data-aos-delay="800" />
        </div>
    </section>
  );
}