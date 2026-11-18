"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import QuestionCard from "@/components/QuestionCard";
import questions from "@/data/mockAdminQuestions";
import ThinkerLogo from "@/components/ThinkerLogo";

export default function AssessmentQuestions() {
  const router = useRouter();
  const [currentSection, setCurrentSection] = useState(1);

  const totalSections = 3;

  const filteredQuestions = questions.filter(function (question) {
    return question.section === currentSection;
  });

  const currentTitle =
    filteredQuestions.length > 0
      ? filteredQuestions[0].title
      : "Assessment";

  function handleNext() {
    if (currentSection < totalSections) {
      setCurrentSection(currentSection + 1);
    } else {
      router.push("/results");
    }
  }

  function handlePrevious() {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    } else {
      router.push("/student");
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#cdffd8] to-[#94b9ff] px-8 py-8">

      <div className="mb-8">
        <ThinkerLogo />
      </div>

      <div className="mx-auto flex max-w-7xl gap-12">

        {/* LEFT STEPPER */}
        <div className="w-64 shrink-0 pt-8">

          <h2 className="mb-6 text-2xl font-bold text-[#111827]">
            Step 2 of 2
          </h2>

          {/* STEP 1 */}
          <div className="relative flex items-center">

            <div className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2F4385] text-lg font-bold text-white">
              ✓
            </div>

            <p className="ml-5 text-sm font-semibold text-[#111827]">
              Assessment Information
            </p>

            <div className="absolute left-[21px] top-11 h-16 w-0.5 bg-[#2F4385]"></div>

          </div>

          {/* STEP 2 */}
          <div className="mt-16 flex items-center">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2F4385] text-lg font-bold text-white">
              2
            </div>

            <p className="ml-5 text-sm font-semibold text-[#111827]">
              Assessment
            </p>

          </div>

        </div>

        {/* RIGHT CARD */}
        <div className="min-w-0 flex-1">

          <div className="rounded-2xl bg-[#fffdf2] px-7 py-8 shadow-sm md:px-8 md:py-9">

            <h1 className="text-3xl font-bold text-[#111827]">
              Assessment Questionnaire
            </h1>

            <p className="mt-2 text-sm font-medium text-[#111827]">
              Please answer each statement honestly based on your own
              experiences, interests, and preferences.
            </p>

            {/* PROGRESS */}
            <div className="mt-8">

              <div className="flex items-center justify-between">

                <p className="text-sm font-semibold text-[#2F4385]">
                  Section {currentSection} of {totalSections}
                </p>

                <p className="text-xs font-medium text-gray-500">
                  {currentSection === 1 && "33%"}
                  {currentSection === 2 && "67%"}
                  {currentSection === 3 && "100%"}
                </p>

              </div>

              <div className="mt-2 h-2 w-full rounded-full bg-gray-200">

                <div
                  className={
                    currentSection === 1
                      ? "h-2 w-1/3 rounded-full bg-[#2F4385]"
                      : currentSection === 2
                      ? "h-2 w-2/3 rounded-full bg-[#2F4385]"
                      : "h-2 w-full rounded-full bg-[#2F4385]"
                  }
                ></div>

              </div>

            </div>

            {/* SECTION HEADER */}
            <div className="mt-8 border-l-4 border-[#2F4385] bg-[#eef2ff] p-5">

              <h2 className="text-xl font-bold text-[#2F4385]">
                {currentTitle}
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                This section contains questions related to your abilities,
                interests, and preferences.
              </p>

            </div>

            {/* QUESTIONS */}
            <div className="mt-6">

              {filteredQuestions.map(function (item) {
                return (
                  <QuestionCard
                    key={item.id}
                    number={item.id}
                    total={questions.length}
                    name={"q" + item.id}
                    question={item.question}
                  />
                );
              })}

            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex items-center justify-between">

              <button
                type="button"
                onClick={handlePrevious}
                className="rounded-full border border-gray-400 px-8 py-2.5 text-sm font-bold text-gray-700 hover:bg-gray-100"
              >
                BACK
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="rounded-full bg-[#50505A] px-8 py-2.5 text-sm font-bold text-white hover:bg-[#3f3f47]"
              >
                {currentSection === totalSections
                  ? "SUBMIT ASSESSMENT"
                  : "NEXT"}
              </button>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}