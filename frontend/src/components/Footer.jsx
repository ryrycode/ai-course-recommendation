import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-linear-to-r from-[#cdffd8] to-[#94b9ff] py-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold">
              About Us
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-green-50">
              Thinker AI is an AI-based course recommendation
              system developed to help students make more
              informed decisions about their future academic
              paths through personalized course recommendations.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold">
              Contact Us
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-green-50">
              Have questions or concerns about Thinker AI?
              You can reach out to our project team.
            </p>

            <p className="mt-3 text-sm text-green-50">
              Email: your-email@example.com
            </p>
          </div>

        </div>

        <div className="mt-8 border-t border-white/20 pt-5 text-center text-xs text-green-100">
          © 2026 Thinker AI. All rights reserved.
        </div>

      </div>
    </footer>
  );
}