"use client";

import Link from "next/link";

export default function AdminLogin() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-10">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-green-700">
            Thinker
          </h1>

          <p className="text-gray-500 mt-2">
            Administrator Login
          </p>

        </div>

        <form className="mt-10 space-y-6">

          <div>

            <label className="block font-semibold mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg p-3"
            />

          </div>

          <div>

            <label className="block font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-lg p-3"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold"
          >
            Login
          </button>

        </form>

        <div className="mt-6 text-center">

          <Link
            href="/"
            className="text-green-700 hover:underline"
          >
            ← Back to Homepage
          </Link>

        </div>

      </div>

    </main>
  );
}