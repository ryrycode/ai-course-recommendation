import Image from "next/image";
import ThinkerLogo from "@/components/ThinkerLogo";


export default function Navbar() {
  return (
    <nav className="w-full bg-linear-to-r from-[#cdffd8] to-[#94b9ff] shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <ThinkerLogo />

      </div>
    </nav>
  );
}