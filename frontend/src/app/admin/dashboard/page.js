import Link from "next/link";
import AdminStatCard from "@/components/AdminStatCard";

export default function Dashboard() {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-green-700">
          Thinker Platform Administration
        </h1>

        <p className="text-gray-600 mt-2">
          Manage schools, staff accounts, assessment content, and
          recommendation settings.
        </p>
      </div>

      {/* Platform Statistics */}
      <div className="grid grid-cols-4 gap-6 mt-10">

        <AdminStatCard
          title="Schools"
          value="5"
          icon="🏫"
        />

        <AdminStatCard
          title="Staff Accounts"
          value="12"
          icon="👥"
        />

        <AdminStatCard
          title="Questions"
          value="30"
          icon="📋"
        />

        <AdminStatCard
          title="Courses"
          value="18"
          icon="🎓"
        />

      </div>

      {/* Quick Actions */}
      <div className="mt-10">

        <h2 className="text-2xl font-bold text-green-700">
          Quick Actions
        </h2>

        <div className="grid grid-cols-2 gap-6 mt-6">

          <Link
            href="/admin/schools"
            className="bg-green-700 hover:bg-green-800 text-white p-5 rounded-xl text-center"
          >
            Manage Schools
          </Link>

          <Link
            href="/admin/users"
            className="bg-green-700 hover:bg-green-800 text-white p-5 rounded-xl text-center"
          >
            Manage Staff Accounts
          </Link>

          <Link
            href="/admin/questions"
            className="bg-green-700 hover:bg-green-800 text-white p-5 rounded-xl text-center"
          >
            Manage Questions
          </Link>

          <Link
            href="/admin/courses"
            className="bg-green-700 hover:bg-green-800 text-white p-5 rounded-xl text-center"
          >
            Manage Courses
          </Link>

          <Link
            href="/admin/criteria"
            className="bg-green-700 hover:bg-green-800 text-white p-5 rounded-xl text-center"
          >
            Recommendation Criteria
          </Link>

        </div>

      </div>
    </>
  );
}