"use client";

import { useContext } from "react";
import { StudentContext } from "@/context/StudentContext";
import { useRouter } from "next/navigation";

import Link from "next/link";
export default function StudentPage() {

  const { student, setStudent } = useContext(StudentContext);
  const router = useRouter();
    
  return (
    <main className="min-h-screen bg-gray-100 py-16">

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-10">

        <h1 className="text-4xl font-bold text-green-700">
          Student Information
        </h1>

        <p className="text-gray-600 mt-2">
          Please provide your information before taking the assessment.
        </p>

        <form
          className="mt-10 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();

            router.push("/assessment");
          }}
        >

          <div>
            <label className="block font-semibold mb-2">
              Full Name
            </label>

            <input
              type="text"
              className="w-full border rounded-lg p-3"
              placeholder="Enter your full name"
              value={student.fullName}
              onChange={(e) =>
                setStudent({
                  ...student,
                  fullName: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Email Address
            </label>

            <input
              type="email"
              className="w-full border rounded-lg p-3"
              placeholder="Enter your email"
              value={student.email}
              onChange={(e) =>
                setStudent({
                  ...student,
                  email: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Senior High School
            </label>

            <input
              type="text"
              className="w-full border rounded-lg p-3"
              placeholder="Enter your school"
              value={student.school}
              onChange={(e) =>
                setStudent({
                  ...student,
                  school: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Strand
            </label>

            <select
              className="w-full border rounded-lg p-3"
              value={student.strand}
              onChange={(e) =>
                setStudent({
                  ...student,
                  strand: e.target.value,
                })
              }
            >
              <option value="">Choose Strand</option>
              <option value="STEM">STEM</option>
              <option value="ABM">ABM</option>
              <option value="HUMSS">HUMSS</option>
              <option value="GAS">GAS</option>
              <option value="TVL">TVL</option>
              <option value="Arts & Design">Arts & Design</option>
            </select>
          </div>

          <Link href="/assessment">

            <button
              type="button"
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold"
            >
              Continue
            </button>

          </Link>

        </form>

      </div>

    </main>
  );
}