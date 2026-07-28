"use client";

import { useState } from "react";
import mockAdminQuestions from "@/data/mockAdminQuestions";

export default function QuestionsPage() {

  const [showModal, setShowModal] = useState(false);

  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const [questionList, setQuestionList] = useState(mockAdminQuestions);

  const [editingId, setEditingId] = useState(null);

  function handleSaveQuestion() {

    if (!category.trim() || !question.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    const newQuestion = {
      id: Date.now(),
      category: category,
      question: question,
    };

    setQuestionList([...questionList, newQuestion]);

    setCategory("");
    setQuestion("");

    setShowModal(false);
  }

  function openAddModal() {
    setEditingId(null);
    setCategory("");
    setQuestion("");
    setShowModal(true);
  }

  function openEditModal(item) {
    setEditingId(item.id);
    setCategory(item.category);
    setQuestion(item.question);
    setShowModal(true);
  }

  function handleSaveQuestion() {

    if (!category.trim() || !question.trim()) {
      alert("Please complete all fields.");
      return;
    }

    if (editingId !== null) {

      const updatedQuestions = questionList.map((item) => {

        if (item.id === editingId) {
          return {
            ...item,
            category,
            question,
          };
        }

        return item;

      });

      setQuestionList(updatedQuestions);

    } else {

      const newQuestion = {
        id: questionList.length + 1,
        category,
        question,
      };

      setQuestionList([
        ...questionList,
        newQuestion,
      ]);

    }

    setCategory("");
    setQuestion("");
    setEditingId(null);
    setShowModal(false);
  }

  function handleDeleteQuestion(id) {

    const updatedQuestions = questionList.filter(
      (item) => item.id !== id
    );

    setQuestionList(updatedQuestions);

  }

  const categories = [
  "All Categories",
  ...new Set(questionList.map((item) => item.category)),
  ];

  return (
    <>

      <div className="flex justify-between items-center">

        <h1 className="text-4xl font-bold text-green-700">
          Question Management
        </h1>

        <button
          onClick={openAddModal}
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg"
        >
          + Add Question
        </button>

      </div>

      <div className="mt-8 mb-4 flex gap-4">

        <input
          type="text"
          placeholder="Search by category or question..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 border rounded-lg p-3"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded-lg p-3 w-64"
        >

          {categories.map((category) => (

            <option
              key={category}
              value={category}
            >
              {category}
            </option>

          ))}

        </select>

      </div>

        <table className="w-full">

          <thead className="bg-green-700 text-white">

            <tr>

              <th className="text-left p-4">Category</th>

              <th className="text-left p-4">Question</th>

              <th className="text-center p-4">Actions</th>

            </tr>

          </thead>

          <tbody>

            {questionList
            .filter((item) => {

              const search = searchTerm.toLowerCase();

              return (
                item.category.toLowerCase().includes(search) ||
                item.question.toLowerCase().includes(search)
              );

            })
            .map((item) => (

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

                  <button
                    onClick={() => openEditModal(item)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDeleteQuestion(item.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      {showModal && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

          <div className="bg-white rounded-xl shadow-lg w-[550px] p-8">

            <h2 className="text-2xl font-bold text-green-700">

              {editingId !== null
                ? "Edit Question"
                : "Add Question"}

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