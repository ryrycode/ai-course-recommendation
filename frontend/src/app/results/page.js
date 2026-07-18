import Link from "next/link";

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-16">

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-10">

        {/* Header */}
        <h1 className="text-4xl font-bold text-green-700 text-center">
          Assessment Completed
        </h1>

        <p className="text-center text-gray-600 mt-3">
          Based on your assessment, our AI generated the following recommendations.
        </p>

        {/* Best Recommendation */}
        <div className="mt-10 bg-green-50 border-l-4 border-green-700 p-8 rounded-lg">

          <p className="text-sm text-gray-600">
            Best Match
          </p>

          <h2 className="text-3xl font-bold text-green-700 mt-2">
            Bachelor of Science in Information Technology
          </h2>

          <p className="mt-4 text-gray-700">
            Compatibility Score
          </p>

          <h3 className="text-5xl font-extrabold text-green-700">
            92%
          </h3>

        </div>

        {/* Other Recommended Courses */}
        <div className="mt-10">

            <h2 className="text-2xl font-bold text-gray-800">
            Other Recommended Courses
            </h2>

            <p className="text-gray-600 mt-2">
            Based on your assessment, these programs also match your profile.
            </p>

        <div className="grid md:grid-cols-2 gap-5 mt-6">

            <div className="border rounded-xl p-6 shadow-sm">

                <h3 className="font-bold text-xl">
                    BS Computer Science
                </h3>

                <p className="text-green-700 font-semibold mt-2">
                    Compatibility: 88%
                </p>

            </div>

            <div className="border rounded-xl p-6 shadow-sm">

                <h3 className="font-bold text-xl">
                    BS Information Systems
                </h3>

                <p className="text-green-700 font-semibold mt-2">
                    Compatibility: 84%
                </p>

            </div>

        </div>

        </div>

        {/* Recommended Schools */}
        <div className="mt-12">

            <h2 className="text-2xl font-bold text-gray-800">
                Recommended Schools in Muntinlupa City
            </h2>

            <p className="text-gray-600 mt-2">
                The following schools offer your recommended course.
            </p>

            <div className="space-y-5 mt-6">

                <div className="border rounded-xl p-6 shadow-sm">

                    <h3 className="text-xl font-bold text-green-700">
                        Pamantasan ng Lungsod ng Muntinlupa
                    </h3>

                    <p className="mt-2 text-gray-700">
                        📚 Course Offered:
                    </p>

                    <p className="font-semibold">
                        Bachelor of Science in Information Technology
                    </p>

                    <p className="mt-3 text-gray-500">
                        Poblacion, Muntinlupa City
                    </p>

                </div>

                <div className="border rounded-xl p-6 shadow-sm">

                    <h3 className="text-xl font-bold text-green-700">
                        STI College - Alabang
                    </h3>

                    <p className="mt-2 text-gray-700">
                        📚 Course Offered:
                    </p>

                    <p className="font-semibold">
                        Bachelor of Science in Information Technology
                    </p>

                    <p className="mt-3 text-gray-500">
                        Alabang, Muntinlupa City
                    </p>

                </div>

            </div>

        </div>

        {/* Disclaimer */}
        <div className="mt-10 bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg">

            <p className="text-sm text-gray-700">

                <strong>Note:</strong> The recommended schools are limited to
                educational institutions within Muntinlupa City that offer the
                recommended program. Students are encouraged to verify admission
                requirements and program availability directly with the institution.

            </p>

        </div>

      </div>

    </main>
  );
}