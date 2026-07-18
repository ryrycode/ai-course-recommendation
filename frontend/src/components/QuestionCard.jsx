export default function QuestionCard({
  number,
  total,
  question,
  name,
}) {
  return (
    <div className="mt-6 bg-white border rounded-xl p-8 shadow-sm">

      <p className="text-lg font-semibold">
        Question {number}
      </p>

      <p className="text-sm text-gray-500 mt-1">
        Question {number} of {total}
      </p>

      <p className="mt-6 text-2xl font-semibold text-center text-gray-800">
        {question}
      </p>

      <div className="space-y-4 mt-8">

        <label className="flex items-center gap-3 border rounded-lg p-4 hover:bg-green-50 cursor-pointer">
          <input type="radio" name={name} value="1" />
          Strongly Disagree
        </label>

        <label className="flex items-center gap-3 border rounded-lg p-4 hover:bg-green-50 cursor-pointer">
          <input type="radio" name={name} value="2" />
          Disagree
        </label>

        <label className="flex items-center gap-3 border rounded-lg p-4 hover:bg-green-50 cursor-pointer">
          <input type="radio" name={name} value="3" />
          Neutral
        </label>

        <label className="flex items-center gap-3 border rounded-lg p-4 hover:bg-green-50 cursor-pointer">
          <input type="radio" name={name} value="4" />
          Agree
        </label>

        <label className="flex items-center gap-3 border rounded-lg p-4 hover:bg-green-50 cursor-pointer">
          <input type="radio" name={name} value="5" />
          Strongly Agree
        </label>

      </div>

    </div>
  );
}