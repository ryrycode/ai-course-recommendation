"use client";

import Link from "next/link";
import { useState } from "react";
import QuestionCard from "@/components/QuestionCard";
import questions from "@/data/mockQuestions";

export default function AssessmentQuestions() {
    const [currentSection, setCurrentSection] = useState(1);

    const totalSections = 6;

        function nextSection() {

            if (currentSection < totalSections) {

                setCurrentSection(currentSection + 1);

            }

        }

    const filteredQuestions = questions.filter(
        (question) => question.section === currentSection
    );
  return (
    <main className="min-h-screen bg-gray-100 py-16">

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-10">

        {/* Progress Bar */}
        <div className="mb-10">

          <p className="font-semibold text-green-700">
            Section {currentSection} of 6
          </p>

          <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
            <div
              className="bg-green-700 h-3 rounded-full"
              style={{ width: "17%" }}
            ></div>
          </div>

        </div>

        <h1 className="text-4xl font-bold text-green-700">
          Assessment Questionnaire
        </h1>

        <p className="text-gray-600 mt-3">
          Please answer each statement honestly.
        </p>

        {/* Skill Category */}
        <div className="mt-10 border-l-4 border-green-700 bg-green-50 p-5 rounded-lg">

          <h2 className="text-2xl font-bold text-green-700">
            {filteredQuestions[0]?.title}
          </h2>

          <p className="text-gray-600 mt-2">
            This section evaluates your ability to analyze situations,
            solve problems, and apply logical reasoning.
          </p>

        </div>

        {filteredQuestions.map((item) => (
            <QuestionCard
                key={item.id}
                number={item.id}
                total={30}
                name={`q${item.id}`}
                question={item.question}
            />
        ))}

        {/* Navigation */}
        <div className="flex justify-between mt-10">

          <button className="px-8 py-3 border rounded-lg hover:bg-gray-100">
            Previous
          </button>

          <Link href="/results">
            <button
                onClick={nextSection}
                className="px-8 py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg"
            >
                Next
            </button>
          </Link>

        </div>

      </div>

    </main>
  );
}