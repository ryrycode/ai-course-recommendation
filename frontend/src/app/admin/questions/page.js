"use client";

import { useState } from "react";
import mockAdminQuestions from "@/data/mockAdminQuestions";

export default function QuestionsPage() {

  // Modal
  const [showModal, setShowModal] = useState(false);

  // Form Inputs
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");

  // Table Data
  const [questionList, setQuestionList] = useState(mockAdminQuestions);

  function handleSaveQuestion() {

    if (!category.trim() || !question.trim()) {
      alert("Please complete all fields.");
      return;
    }

    const newQuestion = {
      id: questionList.length + 1,
      category,
      question,
    };

    setQuestionList([
      ...questionList,
      newQuestion,
    ]);

    setCategory("");
    setQuestion("");

    setShowModal(false);
  }

  return (
    <>

      {/* Header */}

      <div className="flex justify-between items-center">

        <h1 className="text-4xl font-bold text-green-700">
          Question Management
        </h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg"
        >
          + Add Question
        </button>

      </div>

      {/* Table */}

      <div className="mt-8 bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-green-700 text-white">

            <tr>

              <th className="text-left p-4">
                Category
              </th>

              <th className="text-left p-4">
                Question
              </th>

              <th className="text-center p-4">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {questionList.map((item) => (

              <tr
                key={item.id}
                className="border-b"
              >

                <td className="p-4">
                  {item.category}
                </td>

                <td className="p-4">
                  {item.question}
                </td>

                <td className="p-4 text-center space-x-4">

                  <button className="text-blue-600 hover:underline">
                    Edit
                  </button>

                  <button className="text-red-600 hover:underline">
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Modal */}

      {showModal && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

          <div className="bg-white rounded-xl shadow-lg w-[550px] p-8">

            <h2 className="text-2xl font-bold text-green-700">
              Add Question
            </h2>

            <div className="mt-6">

              <label className="block font-semibold mb-2">
                Category
              </label>

              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border rounded-lg p-3"
                placeholder="Example: Analytical Skills"
              />

            </div>

            <div className="mt-6">

              <label className="block font-semibold mb-2">
                Question
              </label>

              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full border rounded-lg p-3 h-32"
                placeholder="Enter question..."
              />

            </div>

            <div className="flex justify-end gap-4 mt-8">

              <button
                onClick={() => setShowModal(false)}
                className="border px-6 py-3 rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={handleSaveQuestion}
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg"
              >
                Save
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
}