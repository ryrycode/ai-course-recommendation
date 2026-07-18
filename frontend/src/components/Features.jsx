export default function Features() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-green-700">
          Why Choose Our System?
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
          The AI-Based Course Recommendation System helps students make
          informed academic decisions through intelligent assessment and
          personalized recommendations.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          <div className="bg-green-50 p-8 rounded-2xl shadow">
            <h3 className="text-xl font-bold text-green-700">
              AI Recommendation
            </h3>

            <p className="mt-4 text-gray-600">
              Uses AI techniques to recommend suitable academic programs
              based on assessment results.
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-2xl shadow">
            <h3 className="text-xl font-bold text-green-700">
              Personalized Assessment
            </h3>

            <p className="mt-4 text-gray-600">
              Evaluates students' interests, aptitude, strengths,
              and career preferences.
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-2xl shadow">
            <h3 className="text-xl font-bold text-green-700">
              Smart Decision Support
            </h3>

            <p className="mt-4 text-gray-600">
              Helps students select academic programs that align
              with their future goals.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}