import Link from "next/link";

export default function AssessmentPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-16">

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-10">

        <h1 className="text-4xl font-bold text-green-700">
          Assessment Instructions
        </h1>

        <p className="mt-4 text-gray-600">
          Before you begin, please read the following instructions carefully.
        </p>

        <div className="mt-8 space-y-4">

          <div className="p-4 border rounded-lg">
            • Answer every question honestly.
          </div>

          <div className="p-4 border rounded-lg">
            • There are no right or wrong answers.
          </div>

          <div className="p-4 border rounded-lg">
            • Your responses will be analyzed by the AI recommendation system.
          </div>

          <div className="p-4 border rounded-lg">
            • The assessment takes approximately 10–15 minutes.
          </div>

          <div className="p-4 border rounded-lg">
            • Your information will remain confidential.
          </div>

        </div>

        <Link href="/assessment/questions">
            <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold">
                Begin Assessment
            </button>
        </Link>

      </div>

    </main>
  );
}