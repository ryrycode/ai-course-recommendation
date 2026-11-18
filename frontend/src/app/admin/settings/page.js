"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [platformName, setPlatformName] = useState("Thinker");
  const [platformEmail, setPlatformEmail] =
    useState("admin@thinker.com");

  const [assessmentStatus, setAssessmentStatus] =
    useState(true);

  const [maintenanceMode, setMaintenanceMode] =
    useState(false);

  function handleSaveSettings() {
    alert("Settings saved successfully.");
  }

  return (
    <>
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold text-green-700">
          Platform Settings
        </h1>

        <p className="text-gray-600 mt-2">
          Manage general settings for the Thinker platform.
        </p>
      </div>

      <div className="mt-10 space-y-8">

        {/* General Settings */}
        <section className="bg-white rounded-xl shadow-sm p-8">

          <h2 className="text-2xl font-bold text-green-700">
            General Settings
          </h2>

          <p className="text-gray-600 mt-2">
            Basic information about the Thinker platform.
          </p>

          {/* Platform Name */}
          <div className="mt-6">

            <label className="block font-semibold mb-2 text-gray-800">
              Platform Name
            </label>

            <input
              type="text"
              value={platformName}
              onChange={(e) =>
                setPlatformName(e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
            />

          </div>

          {/* Administrator Email */}
          <div className="mt-6">

            <label className="block font-semibold mb-2 text-gray-800">
              Administrator Email
            </label>

            <input
              type="email"
              value={platformEmail}
              onChange={(e) =>
                setPlatformEmail(e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
            />

          </div>

        </section>

        {/* Assessment Settings */}
        <section className="bg-white rounded-xl shadow-sm p-8">

          <h2 className="text-2xl font-bold text-green-700">
            Assessment Settings
          </h2>

          <p className="text-gray-600 mt-2">
            Control whether students can currently take the
            assessment.
          </p>

          <div className="flex items-center justify-between mt-6">

            <div>
              <p className="font-semibold text-gray-800">
                Assessment Availability
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Allow students to access and complete the
                assessment.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setAssessmentStatus(!assessmentStatus)
              }
              className={
                assessmentStatus
                  ? "bg-green-700 text-white px-5 py-2 rounded-lg font-semibold"
                  : "bg-gray-300 text-gray-700 px-5 py-2 rounded-lg font-semibold"
              }
            >
              {assessmentStatus
                ? "Enabled"
                : "Disabled"}
            </button>

          </div>

        </section>

        {/* System Settings */}
        <section className="bg-white rounded-xl shadow-sm p-8">

          <h2 className="text-2xl font-bold text-green-700">
            System Settings
          </h2>

          <p className="text-gray-600 mt-2">
            Manage platform availability.
          </p>

          <div className="flex items-center justify-between mt-6">

            <div>
              <p className="font-semibold text-gray-800">
                Maintenance Mode
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Temporarily restrict access while system
                maintenance is being performed.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setMaintenanceMode(!maintenanceMode)
              }
              className={
                maintenanceMode
                  ? "bg-red-600 text-white px-5 py-2 rounded-lg font-semibold"
                  : "bg-gray-300 text-gray-700 px-5 py-2 rounded-lg font-semibold"
              }
            >
              {maintenanceMode
                ? "Enabled"
                : "Disabled"}
            </button>

          </div>

        </section>

        {/* Save Changes */}
        <div className="flex justify-end">

          <button
            type="button"
            onClick={handleSaveSettings}
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold"
          >
            Save Changes
          </button>

        </div>

      </div>
    </>
  );
}