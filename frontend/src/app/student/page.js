"use client";

import { useContext, useState } from "react";
import { StudentContext } from "@/context/StudentContext";
import { useRouter } from "next/navigation";
import ThinkerLogo from "@/components/ThinkerLogo";

export default function StudentPage() {
  const { student, setStudent } = useContext(StudentContext);
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      router.push("/assessment");
    }
  };

  const steps = [
    {
      number: 1,
      title: "Basic Information",
    },
    {
      number: 2,
      title: "Academic Background",
    },
    {
      number: 3,
      title: "Interest & Strength",
    },
  ];

  return (
    <main className="relative min-h-screen bg-linear-to-r from-[#cdffd8] to-[#94b9ff] px-8 py-10">

      {/* LOGO */}
      <div className="absolute left-29 top-5">
        <ThinkerLogo />
      </div>

      {/* MAIN CONTENT */}
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 lg:grid-cols-[260px_1fr]">

        {/* LEFT SIDE - STEPS */}
        <div className="self-center">

          {/* Step Counter */}
          <h2 className="text-2xl font-bold text-[#111827]">
            Step {currentStep} of 3
          </h2>

          {/* Steps */}
          <div className="relative mt-7">

            {/* Vertical Connecting Line */}
            <div className="absolute left-[22px] top-[22px] bottom-[22px] w-[2px] bg-gray-400" />

            {/* Step Items */}
            <div className="relative z-10 space-y-3">

              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex min-h-[56px] items-center"
                >

                  {/* Circle */}
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg font-semibold transition-all duration-300 ${
                      currentStep === step.number
                        ? "bg-[#2F4385] text-white"
                        : "bg-gray-500 text-white"
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Step Name */}
                  <span
                    className={`ml-5 text-sm font-medium transition-all duration-300 ${
                      currentStep === step.number
                        ? "text-[#111827]"
                        : "text-[#374151]"
                    }`}
                  >
                    {step.title}
                  </span>

                </div>
              ))}

            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM CARD */}
        <div className="w-full max-w-3xl justify-self-center rounded-2xl bg-[#fffdf2] px-7 py-8 shadow-sm md:px-8 md:py-9">

          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#111827] md:text-4xl">
            {currentStep === 1 && "Let's set up your profile"}
            {currentStep === 2 &&
              "Tell us about your academic background"}
            {currentStep === 3 &&
              "Let's discover your interests"}
          </h2>

          {/* Description */}
          <p className="mt-2 text-sm font-medium text-[#111827]">
            {currentStep === 1 &&
              "This will help us personalize your assessment and recommendations"}

            {currentStep === 2 &&
              "This information will help us understand your academic background"}

            {currentStep === 3 &&
              "This will help us identify your interests and strengths"}
          </p>

          {/* STEP 1 */}
          {currentStep === 1 && (
            <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">

              {/* Full Name */}
              <div>
                <label className="mb-1 block text-sm font-semibold text-[#111827]">
                  Full Name
                </label>

                <input
                  type="text"
                  className="w-full rounded-full border border-gray-400 bg-transparent px-4 py-2 text-sm outline-none transition focus:border-[#2F4385]"
                  placeholder="Enter your first name"
                  value={student.fullName}
                  onChange={(e) =>
                    setStudent({
                      ...student,
                      fullName: e.target.value,
                    })
                  }
                />
              </div>

              {/* Grade Level */}
              <div>
                <label className="mb-1 block text-sm font-semibold text-[#111827]">
                  Grade Level
                </label>

                <select
                  className="w-full rounded-full border border-gray-400 bg-transparent px-4 py-2 text-sm outline-none transition focus:border-[#2F4385]"
                >
                  <option value="">Select your grade level</option>
                  <option value="Grade 11">Grade 11</option>
                  <option value="Grade 12">Grade 12</option>
                </select>
              </div>

              {/* Current School */}
              <div>
                <label className="mb-1 block text-sm font-semibold text-[#111827]">
                  Current School
                </label>

                <input
                  type="text"
                  className="w-full rounded-full border border-gray-400 bg-transparent px-4 py-2 text-sm outline-none transition focus:border-[#2F4385]"
                  placeholder="Enter your current school"
                  value={student.school}
                  onChange={(e) =>
                    setStudent({
                      ...student,
                      school: e.target.value,
                    })
                  }
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-1 block text-sm font-semibold text-[#111827]">
                  Email Address
                </label>

                <input
                  type="email"
                  className="w-full rounded-full border border-gray-400 bg-transparent px-4 py-2 text-sm outline-none transition focus:border-[#2F4385]"
                  placeholder="Enter your email address"
                  value={student.email}
                  onChange={(e) =>
                    setStudent({
                      ...student,
                      email: e.target.value,
                    })
                  }
                />
              </div>

              {/* Preferred Career */}
              <div>
                <label className="mb-1 block text-sm font-semibold text-[#111827]">
                  Preferred Career
                </label>

                <select
                  className="w-full rounded-full border border-gray-400 bg-transparent px-4 py-2 text-sm outline-none transition focus:border-[#2F4385]"
                >
                  <option value="">
                    Select your preferred career
                  </option>
                  <option value="Technology">Technology</option>
                  <option value="Business">Business</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Arts">Arts & Design</option>
                </select>
              </div>

              {/* Grade Entering */}
              <div>
                <label className="mb-1 block text-sm font-semibold text-[#111827]">
                  What grade level are you entering?
                </label>

                <select
                  className="w-full rounded-full border border-gray-400 bg-transparent px-4 py-2 text-sm outline-none transition focus:border-[#2F4385]"
                >
                  <option value="">Select grade level</option>
                  <option value="First Year College">
                    First Year College
                  </option>
                </select>
              </div>

            </div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <div className="mt-10 min-h-[250px]">
              <p className="text-gray-600">
                Academic background questions will be placed here.
              </p>
            </div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <div className="mt-10 min-h-[250px]">
              <p className="text-gray-600">
                Interest and strength questions will be placed here.
              </p>
            </div>
          )}

          {/* NEXT BUTTON */}
          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={nextStep}
              className="rounded-full bg-[#50505A] px-8 py-2 text-sm font-bold text-white transition hover:bg-[#3f3f47]"
            >
              {currentStep === 3 ? "FINISH" : "NEXT"}
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}