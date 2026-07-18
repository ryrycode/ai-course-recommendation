export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-green-700">
          How It Works
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
          The system guides students through a simple three-step process
          to generate personalized course recommendations.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {/* Step 1 */}
          <div className="text-center">

            <div className="w-20 h-20 mx-auto rounded-full bg-green-700 text-white flex items-center justify-center text-3xl font-bold">
              1
            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              Take the Assessment
            </h3>

            <p className="mt-4 text-gray-600">
              Answer questions about your interests, strengths,
              academic abilities, and career preferences.
            </p>

          </div>

          {/* Step 2 */}
          <div className="text-center">

            <div className="w-20 h-20 mx-auto rounded-full bg-green-700 text-white flex items-center justify-center text-3xl font-bold">
              2
            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              AI Analysis
            </h3>

            <p className="mt-4 text-gray-600">
              The AI analyzes your assessment results and compares
              them with the course recommendation matrix.
            </p>

          </div>

          {/* Step 3 */}
          <div className="text-center">

            <div className="w-20 h-20 mx-auto rounded-full bg-green-700 text-white flex items-center justify-center text-3xl font-bold">
              3
            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              Get Recommendations
            </h3>

            <p className="mt-4 text-gray-600">
              Receive personalized course recommendations together
              with possible career opportunities.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}