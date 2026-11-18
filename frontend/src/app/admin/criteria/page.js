"use client";

import { useState } from "react";

export default function CriteriaPage() {
  const [showModal, setShowModal] = useState(false);

  const [criterionName, setCriterionName] = useState("");
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [criteriaList, setCriteriaList] = useState([
    {
      id: 1,
      name: "Academic Performance",
      description: "Evaluates the student's overall academic performance.",
      weight: 25,
      active: true,
    },
    {
      id: 2,
      name: "Strongest Subject",
      description: "Considers the student's strongest academic subject.",
      weight: 20,
      active: true,
    },
    {
      id: 3,
      name: "Skills",
      description: "Considers the student's identified strengths and skills.",
      weight: 20,
      active: true,
    },
    {
      id: 4,
      name: "Interests",
      description: "Considers the student's activities and personal interests.",
      weight: 20,
      active: true,
    },
    {
      id: 5,
      name: "Work Preference",
      description: "Considers the student's preferred working environment and style.",
      weight: 15,
      active: true,
    },
  ]);

  function openAddModal() {
    setEditingId(null);
    setCriterionName("");
    setDescription("");
    setWeight("");
    setShowModal(true);
  }

  function openEditModal(item) {
    setEditingId(item.id);
    setCriterionName(item.name);
    setDescription(item.description);
    setWeight(item.weight);
    setShowModal(true);
  }

  function handleSaveCriterion() {
    if (
      !criterionName.trim() ||
      !description.trim() ||
      !weight
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const numericWeight = Number(weight);

    if (numericWeight <= 0 || numericWeight > 100) {
      alert("Weight must be between 1 and 100.");
      return;
    }

    if (editingId !== null) {
      const updatedCriteria = criteriaList.map((item) => {
        if (item.id === editingId) {
          return {
            ...item,
            name: criterionName,
            description,
            weight: numericWeight,
          };
        }

        return item;
      });

      setCriteriaList(updatedCriteria);
    } else {
      const newCriterion = {
        id: Date.now(),
        name: criterionName,
        description,
        weight: numericWeight,
        active: true,
      };

      setCriteriaList([...criteriaList, newCriterion]);
    }

    setCriterionName("");
    setDescription("");
    setWeight("");
    setEditingId(null);
    setShowModal(false);
  }

  function handleDeleteCriterion(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this criterion?"
    );

    if (!confirmed) return;

    const updatedCriteria = criteriaList.filter(
      (item) => item.id !== id
    );

    setCriteriaList(updatedCriteria);
  }

  function toggleCriterion(id) {
    const updatedCriteria = criteriaList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          active: !item.active,
        };
      }

      return item;
    });

    setCriteriaList(updatedCriteria);
  }

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-green-700">
            Recommendation Criteria
          </h1>

          <p className="text-gray-600 mt-2">
            Manage the factors used by Thinker for course recommendations.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg"
        >
          + Add Criterion
        </button>
      </div>

      {/* Criteria Table */}
      <div className="mt-8">
        <table className="w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="text-left p-4">
                Criterion
              </th>

              <th className="text-left p-4">
                Description
              </th>

              <th className="text-center p-4">
                Weight
              </th>

              <th className="text-center p-4">
                Status
              </th>

              <th className="text-center p-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {criteriaList.map((item) => (
              <tr
                key={item.id}
                className="border-b text-gray-800"
              >
                <td className="p-4 font-semibold">
                  {item.name}
                </td>

                <td className="p-4">
                  {item.description}
                </td>

                <td className="p-4 text-center font-semibold">
                  {item.weight}%
                </td>

                <td className="p-4 text-center">
                  <button
                    onClick={() => toggleCriterion(item.id)}
                    className={
                      item.active
                        ? "text-green-700 font-semibold"
                        : "text-gray-500 font-semibold"
                    }
                  >
                    {item.active ? "Active" : "Inactive"}
                  </button>
                </td>

                <td className="p-4 text-center space-x-4">
                  <button
                    onClick={() => openEditModal(item)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDeleteCriterion(item.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {criteriaList.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="text-center p-8 text-gray-600"
                >
                  No recommendation criteria found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg w-[550px] p-8 text-gray-800">

            <h2 className="text-2xl font-bold text-green-700">
              {editingId !== null
                ? "Edit Criterion"
                : "Add Criterion"}
            </h2>

            {/* Criterion Name */}
            <div className="mt-6">
              <label className="block font-semibold mb-2">
                Criterion Name
              </label>

              <input
                type="text"
                value={criterionName}
                onChange={(e) =>
                  setCriterionName(e.target.value)
                }
                placeholder="Enter criterion name"
                className="w-full border rounded-lg p-3 text-gray-800 bg-white placeholder-gray-400"
              />
            </div>

            {/* Description */}
            <div className="mt-6">
              <label className="block font-semibold mb-2">
                Description
              </label>

              <textarea
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                placeholder="Describe this criterion"
                className="w-full border rounded-lg p-3 h-28 text-gray-800 bg-white placeholder-gray-400"
              />
            </div>

            {/* Weight */}
            <div className="mt-6">
              <label className="block font-semibold mb-2">
                Weight (%)
              </label>

              <input
                type="number"
                min="1"
                max="100"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter weight"
                className="w-full border rounded-lg p-3 text-gray-800 bg-white placeholder-gray-400"
              />
            </div>

            {/* Modal Actions */}
            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={() => setShowModal(false)}
                className="border px-6 py-3 rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={handleSaveCriterion}
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg"
              >
                {editingId !== null ? "Update" : "Save"}
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}