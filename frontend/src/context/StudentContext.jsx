"use client";

import { createContext, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [student, setStudent] = useState({
    fullName: "",
    email: "",
    school: "",
    strand: "",
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