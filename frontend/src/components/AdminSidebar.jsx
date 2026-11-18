import Link from "next/link";

export default function AdminSidebar() {
  return (

    <aside className="w-72 bg-green-700 text-white min-h-screen p-8">

      <h1 className="text-3xl font-bold">
        Thinker
      </h1>

      <p className="text-green-100 mt-2">
        Staff Portal
      </p>

      <nav className="mt-10 space-y-4">

        <Link
          href="/admin/dashboard"
          className="block hover:text-green-200"
        >
          📊 Dashboard
        </Link>

        <Link
          href="/admin/questions"
          className="block hover:text-green-200"
        >
          ❓ Questions
        </Link>

        <Link
          href="/admin/courses"
          className="block hover:text-green-200"
        >
          🎓 Courses
        </Link>

        <Link
          href="/admin/schools"
          className="block hover:text-green-200"
        >
          🏫 Schools
        </Link>

        <Link
          href="/admin/users"
          className="block hover:text-green-200"
        >
          👥 Staff Accounts
        </Link>

        <Link
          href="/admin/criteria"
          className="block hover:text-green-200"
        >
          ⚙ Recommendation Criteria
        </Link>

        <Link
          href="/admin/settings"
          className="block hover:text-green-200"
        >
          ⚙️ Settings
        </Link>

        <Link
          href="/admin/profile"
          className="block hover:text-green-200"
        >
          👤 My Profile
        </Link>

      </nav>

        <button
          type="button"
          onClick={() => {
            window.location.href = "/admin/login";
          }}
          className="block w-full text-left hover:text-green-200"
        >
          🚪 Logout
        </button>

    </aside>

  );
}