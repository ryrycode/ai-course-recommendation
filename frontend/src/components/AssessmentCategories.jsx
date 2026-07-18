export default function AssessmentCategories() {
  const skills = [
    "Analytical & Logical",
    "Verbal & Linguistic",
    "Quantitative & Numerical",
    "Spatial & Mechanical",
    "Interpersonal & Emotional",
    "Organizational & Detail-Oriented",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-green-700">
          Assessment Categories
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
          The assessment measures six important skill areas to determine
          the academic programs that best match each student's strengths
          and career interests.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="border rounded-xl p-8 shadow hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">
                📘
              </div>

              <h3 className="text-xl font-bold text-green-700">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}