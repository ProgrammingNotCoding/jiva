import React from "react";
import { Mail, Phone, MessageSquare, HelpCircle } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center gap-8 pb-0 pt-16 md:pt-10 md:pb-32 px-4 sm:px-8 md:px-16 lg:px-60 bg-gradient-to-b from-neutral-950 to-black">
      <div className="text-center mb-8 max-w-2xl px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[550] mb-4">How can we help?</h1>
        <p className="text-lg sm:text-xl text-neutral-300/80">
          Get in touch with our team for support, sales inquiries, or general questions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-7xl">
        <div className="bg-neutral-900/50 rounded-lg p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
            <h2 className="text-xl sm:text-2xl font-[550]">Sales</h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-300/80 mb-6">
            Speak to our sales team about plans, pricing, or request a demo.
          </p>
          <button className="w-full sm:w-auto bg-neutral-800 hover:bg-neutral-700 transition-colors px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base">
            Talk to sales
          </button>
        </div>

        <div className="bg-neutral-900/50 rounded-lg p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
            <h2 className="text-xl sm:text-2xl font-[550]">Help & Support</h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-300/80 mb-6">
            Ask product questions, report problems, or get technical assistance.
          </p>
          <button className="w-full sm:w-auto bg-neutral-800 hover:bg-neutral-700 transition-colors px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base">
            Contact support
          </button>
        </div>

        <div className="bg-neutral-900/50 rounded-lg p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
            <h2 className="text-xl sm:text-2xl font-[550]">Email</h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-300/80 mb-6">
            For general inquiries, reach out to us via email.
          </p>
          <a href="mailto:jiva@example.com" className="text-green-400 hover:text-green-300 transition-colors text-sm sm:text-base">
            jiva@example.com
          </a>
        </div>

        <div className="bg-neutral-900/50 rounded-lg p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
            <h2 className="text-xl sm:text-2xl font-[550]">Phone</h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-300/80 mb-6">
            Need to talk? Our support team is available during business hours.
          </p>
          <a href="tel:+1234567890" className="text-green-400 hover:text-green-300 transition-colors text-sm sm:text-base">
            +1 (234) 567-890
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;
