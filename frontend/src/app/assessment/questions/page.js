"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import mockAdminQuestions from "@/data/mockAdminQuestions";
import ThinkerLogo from "@/components/ThinkerLogo";

const answerChoices = [
  "Strongly Agree",
  "Agree",
  "Neutral",
  "Disagree",
  "Strongly Disagree",
];

export default function AssessmentQuestionsPage() {
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const question = mockAdminQuestions[currentQuestion];
  const totalQuestions = mockAdminQuestions.length;
  const currentAnswer = answers[question.id];

  const progress =
    ((currentQuestion + 1) / totalQuestions) * 100;

  function handleAnswer(answer) {
    setAnswers((previous) => ({
      ...previous,
      [question.id]: answer,
    }));
  }

  function handleNext() {
    if (!currentAnswer) return;

    if (currentQuestion === totalQuestions - 1) {
      console.log("Assessment answers:", answers);
      router.push("/results");
      return;
    }

    setCurrentQuestion((previous) => previous + 1);
  }

  return (
    <main className="min-h-screen bg-linear-to-r from-[#cdffd8] to-[#94b9ff] flex items-center justify-center px-6 py-8">
      <div className="w-full max-w-5xl">

        {/* Logo */}
        <div className="mb-4">
          <ThinkerLogo />
        </div>

        {/* Assessment Panel */}
        <section className="relative bg-[#fffbed] rounded-2xl min-h-[500px] overflow-hidden shadow-sm flex flex-col">

          {/* Content */}
          <div className="flex-1 flex flex-col items-center px-10 pt-8 pb-20">

            {/* Category */}
            <h1 className="text-4xl font-bold text-[#111827] text-center">
              {question.category} Skills
            </h1>

            {/* Question Counter */}
            <p className="mt-4 text-sm text-gray-500">
              Question {currentQuestion + 1} of {totalQuestions}
            </p>

            {/* Question */}
            <div className="flex items-center justify-center flex-1 w-full">
              <p className="max-w-2xl text-center text-xl md:text-2xl font-semibold text-[#111827] leading-relaxed">
                {question.question}
              </p>
            </div>

            {/* Answer Choices */}
            <div className="w-full max-w-md space-y-2">
              {answerChoices.map((choice) => {
                const selected = currentAnswer === choice;

                return (
                  <button
                    key={choice}
                    type="button"
                    onClick={() => handleAnswer(choice)}
                    className={`w-full h-9 rounded-full border text-sm font-semibold transition ${
                      selected
                        ? "bg-[#283d7a] text-white border-[#283d7a]"
                        : "bg-transparent text-[#111827] border-gray-400 hover:bg-white"
                    }`}
                  >
                    {choice}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={!currentAnswer}
            className={`absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-2xl transition ${
              currentAnswer
                ? "bg-[#283d7a] text-white hover:bg-[#1f315f]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {currentQuestion === totalQuestions - 1 ? "✓" : "›"}
          </button>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-3 bg-transparent">
            <div
              className="h-full bg-[#00a8e8] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

        </section>
      </div>
    </main>
  );
}