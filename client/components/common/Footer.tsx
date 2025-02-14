import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-neutral-950 border-t border-neutral-800 shadow-2xl shadow-white text-white py-10 px-40">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Jiva Logo" width={50} height={50} />
          <span className="text-xl font-bold">Jiva</span>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <Link href="/contact" className="bg-neutral-800 text-white px-4 py-2 rounded-lg hover:bg-neutral-700 transition duration-200">
            Contact
          </Link>
          <Link href="/get-started" className="bg-white/80 text-black px-4 py-2 rounded-lg hover:bg-white transition duration-200">
            Get Started
          </Link>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-5 mt-10">
        <div className="text-center lg:text-left">
          <p>&copy; 2025 Jiva. All rights reserved.</p>
        </div>
        <div className="flex gap-5">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
