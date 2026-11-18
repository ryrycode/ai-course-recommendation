"use client";

import { useContext, useState } from "react";
import { StudentContext } from "@/context/StudentContext";
import { useRouter } from "next/navigation";
import ThinkerLogo from "@/components/ThinkerLogo";

export default function StudentPage() {
  const { student, setStudent } = useContext(StudentContext);
  const router = useRouter();

  const [error, setError] = useState("");

  function handleNext() {
    if (!student.school || !student.email) {
      setError("Please complete all fields before continuing.");
      return;
    }

    setError("");

    // STEP 1 → STEP 2
    router.push("/assessment/questions");
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#cdffd8] to-[#94b9ff] px-8 py-6">

      {/* LOGO */}
      <div className="mb-6">
        <ThinkerLogo />
      </div>

      <div className="mx-auto flex max-w-6xl items-start gap-10">

        {/* LEFT STEPPER */}
        <div className="w-56 shrink-0 pt-8">

          <h2 className="mb-6 text-xl font-bold text-[#111827]">
            Step 1 of 2
          </h2>

          {/* STEP 1 */}
          <div className="relative flex items-center">

            <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#2F4385] text-sm font-bold text-white">
              1
            </div>

            <p className="ml-4 text-sm font-semibold text-[#111827]">
              Assessment Information
            </p>

            <div className="absolute left-[19px] top-10 h-14 w-0.5 bg-gray-400"></div>

          </div>

          {/* STEP 2 */}
          <div className="mt-14 flex items-center">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-500 text-sm font-bold text-white">
              2
            </div>

            <p className="ml-4 text-sm font-semibold text-gray-500">
              Assessment
            </p>

          </div>

        </div>

        {/* MAIN PANEL */}
        <div className="flex-1">

          <div className="rounded-2xl bg-[#fffdf2] px-7 py-7 shadow-sm">

            <h1 className="text-3xl font-bold text-[#111827]">
              Let's set up your assessment
            </h1>

            <p className="mt-1 text-xs font-medium text-gray-600">
              This information will help us organize your assessment.
            </p>

            {/* FORM */}
            <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5">

              {/* SCHOOL */}
              <div>
                <label className="mb-2 block text-xs font-semibold text-[#111827]">
                  School
                </label>

                <select
                  value={student.school || ""}
                  onChange={(e) =>
                    setStudent({
                      ...student,
                      school: e.target.value,
                    })
                  }
                  className="w-full rounded-full border border-gray-400 bg-transparent px-4 py-2 text-xs text-gray-900 outline-none focus:border-[#2F4385]"
                >
                  <option value="">Select your school</option>

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

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-xs font-semibold text-[#111827]">
                  Email Address
                </label>

                <input
                  type="email"
                  value={student.email || ""}
                  onChange={(e) =>
                    setStudent({
                      ...student,
                      email: e.target.value,
                    })
                  }
                  placeholder="Enter your email address"
                  className="w-full rounded-full border border-gray-400 bg-transparent px-4 py-2 text-xs text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#2F4385]"
                />
              </div>

            </div>

            {/* ERROR */}
            {error && (
              <p className="mt-4 text-xs font-medium text-red-600">
                {error}
              </p>
            )}

            {/* NEXT */}
            <div className="mt-7 flex justify-end">

              <button
                type="button"
                onClick={handleNext}
                className="rounded-full bg-[#50505A] px-8 py-2 text-xs font-bold text-white transition hover:bg-[#3f3f47]"
              >
                NEXT
              </button>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}