export default function Dashboard() {
  return (
    <>

      <h1 className="text-4xl font-bold text-green-700">
        Dashboard
      </h1>

      <p className="text-gray-500 mt-2">
        Welcome back, Administrator.
      </p>

      {/* Statistics */}

      <div className="grid grid-cols-4 gap-6 mt-10">

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">Students</p>

          <h2 className="text-4xl font-bold text-green-700 mt-3">
            152
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">Questions</p>

          <h2 className="text-4xl font-bold text-green-700 mt-3">
            30
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">Schools</p>

          <h2 className="text-4xl font-bold text-green-700 mt-3">
            5
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">Courses</p>

          <h2 className="text-4xl font-bold text-green-700 mt-3">
            18
          </h2>
        </div>

      </div>

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