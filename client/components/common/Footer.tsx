import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-neutral-950 border-t border-neutral-800 shadow-2xl shadow-white text-white py-8 px-4 md:px-6 lg:px-8 xl:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Jiva Logo" width={50} height={50} />
            <span className="text-xl font-bold">Jiva</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto mt-4 sm:mt-0">
            <Link href="/contact" className="bg-neutral-800 text-white px-4 py-2 rounded-lg hover:bg-neutral-700 transition duration-200 text-center">
              Contact
            </Link>
            <Link href="/login" className="bg-white/80 text-black px-4 py-2 rounded-lg hover:bg-white transition duration-200 text-center">
              Get Started
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-5 mt-8">
          <div className="text-center sm:text-left">
            <p>&copy; 2025 Jiva. All rights reserved.</p>
          </div>
          <div className="flex gap-4 sm:gap-5 mt-4 sm:mt-0 flex-wrap justify-center">
            <Link href="/privacy-policy" className="hover:underline text-sm sm:text-base">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:underline text-sm sm:text-base">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
