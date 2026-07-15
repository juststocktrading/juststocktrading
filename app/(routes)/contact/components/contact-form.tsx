"use client";

import { Send } from "lucide-react";

const ContactForm = () => {
  return (
    <form className="space-y-6 sm:space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        <div className="space-y-2 sm:space-y-3">
          <label htmlFor="first-name" className="text-[10px] sm:text-xs font-bold text-muted-foreground tracking-widest uppercase">First Name</label>
          <input
            id="first-name"
            type="text"
            placeholder="John"
            className="w-full bg-muted border rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-card-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:bg-background transition-all font-medium text-sm"
          />
        </div>
        <div className="space-y-2 sm:space-y-3">
          <label htmlFor="last-name" className="text-[10px] sm:text-xs font-bold text-muted-foreground tracking-widest uppercase">Last Name</label>
          <input
            id="last-name"
            type="text"
            placeholder="Doe"
            className="w-full bg-muted border rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-card-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:bg-background transition-all font-medium text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        <div className="space-y-2 sm:space-y-3">
          <label htmlFor="email" className="text-[10px] sm:text-xs font-bold text-muted-foreground tracking-widest uppercase">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            className="w-full bg-muted border rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-card-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:bg-background transition-all font-medium text-sm"
          />
        </div>
        <div className="space-y-2 sm:space-y-3">
          <label htmlFor="phone" className="text-[10px] sm:text-xs font-bold text-muted-foreground tracking-widest uppercase">Phone Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="+44 20 1234 5678"
            className="w-full bg-muted border rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-card-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:bg-background transition-all font-medium text-sm"
          />
        </div>
      </div>

      <div className="space-y-2 sm:space-y-3">
        <label htmlFor="inquiry-type" className="text-[10px] sm:text-xs font-bold text-muted-foreground tracking-widest uppercase">Inquiry Type</label>
        <div className="relative">
          <select
            id="inquiry-type"
            defaultValue=""
            className="w-full bg-muted border rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-card-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:bg-background transition-all appearance-none cursor-pointer font-medium text-sm"
          >
            <option value="" disabled>Select an option</option>
            <option value="wholesale">Wholesale Inquiry</option>
            <option value="shipping">Shipping & Logistics</option>
            <option value="support">General Support</option>
            <option value="partnership">Partnership</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-4 sm:px-5 pointer-events-none text-muted-foreground">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>
      </div>

      <div className="space-y-2 sm:space-y-3">
        <label htmlFor="message" className="text-[10px] sm:text-xs font-bold text-muted-foreground tracking-widest uppercase">Your Message</label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about the stock you need..."
          className="w-full bg-muted border rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-card-foreground placeholder:text-muted-foreground/50 resize-y focus:outline-none focus:ring-2 focus:ring-ring focus:bg-background transition-all font-medium text-sm"
        />
      </div>

      <button
        type="button"
        className="w-full sm:w-auto bg-foreground text-background px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold tracking-widest uppercase hover:bg-foreground/90 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group text-sm"
      >
        SEND MESSAGE
        <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </button>
    </form>
  );
};

export default ContactForm;
