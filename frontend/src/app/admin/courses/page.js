"use client";

import { useState } from "react";

export default function CoursesPage() {
  const [showModal, setShowModal] = useState(false);

  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [courseList, setCourseList] = useState([
    {
      id: 1,
      name: "Bachelor of Science in Information Technology",
      description:
        "A program focused on software development, information systems, databases, and technology.",
    },
    {
      id: 2,
      name: "Bachelor of Science in Computer Science",
      description:
        "A program focused on computing, algorithms, programming, and software development.",
    },
    {
      id: 3,
      name: "Bachelor of Science in Business Administration",
      description:
        "A program focused on business management, marketing, finance, and organizational operations.",
    },
  ]);

  function openAddModal() {
    setEditingId(null);
    setCourseName("");
    setCourseDescription("");
    setShowModal(true);
  }

  function openEditModal(course) {
    setEditingId(course.id);
    setCourseName(course.name);
    setCourseDescription(course.description);
    setShowModal(true);
  }

  function handleSaveCourse() {
    if (!courseName.trim() || !courseDescription.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    if (editingId !== null) {
      const updatedCourses = courseList.map((course) => {
        if (course.id === editingId) {
          return {
            ...course,
            name: courseName,
            description: courseDescription,
          };
        }

        return course;
      });

      setCourseList(updatedCourses);
    } else {
      const newCourse = {
        id: Date.now(),
        name: courseName,
        description: courseDescription,
      };

      setCourseList([...courseList, newCourse]);
    }

    setCourseName("");
    setCourseDescription("");
    setEditingId(null);
    setShowModal(false);
  }

  function handleDeleteCourse(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmed) return;

    const updatedCourses = courseList.filter(
      (course) => course.id !== id
    );

    setCourseList(updatedCourses);
  }

  const filteredCourses = courseList.filter((course) => {
    const search = searchTerm.toLowerCase();

    return (
      course.name.toLowerCase().includes(search) ||
      course.description.toLowerCase().includes(search)
    );
  });

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-green-700">
          Course Management
        </h1>

        <button
          onClick={openAddModal}
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg"
        >
          + Add Course
        </button>
      </div>

      {/* Search */}
      <div className="mt-8 mb-4">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border rounded-lg p-3 text-gray-800 bg-white placeholder-gray-400"
        />
      </div>

      {/* Course Table */}
      <table className="w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-green-700 text-white">
          <tr>
            <th className="text-left p-4">
              Course
            </th>

            <th className="text-left p-4">
              Description
            </th>

            <th className="text-center p-4">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredCourses.map((course) => (
            <tr
              key={course.id}
              className="border-b text-gray-800"
            >
              <td className="p-4 font-semibold">
                {course.name}
              </td>

              <td className="p-4">
                {course.description}
              </td>

              <td className="p-4 text-center space-x-4">
                <button
                  onClick={() => openEditModal(course)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDeleteCourse(course.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {filteredCourses.length === 0 && (
            <tr>
              <td
                colSpan="3"
                className="text-center p-8 text-gray-600"
              >
                No courses found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg w-[550px] p-8 text-gray-800">

            <h2 className="text-2xl font-bold text-green-700">
              {editingId !== null
                ? "Edit Course"
                : "Add Course"}
            </h2>

            {/* Course Name */}
            <div className="mt-6">
              <label className="block font-semibold mb-2">
                Course Name
              </label>

              <input
                type="text"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                placeholder="Enter course name"
                className="w-full border rounded-lg p-3 text-gray-800 bg-white placeholder-gray-400"
              />
            </div>

            {/* Description */}
            <div className="mt-6">
              <label className="block font-semibold mb-2">
                Description
              </label>

              <textarea
                value={courseDescription}
                onChange={(e) =>
                  setCourseDescription(e.target.value)
                }
                placeholder="Enter course description"
                className="w-full border rounded-lg p-3 h-32 text-gray-800 bg-white placeholder-gray-400"
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
                onClick={handleSaveCourse}
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