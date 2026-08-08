import { Locate, Mail, MapPin, PhoneCall } from "lucide-react";
import { useState } from "react";
import baas from "lib/kroxt";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) return;

    setIsLoading(true);
    try {
      const contacts = baas.collection("contacts");
      const newContact = await contacts.create({
        name: name,
        email: email,
        subject: subject,
        message: message
      });
      if (newContact._id) {
        alert("Your message is received successfully! 🎉");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        alert("Error sending your message");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending your message");
    } finally {
      setIsLoading(false);
    }
  };
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
        <form onSubmit={handleSubmit}>

          <div className="flex space-x-2 items-center mb-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-[#0F172A] w-full border border-slate-300 rounded-2xl p-3 leading-6 text-sm focus:border-[#1ebb70] focus:ring-2 focus:ring-[#1ebb70]/20 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-[#0F172A] w-full border border-slate-300 rounded-2xl p-3 leading-6 text-sm focus:border-[#1ebb70] focus:ring-2 focus:ring-[#1ebb70]/20 outline-none"
            />

          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="text-[#0F172A] w-full border border-slate-300 rounded-2xl p-3 leading-6 text-sm mb-3 focus:border-[#1ebb70] focus:ring-2 focus:ring-[#1ebb70]/20 outline-none"
          />

          <textarea
            name="message"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full mt-2 px-4 py-3 h-20 rounded-2xl border border-slate-300 focus:border-[#1ebb70] focus:ring-2 focus:ring-[#1ebb70]/20 outline-none resize-none transition-all duration-300 text-sm text-[#0F172A] placeholder:text-slate-400 mb-4"
          />

          <button
            type="submit"
            disabled={isLoading || !name.trim() || !email.trim() || !subject.trim() || !message.trim()}
            className={`w-full rounded-2xl py-2 transition-all duration-300 ${
              isLoading || !name.trim() || !email.trim() || !subject.trim() || !message.trim()
                ? "bg-[#1ebb70]/50 cursor-not-allowed"
                : "bg-[#1ebb70] cursor-pointer transform hover:scale-105 hover:translate-x-1"
            }`}
          >
            <p className="text-white font-semibold text-lg">
              {isLoading ? "Sending..." : "Send Message"}
            </p>
          </button>

        </form>
      </div>
    </section>
  );
}