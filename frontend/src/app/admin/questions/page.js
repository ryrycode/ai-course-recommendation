"use client";

import { useState } from "react";
import mockAdminQuestions from "@/data/mockAdminQuestions";

export default function QuestionsPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
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

            {mockAdminQuestions.map((item) => (

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

                <td className="p-4 text-center space-x-3">

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

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

          <div className="bg-white rounded-xl shadow-lg p-8 w-[500px]">

            <h2 className="text-2xl font-bold text-green-700">
              Add Question
            </h2>

            <p className="text-gray-500 mt-2">
              This is our first modal.
            </p>

            <div className="flex justify-end mt-8">

              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-3 border rounded-lg"
              >
                Cancel
              </button>

            </div>

          </div>

        </div>
      )}

    </>
  );
}