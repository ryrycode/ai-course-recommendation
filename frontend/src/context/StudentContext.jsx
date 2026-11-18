"use client";

import { createContext, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [student, setStudent] = useState({
    // Step 1
    fullName: "",
    email: "",
    school: "",
    strand: "",
    gradeLevel: "",

    // Step 2
    strongestSubject: "",
    challengingSubject: "",
    academicPerformance: "",
    academicActivity: "",
  });

  return (
    <StudentContext.Provider
      value={{
        student,
        setStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}