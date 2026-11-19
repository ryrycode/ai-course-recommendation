"use client";

import { useContext, useState, useEffect, useCallback } from "react";
import { StudentContext } from "@/context/StudentContext";
import { useRouter } from "next/navigation";
import { getAssessmentQuestions, createAttempt, submitResponses, completeAttempt } from "@/services/api";
import ThinkerLogo from "@/components/ThinkerLogo";

const ANSWER_LABELS = [
  { value: 1, label: "Strongly Disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly Agree" },
];

// Step-by-step loading animation
function AILoadingSequence({ onComplete }) {
  const [step, setStep] = useState(0);

  const steps = [
    { text: "Assessment finished", delay: 800 },
    { text: "Finding fitted course", delay: 1500 },
    { text: "Result...", delay: 1000 },
    { text: "Generated...", delay: 800 },
  ];

  useEffect(() => {
    let currentStep = 0;
    let timeoutId;

    const runSequence = () => {
      if (currentStep < steps.length) {
        setStep(currentStep);
        timeoutId = setTimeout(() => {
          currentStep++;
          runSequence();
        }, steps[currentStep].delay);
      } else {
        onComplete();
      }
    };

    runSequence();
    return () => clearTimeout(timeoutId);
  }, [onComplete]);

  return (
    <main className="min-h-screen bg-linear-to-r from-[#cdffd8] to-[#94b9ff] flex items-center justify-center px-6">
      <div className="text-center">
        <ThinkerLogo className="mx-auto" />
        <div className="mt-12 flex flex-col items-center gap-6">
          {/* Animated brain/icon */}
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 border-4 border-[#283d7a]/20 rounded-full" />
            <div className="absolute inset-0 border-4 border-[#283d7a] border-t-transparent rounded-full animate-spin" />
            <div className="absolute inset-4 border-4 border-[#00a8e8]/50 border-r-transparent rounded-full animate-spin reverse" />
            <div className="absolute inset-8 border-4 border-[#cdffd8]/50 border-b-transparent rounded-full animate-spin" />
            <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-[#283d7a] to-[#00a8e8] rounded-full flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>

          {/* Step text with typewriter effect */}
          <div className="min-h-[3rem] w-full max-w-md">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`text-center transition-all duration-300 ${
                  i < step ? "text-gray-500" : i === step ? "text-[#111827] font-semibold" : "invisible"
                }`}
                style={{ minHeight: "1.5rem" }}
              >
                {i <= step && (
                  <span className={i === step ? "relative" : ""}>
                    {s.text}
                    {i === step && <span className="absolute -right-3 animate-blink">|</span>}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Progress dots */}
          <div className="flex gap-2 justify-center">
            {steps.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i < step ? "bg-[#283d7a]" : i === step ? "bg-[#00a8e8] animate-pulse" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink { animation: blink 1s infinite; }
      `}</style>
    </main>
  );
}

// Results grouped by school
function ResultsDisplay({ recommendations, onClose, onEmailSubmit }) {
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [emailStatus, setEmailStatus] = useState(""); // "success" | "error"

  // Group recommendations by school
  const schoolsMap = new Map();
  recommendations.forEach((rec) => {
    const key = rec.school_id ?? `unknown-${rec.program_id}`;
    if (!schoolsMap.has(key)) {
      schoolsMap.set(key, {
        school_id: rec.school_id,
        school_name: rec.school_name,
        institution_type: rec.institution_type,
        address: rec.address,
        website: rec.website,
        programs: [],
      });
    }
    schoolsMap.get(key).programs.push(rec);
  });

  const schools = Array.from(schoolsMap.values());

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;

    setIsSending(true);
    setEmailStatus("");
    try {
      await onEmailSubmit(email.trim());
      setEmailStatus("success");
    } catch (err) {
      setEmailStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-xl">
        {/* Header */}
        <div className="relative p-6 border-b border-gray-200 bg-gradient-to-r from-[#283d7a]/5 to-[#00a8e8]/5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#111827]">Your Personalized Recommendations</h2>
              <p className="mt-1 text-sm text-gray-500">Grouped by schools offering your matched courses</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Schools with Programs */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          {schools.map((school, sIdx) => (
            <div
              key={school.school_id ?? `school-${sIdx}`}
              className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* School Header */}
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#283d7a] to-[#00a8e8] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#111827]">{school.school_name}</h3>
                    <p className="text-sm text-gray-500">{school.address}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  school.institution_type === 'Public'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-purple-100 text-purple-700'
                }`}>
                  {school.institution_type}
                </span>
              </div>

              {/* Programs List */}
              <div className="divide-y divide-gray-100">
                {school.programs.map((program, pIdx) => (
                  <div
                    key={program.program_id ? `${school.school_id ?? `school-${sIdx}`}-${program.program_id}` : `school-${sIdx}-program-${pIdx}`}
                    className={`px-6 py-4 flex items-center justify-between gap-4 transition-colors ${
                      pIdx === 0 ? "bg-gradient-to-r from-[#283d7a]/5 to-[#00a8e8]/5" : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        {pIdx === 0 && (
                          <span className="px-2 py-0.5 bg-[#283d7a] text-white text-xs font-bold rounded-full">
                            TOP MATCH
                          </span>
                        )}
                        <span className="text-lg font-semibold text-[#111827] truncate">{program.program_name}</span>
                      </div>
                      <div className="mt-2 flex items-center gap-4 flex-wrap text-sm">
                        <div className="flex items-center gap-1 text-gray-600">
                          <span className="font-semibold text-[#283d7a]">{program.compatibility_score}%</span>
                          <span>Match</span>
                        </div>
                        <div className="flex-1 min-w-[100px] h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#283d7a] to-[#00a8e8] rounded-full transition-all duration-500"
                            style={{ width: `${program.compatibility_score}%` }}
                          />
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-500 italic">"{program.explanation}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Email Input Section */}
        <div className="border-t border-gray-200 p-6 bg-gray-50/50 rounded-b-2xl">
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-[#111827] mb-4 text-center">Receive Results via Email</h3>
            <form onSubmit={handleEmailSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-full border border-gray-300 text-sm focus:outline-none focus:border-[#283d7a] pr-12"
                  disabled={isSending || emailStatus === "success"}
                  autoComplete="email"
                />
                {isSending && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 border-2 border-[#283d7a] border-t-transparent rounded-full animate-spin" />
                )}
                {emailStatus === "success" && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">✓</span>
                )}
              </div>
              <button
                type="submit"
                disabled={isSending || !email.trim() || !email.includes("@") || emailStatus === "success"}
                className={`w-full rounded-full py-3 text-sm font-bold text-white transition disabled:opacity-50 disabled:cursor-not-allowed ${
                  isSending ? 'bg-gray-400' : emailStatus === 'success' ? 'bg-green-500' : 'bg-[#283d7a] hover:bg-[#1f315f]'
                }`}>
                {isSending ? "Sending..." : emailStatus === "success" ? "Sent!" : "SEND RESULTS"}
              </button>
              {emailStatus === "error" && (
                <p className="text-center text-sm text-red-600">Failed to send. Please try again.</p>
              )}
              <p className="text-center text-xs text-gray-500">
                We'll send your detailed assessment results and course recommendations.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AssessmentQuestionsPage() {
  const { student, attemptId, setAttemptId } = useContext(StudentContext);
  const router = useRouter();

  const [categories, setCategories] = useState([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [debounceTimer, setDebounceTimer] = useState(null);

  const currentCategory = categories[currentCategoryIndex];
  const currentQuestions = currentCategory?.questions || [];
  const currentQuestion = currentQuestions[currentQuestionIndex];
  const totalQuestionsInCategory = currentQuestions.length;
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : null;
  const categoryProgress = totalQuestionsInCategory > 0
    ? ((currentQuestionIndex + 1) / totalQuestionsInCategory) * 100
    : 0;
  const overallProgress = categories.length > 0
    ? ((currentCategoryIndex + (currentQuestionIndex + 1) / totalQuestionsInCategory) / categories.length) * 100
    : 0;
  const isLastQuestionInCategory = currentQuestionIndex === totalQuestionsInCategory - 1;
  const isLastCategory = currentCategoryIndex === categories.length - 1;

  // Fetch questions and create attempt on mount
  useEffect(() => {
    if (!student.studentId) {
      router.push("/student");
      return;
    }

    const initAssessment = async () => {
      setIsLoading(true);
      try {
        const questionsData = await getAssessmentQuestions();
        setCategories(questionsData.categories);

        const attempt = await createAttempt(student.studentId);
        setAttemptId(attempt.id);
      } catch (error) {
        setErrorMessage(error.message || "Failed to load assessment. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    initAssessment();
  }, [student.studentId, router, setAttemptId]);

  // Debounced auto-save
  const saveAnswer = useCallback(
    async (questionId, answerOptionId) => {
      if (!attemptId) return;

      if (debounceTimer) clearTimeout(debounceTimer);

      const timer = setTimeout(async () => {
        try {
          await submitResponses(attemptId, [
            { question_id: questionId, answer_option_id: answerOptionId },
          ]);
        } catch (error) {
          console.warn("Auto-save failed:", error.message);
        }
      }, 500);

      setDebounceTimer(timer);
    },
    [attemptId, debounceTimer]
  );

  const handleAnswer = (answerOptionId) => {
    if (!currentQuestion) return;

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answerOptionId,
    }));

    saveAnswer(currentQuestion.id, answerOptionId);
  };

  const handleNext = () => {
    if (!currentAnswer) return;

    if (isLastQuestionInCategory) {
      if (isLastCategory) {
        handleSubmit();
      } else {
        setCurrentCategoryIndex((prev) => prev + 1);
        setCurrentQuestionIndex(0);
      }
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex === 0) {
      if (currentCategoryIndex > 0) {
        setCurrentCategoryIndex((prev) => prev - 1);
        setCurrentQuestionIndex(categories[currentCategoryIndex - 1]?.questions.length - 1 || 0);
      }
    } else {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    if (!currentAnswer) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const responses = Object.entries(answers).map(([questionId, answerOptionId]) => ({
        question_id: Number(questionId),
        answer_option_id: answerOptionId,
      }));

      await submitResponses(attemptId, responses);
      await completeAttempt(attemptId);

      setIsSubmitting(false);
      setIsProcessing(true);

      // Poll for results
      const pollResults = async () => {
        const { getResults } = await import("@/services/api");
        let attempts = 0;
        const maxAttempts = 30;

        while (attempts < maxAttempts) {
          try {
            const results = await getResults(attemptId);
            if (results.recommended_programs && results.recommended_programs.length > 0) {
              setRecommendations(results.recommended_programs);
              setIsProcessing(false);
              setShowResults(true);
              return;
            }
          } catch (err) {
            // Results not ready yet
          }
          await new Promise((resolve) => setTimeout(resolve, 1000));
          attempts++;
        }
        setIsProcessing(false);
        setErrorMessage("Results are taking longer than expected. Please check the results page.");
        router.push("/results");
      };

      pollResults();
    } catch (error) {
      setIsSubmitting(false);
      setErrorMessage(error.message || "Failed to submit assessment. Please try again.");
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }, [debounceTimer]);

  // Loading state
  if (isLoading) {
    return (
      <main className="min-h-screen bg-linear-to-r from-[#cdffd8] to-[#94b9ff] flex items-center justify-center">
        <div className="text-center">
          <ThinkerLogo />
          <p className="mt-4 text-lg text-gray-600">Loading assessment...</p>
        </div>
      </main>
    );
  }

  // Processing state with step-by-step animation
  if (isProcessing) {
    return <AILoadingSequence onComplete={() => {}} />;
  }

  // Error state
  if (errorMessage && !currentQuestion) {
    return (
      <main className="min-h-screen bg-linear-to-r from-[#cdffd8] to-[#94b9ff] flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-sm text-center">
          <ThinkerLogo className="mx-auto" />
          <p className="mt-4 text-red-600">{errorMessage}</p>
          <button
            onClick={() => router.push("/student")}
            className="mt-6 rounded-full bg-[#50505A] px-9 py-3 text-sm font-bold text-white transition hover:bg-[#3f3f47]"
          >
            GO BACK
          </button>
        </div>
      </main>
    );
  }

  if (!currentQuestion) {
    return null;
  }

  return (
    <main className="min-h-screen bg-linear-to-r from-[#cdffd8] to-[#94b9ff] flex items-center justify-center px-6 py-8">
      <div className="w-full max-w-3xl">

        {/* Logo */}
        <div className="mb-4">
          <ThinkerLogo />
        </div>

        {/* Assessment Panel */}
        <section className="relative bg-[#fffbed] rounded-2xl min-h-[550px] overflow-hidden shadow-sm flex flex-col">

          {/* Category Header */}
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#283d7a] uppercase tracking-wide">
                Category {currentCategoryIndex + 1} of {categories.length}
              </span>
              <span className="text-xs font-semibold text-[#00a8e8] uppercase tracking-wide">
                {currentCategory?.name} Skills
              </span>
            </div>
            {/* Overall Progress Bar */}
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#283d7a] to-[#00a8e8] rounded-full transition-all duration-300"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col items-center px-6 pt-6 pb-20">

            {/* Category Progress */}
            <div className="w-full max-w-md mb-4">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                <span>Question {currentQuestionIndex + 1} of {totalQuestionsInCategory}</span>
                <span>{Math.round(categoryProgress)}% complete</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#cdffd8] rounded-full transition-all duration-300"
                  style={{ width: `${categoryProgress}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="flex items-center justify-center flex-1 w-full">
              <p className="max-w-xl text-center text-xl md:text-2xl font-semibold text-[#111827] leading-relaxed">
                {currentQuestion.question_text}
              </p>
            </div>

            {/* Answer Choices */}
            <div className="w-full max-w-md space-y-2 mb-8">
              {ANSWER_LABELS.map((choice) => {
                const selected = currentAnswer === choice.value;

                return (
                  <button
                    key={choice.value}
                    type="button"
                    onClick={() => handleAnswer(choice.value)}
                    className={`w-full h-10 rounded-full border text-sm font-semibold transition ${
                      selected
                        ? "bg-[#283d7a] text-white border-[#283d7a]"
                        : "bg-transparent text-[#111827] border-gray-400 hover:bg-white"
                    }`}
                  >
                    {choice.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation - Centered Bottom */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentCategoryIndex === 0 && currentQuestionIndex === 0}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition ${
                  currentCategoryIndex === 0 && currentQuestionIndex === 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-white text-[#283d7a] border border-gray-400 hover:bg-gray-50"
                }`}
                aria-label="Previous question"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={!currentAnswer || isSubmitting}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition shadow-lg ${
                  !currentAnswer || isSubmitting
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#283d7a] text-white hover:bg-[#1f315f]"
                }`}
                aria-label={isLastQuestionInCategory && isLastCategory ? "Submit assessment" : "Next question"}
              >
                {isLastQuestionInCategory && isLastCategory ? "✓" : "›"}
              </button>

              
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 px-4 py-2 bg-red-100 text-red-700 text-sm rounded-full">
              {errorMessage}
            </div>
          )}
        </section>
      </div>

      {/* Results Display */}
      {showResults && (
        <ResultsDisplay
          recommendations={recommendations}
          onClose={() => {
            setShowResults(false);
            router.push("/results");
          }}
          onEmailSubmit={async (email) => {
            const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
            const response = await fetch(`${API_BASE_URL}/assessment/attempts/${attemptId}/send-results`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email }),
            });
            if (!response.ok) throw new Error("Failed to send email");
          }}
        />
      )}
    </main>
  );
}