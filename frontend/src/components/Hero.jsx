import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-linear-to-r from-[#cdffd8] to-[#94b9ff] min-h-[85vh] flex items-center justify-center">

      <div className="max-w-7xl mx-auto px-8 flex justify-center">

        <div className="text-center">

          <h1 className="text-6xl tracking-wider text-black [font-family:'Gulfs_Display',sans-serif] [transform:scaleX(1.5)]">
            Designed for
            <br />
            Smarter Decisions.
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Powered by Artificial Intelligence.
            <br />
            Driven by Your Potential.
          </p>

          <div className="flex justify-center mt-8">

            <Link href="/student">
              <button className="bg-[#1F2937] font-extrabold text-white px-20 py-4 rounded-full text-sm transition hover:bg-[#111827]">
                Get Started
              </button>
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}