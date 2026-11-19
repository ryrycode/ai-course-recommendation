"use client";

import { createContext, useState, useEffect, useCallback, useMemo } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [student, setStudent] = useState({
    studentId: null,
    fullName: "",
    email: "",
    school: "",
    gradeLevel: "",
    strand: "",
    preferredCareer: "",
    interests: [],
    otherInterest: "",
  });
  const [attemptId, setAttemptId] = useState(null);

  // Load from sessionStorage on mount
  useEffect(() => {
    try {
      // Clear any stale data on fresh load
      sessionStorage.removeItem("student");
      sessionStorage.removeItem("attemptId");
    } catch (e) {
      console.warn("Failed to clear sessionStorage:", e);
    }
  }, []);

  // Persist to sessionStorage on changes
  const updateStudent = useCallback((updater) => {
    setStudent((prev) => {
      const next = typeof updater === "function" ? updater(prev) : { ...prev, ...updater };
      try {
        sessionStorage.setItem("student", JSON.stringify(next));
      } catch (e) {
        console.warn("Failed to save student data:", e);
      }
      return next;
    });
  }, []);

  const updateAttemptId = useCallback((id) => {
    setAttemptId(id);
    try {
      if (id) {
        sessionStorage.setItem("attemptId", id.toString());
      } else {
        sessionStorage.removeItem("attemptId");
      }
    } catch (e) {
      console.warn("Failed to save attemptId:", e);
    }
  }, []);

  const clearData = useCallback(() => {
    setStudent({
      studentId: null,
      fullName: "",
      email: "",
      school: "",
      gradeLevel: "",
      strand: "",
      preferredCareer: "",
      interests: [],
      otherInterest: "",
    });
    setAttemptId(null);
    sessionStorage.removeItem("student");
    sessionStorage.removeItem("attemptId");
  }, []);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    student,
    setStudent: updateStudent,
    attemptId,
    setAttemptId: updateAttemptId,
    clearData,
  }), [student, attemptId, updateStudent, updateAttemptId, clearData]);

  return (
    <StudentContext.Provider value={contextValue}>
      {children}
    </StudentContext.Provider>
  );
}