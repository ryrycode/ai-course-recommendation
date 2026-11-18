"use client";

import { useState } from "react";

export default function UsersPage() {
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("SCHOOL_ADMIN");
  const [school, setSchool] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [userList, setUserList] = useState([
    {
      id: 1,
      name: "Thinker Super Admin",
      email: "superadmin@thinker.com",
      role: "SUPER_ADMIN",
      school: "All Schools",
      active: true,
    },
    {
      id: 2,
      name: "School Administrator",
      email: "admin@plmun.edu.ph",
      role: "SCHOOL_ADMIN",
      school: "Pamantasan ng Lungsod ng Muntinlupa",
      active: true,
    },
    {
      id: 3,
      name: "Guidance Counselor",
      email: "counselor@sshschool.edu.ph",
      role: "GUIDANCE_COUNSELOR",
      school: "Sample Senior High School",
      active: true,
    },
  ]);

  function openAddModal() {
    setEditingId(null);
    setName("");
    setEmail("");
    setRole("SCHOOL_ADMIN");
    setSchool("");
    setShowModal(true);
  }

  function openEditModal(user) {
    setEditingId(user.id);
    setName(user.name);
    setEmail(user.email);
    setRole(user.role);
    setSchool(user.school === "All Schools" ? "" : user.school);
    setShowModal(true);
  }

  function handleSaveUser() {
    if (!name.trim() || !email.trim()) {
      alert("Please fill in all required fields.");
      return;
    }

    if (role !== "SUPER_ADMIN" && !school.trim()) {
      alert("Please select a school.");
      return;
    }

    const assignedSchool =
      role === "SUPER_ADMIN" ? "All Schools" : school;

    if (editingId !== null) {
      const updatedUsers = userList.map((user) => {
        if (user.id === editingId) {
          return {
            ...user,
            name,
            email,
            role,
            school: assignedSchool,
          };
        }

        return user;
      });

      setUserList(updatedUsers);
    } else {
      const newUser = {
        id: Date.now(),
        name,
        email,
        role,
        school: assignedSchool,
        active: true,
      };

      setUserList([...userList, newUser]);
    }

    setName("");
    setEmail("");
    setRole("SCHOOL_ADMIN");
    setSchool("");
    setEditingId(null);
    setShowModal(false);
  }

  function toggleUser(id) {
    const updatedUsers = userList.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          active: !user.active,
        };
      }

      return user;
    });

    setUserList(updatedUsers);
  }

  function getRoleLabel(role) {
    if (role === "SUPER_ADMIN") {
      return "Super Admin";
    }

    if (role === "SCHOOL_ADMIN") {
      return "School Admin";
    }

    return "Guidance Counselor";
  }

  const filteredUsers = userList.filter((user) => {
    const search = searchTerm.toLowerCase();

    return (
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search) ||
      user.school.toLowerCase().includes(search) ||
      getRoleLabel(user.role).toLowerCase().includes(search)
    );
  });

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-green-700">
            Staff Accounts
          </h1>

          <p className="text-gray-600 mt-2">
            Manage administrators and guidance counselors across schools.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg"
        >
          + Add Staff Account
        </button>
      </div>

      <div className="mt-8 mb-4">
        <input
          type="text"
          placeholder="Search staff accounts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border rounded-lg p-3 text-gray-800 bg-white placeholder-gray-400"
        />
      </div>

      <table className="w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-green-700 text-white">
          <tr>
            <th className="text-left p-4">Name</th>
            <th className="text-left p-4">Email</th>
            <th className="text-left p-4">Role</th>
            <th className="text-left p-4">School</th>
            <th className="text-center p-4">Status</th>
            <th className="text-center p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user) => (
            <tr
              key={user.id}
              className="border-b text-gray-800"
            >
              <td className="p-4 font-semibold">
                {user.name}
              </td>

              <td className="p-4">
                {user.email}
              </td>

              <td className="p-4">
                {getRoleLabel(user.role)}
              </td>

              <td className="p-4">
                {user.school}
              </td>

              <td className="p-4 text-center">
                <button
                  onClick={() => toggleUser(user.id)}
                  className={
                    user.active
                      ? "text-green-700 font-semibold"
                      : "text-gray-500 font-semibold"
                  }
                >
                  {user.active ? "Active" : "Inactive"}
                </button>
              </td>

              <td className="p-4 text-center">
                <button
                  onClick={() => openEditModal(user)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}

          {filteredUsers.length === 0 && (
            <tr>
              <td
                colSpan="6"
                className="text-center p-8 text-gray-600"
              >
                No staff accounts found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg w-[550px] p-8 text-gray-800">

            <h2 className="text-2xl font-bold text-green-700">
              {editingId !== null
                ? "Edit Staff Account"
                : "Add Staff Account"}
            </h2>

            <div className="mt-6">
              <label className="block font-semibold mb-2">
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter full name"
                className="w-full border rounded-lg p-3 text-gray-800 bg-white placeholder-gray-400"
              />
            </div>

            <div className="mt-6">
              <label className="block font-semibold mb-2">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full border rounded-lg p-3 text-gray-800 bg-white placeholder-gray-400"
              />
            </div>

            <div className="mt-6">
              <label className="block font-semibold mb-2">
                Role
              </label>

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border rounded-lg p-3 text-gray-800 bg-white"
              >
                <option value="SCHOOL_ADMIN">
                  School Admin
                </option>

                <option value="GUIDANCE_COUNSELOR">
                  Guidance Counselor
                </option>

                <option value="SUPER_ADMIN">
                  Super Admin
                </option>
              </select>
            </div>

            {role !== "SUPER_ADMIN" && (
              <div className="mt-6">
                <label className="block font-semibold mb-2">
                  Assigned School
                </label>

                <select
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  className="w-full border rounded-lg p-3 text-gray-800 bg-white"
                >
                  <option value="">
                    Select a school
                  </option>

                  <option value="Pamantasan ng Lungsod ng Muntinlupa">
                    Pamantasan ng Lungsod ng Muntinlupa
                  </option>

                  <option value="Sample Senior High School">
                    Sample Senior High School
                  </option>

                  <option value="Demo Integrated School">
                    Demo Integrated School
                  </option>
                </select>
              </div>
            )}

            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={() => setShowModal(false)}
                className="border px-6 py-3 rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={handleSaveUser}
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg"
              >
                {editingId !== null ? "Update" : "Create Account"}
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}