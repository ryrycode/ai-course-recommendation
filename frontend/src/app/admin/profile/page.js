"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [name, setName] = useState("Thinker Super Admin");
  const [email, setEmail] = useState("superadmin@thinker.com");

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-green-700">
          My Profile
        </h1>

        <p className="text-gray-600 mt-2">
          View and manage your staff account information.
        </p>
      </div>

      <div className="mt-10 max-w-3xl">

        {/* Account Information */}
        <section className="bg-white rounded-xl shadow-sm p-8">

          <h2 className="text-2xl font-bold text-green-700">
            Account Information
          </h2>

          <div className="mt-6">

            <label className="block font-semibold mb-2 text-gray-800">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-white"
            />

          </div>

          <div className="mt-6">

            <label className="block font-semibold mb-2 text-gray-800">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-white"
            />

          </div>

        </section>

        {/* Role Information */}
        <section className="bg-white rounded-xl shadow-sm p-8 mt-8">

          <h2 className="text-2xl font-bold text-green-700">
            Access Information
          </h2>

          <div className="mt-6">

            <p className="font-semibold text-gray-800">
              Role
            </p>

            <p className="mt-2 inline-block bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold">
              Super Admin
            </p>

          </div>

          <div className="mt-6">

            <p className="font-semibold text-gray-800">
              School Access
            </p>

            <p className="text-gray-600 mt-2">
              All Schools
            </p>

          </div>

        </section>

        {/* Save */}
        <div className="flex justify-end mt-8">

          <button
            type="button"
            onClick={() =>
              alert("Profile updated successfully.")
            }
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold"
          >
            Save Changes
          </button>

        </div>

      </div>
    </>
  );
}