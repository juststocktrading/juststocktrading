import React from "react";
import Image from "next/image";
import { Package, Shield, Globe, Award, MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "./components/contact-form";

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
  { icon: MapPin, title: "Our Headquarters", details: "Unit 7, 5 Alive, York Road, Bradford BD8 0HR" },
  { icon: Phone, title: "Call", details: "+44 7344 056285" },
  { icon: Mail, title: "Email", details: "info@juststocktrading.co.uk" },
  { icon: Clock, title: "Working Hours", details: "Mon-Fri: 9am - 6pm (GMT)" },
];

const ContactPage = () => {
  return (
    <div className="w-full overflow-hidden bg-background">
      <section className="relative w-full min-h-[50vh] sm:min-h-[55vh] lg:min-h-[65vh] flex items-center justify-center">
        <Image
          src="/billboard-bg-2.png"
          alt="Contact us background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto -mt-10 lg:-mt-20">
          <p className="text-[#bc2727] font-bold tracking-[0.2em] uppercase mb-4 text-xs sm:text-sm">
            Get In Touch
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-4 sm:mb-6 tracking-tight">
            WE&apos;RE HERE <br /> TO HELP
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed px-2">
            Whether you have a question about our stock, shipping logistics, or partnership opportunities, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      <section className="bg-muted pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative -mt-20 sm:-mt-28 z-20">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div key={idx} className="bg-card text-card-foreground rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border flex flex-col items-center text-center transform transition-transform hover:-translate-y-2 duration-300">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-50 flex items-center justify-center mb-4 sm:mb-6 text-[#bc2727]">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-card-foreground mb-2">{info.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm font-medium">{info.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28 bg-background border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-20 items-start">
            <div className="lg:col-span-2 space-y-8 sm:space-y-10">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-card-foreground mb-4 sm:mb-6 tracking-tight">
                  Send Us A <br /> Message
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Fill out the form and our sourcing experts will get back to you within 24 hours. Let us know exactly what kind of stock you are looking for.
                </p>
              </div>

              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl hidden md:block group">
                <Image
                  src="/men.png"
                  alt="Customer support"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 sm:p-8">
                  <div>
                    <p className="text-[#bc2727] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2">Support Team</p>
                    <p className="text-white font-semibold text-lg sm:text-xl">Dedicated support for your wholesale needs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 bg-card border rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgb(0,0,0,0.05)]">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background py-16 sm:py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-gray-900 to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-card/10 border border-border/20 p-6 sm:p-8 rounded-2xl text-center hover:border-border/50 transition-all duration-300 group hover:-translate-y-2">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-card/10 mb-4 sm:mb-6 text-background group-hover:bg-[#bc2727] transition-colors duration-300">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">{feature.description}</p>
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
