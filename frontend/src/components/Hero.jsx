import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-white min-h-[85vh] flex items-center">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <h1 className="text-6xl font-extrabold text-green-700 leading-tight">
            Find the
            <br />
            Right Course
            <br />
            for Your Future
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Our AI-powered course recommendation system helps upcoming
            first-year university students discover the academic program
            that best matches their interests, skills, and career goals.
          </p>

          <Link href="/student">
            <button className="mt-8 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
              Start Assessment
            </button>
          </Link>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700"
            alt="Students"
            className="rounded-3xl shadow-2xl"
          />
        </div>

      </div>

    </section>
  );
}