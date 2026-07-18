import Link from "next/link";
export default function StudentPage() {
    
  return (
    <main className="min-h-screen bg-gray-100 py-16">

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-10">

        <h1 className="text-4xl font-bold text-green-700">
          Student Information
        </h1>

        <p className="text-gray-600 mt-2">
          Please provide your information before taking the assessment.
        </p>

        <form className="mt-10 space-y-6">

          <div>
            <label className="block font-semibold mb-2">
              Full Name
            </label>

            <input
              type="text"
              className="w-full border rounded-lg p-3"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Email Address
            </label>

            <input
              type="email"
              className="w-full border rounded-lg p-3"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Senior High School
            </label>

            <input
              type="text"
              className="w-full border rounded-lg p-3"
              placeholder="Enter your school"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Strand
            </label>

            <select className="w-full border rounded-lg p-3">

              <option>Choose Strand</option>
              <option>STEM</option>
              <option>ABM</option>
              <option>HUMSS</option>
              <option>GAS</option>
              <option>TVL</option>
              <option>Arts & Design</option>

            </select>
          </div>

          <Link href="/assessment">

            <button
              type="button"
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold"
            >
              Continue
            </button>

          </Link>

        </form>

      </div>

    </main>
  );
}