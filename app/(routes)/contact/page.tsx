import React from "react";
import Image from "next/image";
import { Package, Shield, Globe, Award, MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us | Just Stock Trading",
  description:
    "Get in touch with Just Stock Trading Limited. We are here to help with your wholesale and cream grade clothing sourcing needs.",
};

const features = [
  {
    icon: Package,
    title: "Quality Sourcing",
    description: "Carefully selected cream grade and liquidation stock from trusted UK suppliers.",
  },
  {
    icon: Shield,
    title: "Trusted Process",
    description: "Transparent procurement and reliable export you can count on for your business.",
  },
  {
    icon: Globe,
    title: "Global Delivery",
    description: "Shipping to UK, Ghana, Nigeria, Gambia & all over Europe seamlessly.",
  },
  {
    icon: Award,
    title: "Premium Grade",
    description: "Quality-checked, New with Tags stock ready to be shipped directly to you.",
  },
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Headquarters",
    details: "Accent business centre BD3 9BD, England, United Kingdom",
  },
  {
    icon: Phone,
    title: "Call",
    details: "+44 (0) 7344056285",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@juststocktrading.co.uk",
  },
  
  {
    icon: Clock,
    title: "Working Hours",
    details: "Mon-Fri: 9am - 6pm (GMT)",
  },
];

const ContactPage = () => {
  return (
    <div className="w-full overflow-hidden bg-white">
      {/* ─── Hero Banner ─── */}
      <section className="relative w-full h-[400px] sm:h-[450px] lg:h-[550px] flex items-center justify-center">
        <Image
          src="/billboard-bg-2.png"
          alt="Contact us background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto -mt-10 lg:-mt-20">
          <p className="text-[#bc2727] font-bold tracking-[0.2em] uppercase mb-4 text-sm sm:text-base">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
            WE&apos;RE HERE <br /> TO HELP
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Whether you have a question about our stock, shipping logistics, or partnership opportunities, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      {/* ─── Contact Info Cards ─── */}
      <section className="bg-gray-50 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative -mt-24 sm:-mt-28 z-20">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col items-center text-center transform transition-transform hover:-translate-y-2 duration-300">
                  <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 text-[#bc2727]">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-600 text-sm font-medium">{info.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Advanced Form Section ─── */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
            
            {/* Left: Text & Image block */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                  Send Us A <br /> Message
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Fill out the form and our sourcing experts will get back to you within 24 hours. Let us know exactly what kind of stock you are looking for.
                </p>
              </div>

              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl hidden md:block group">
                <Image
                  src="/men.png"
                  alt="Customer support"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                  <div>
                    <p className="text-[#bc2727] font-bold text-sm tracking-widest uppercase mb-2">Support Team</p>
                    <p className="text-white font-semibold text-xl">Dedicated support for your wholesale needs.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3 bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgb(0,0,0,0.05)]">
              <form className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="first-name" className="text-xs font-bold text-gray-500 tracking-widest uppercase">First Name</label>
                    <input
                      id="first-name"
                      type="text"
                      placeholder="John"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="last-name" className="text-xs font-bold text-gray-500 tracking-widest uppercase">Last Name</label>
                    <input
                      id="last-name"
                      type="text"
                      placeholder="Doe"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-xs font-bold text-gray-500 tracking-widest uppercase">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="phone" className="text-xs font-bold text-gray-500 tracking-widest uppercase">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+44 20 1234 5678"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="inquiry-type" className="text-xs font-bold text-gray-500 tracking-widest uppercase">Inquiry Type</label>
                  <div className="relative">
                    <select
                      id="inquiry-type"
                      defaultValue=""
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all appearance-none cursor-pointer font-medium"
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="shipping">Shipping & Logistics</option>
                      <option value="support">General Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none text-gray-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="text-xs font-bold text-gray-500 tracking-widest uppercase">Your Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about the stock you need..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all font-medium"
                  />
                </div>

                <button
                  type="button"
                  className="w-full sm:w-auto bg-black text-white px-10 py-4 rounded-xl font-bold tracking-widest uppercase hover:bg-gray-800 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
                >
                  SEND MESSAGE
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features Grid (Consistent with About) ─── */}
      <section className="bg-black text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-gray-900 to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-900 border border-gray-800 p-8 rounded-2xl text-center hover:border-gray-600 transition-all duration-300 group hover:-translate-y-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 mb-6 text-white group-hover:bg-[#bc2727] transition-colors duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
