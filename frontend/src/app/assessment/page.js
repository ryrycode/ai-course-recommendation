"use client";

import { useContext } from "react";
import { StudentContext } from "@/context/StudentContext";
import ThinkerLogo from "@/components/ThinkerLogo";

import Link from "next/link";

export default function AssessmentPage() {
  const { student } = useContext(StudentContext);
  return (
    <main className="min-h-screen bg-linear-to-r from-[#cdffd8] to-[#94b9ff] py-16">

    {/* LOGO */}
      <div className="absolute left-29 top-5">
        <ThinkerLogo />
      </div>
      
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-7">

        <div>
          <h1 className="text-4xl font-bold text-green-700">
            Welcome{student.fullName ? `, ${student.fullName}` : ""}!
          </h1>

          <p className="mt-3 text-gray-600">
            Before starting your assessment, please read the following instructions carefully.
          </p>
        </div>

        <div className="mt-8 space-y-4">

          <div className="p-3 border rounded-lg">
            • Answer every question honestly.
          </div>

          <div className="p-3 border rounded-lg">
            • There are no right or wrong answers.
          </div>

          <div className="p-3 border rounded-lg">
            • Your responses will be analyzed by the AI recommendation system.
          </div>

          <div className="p-3 border rounded-lg">
            • The assessment takes approximately 10–15 minutes.
          </div>

          <div className="p-3 border rounded-lg">
            • Your information will remain confidential.
          </div>

        </div>

        <Link href="/assessment/questions">
            <button className="mt-4 bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold">
                Begin Assessment
            </button>
        </Link>

      </div>

    </main>
  );
}