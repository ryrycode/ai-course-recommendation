import AdminStatCard from "@/components/AdminStatCard";

export default function Dashboard() {
  return (
    <>

      <h1 className="text-4xl font-bold text-green-700">
        Dashboard
      </h1>

      <p className="text-gray-500 mt-2">
        Welcome back, Administrator.
      </p>

      {/* Statistics Cards */}

      <div className="grid grid-cols-4 gap-6 mt-10">

        <AdminStatCard
          title="Students"
          value="152"
          icon="👨‍🎓"
        />

        <AdminStatCard
          title="Questions"
          value="30"
          icon="📋"
        />

        <AdminStatCard
          title="Schools"
          value="5"
          icon="🏫"
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

          <button className="bg-green-700 hover:bg-green-800 text-white p-5 rounded-xl">
            Manage Questions
          </button>

          <button className="bg-green-700 hover:bg-green-800 text-white p-5 rounded-xl">
            Manage Courses
          </button>

          <button className="bg-green-700 hover:bg-green-800 text-white p-5 rounded-xl">
            Manage Schools
          </button>

          <button className="bg-green-700 hover:bg-green-800 text-white p-5 rounded-xl">
            Recommendation Criteria
          </button>

        </div>

      </div>

    </>
  );
}