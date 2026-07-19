import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="flex">

        {/* Sidebar */}
        <aside className="w-72 bg-green-700 text-white min-h-screen p-8">

          <h1 className="text-3xl font-bold">
            Thinker
          </h1>

          <p className="text-green-100 mt-2">
            Administrator
          </p>

          <nav className="mt-10 space-y-4">

            <Link href="/admin/dashboard" className="block hover:text-green-200">
              📊 Dashboard
            </Link>

            <Link href="/admin/questions" className="block hover:text-green-200">
              ❓ Questions
            </Link>

            <Link href="/admin/courses" className="block hover:text-green-200">
              🎓 Courses
            </Link>

            <Link href="/admin/schools" className="block hover:text-green-200">
              🏫 Schools
            </Link>

            <Link href="/admin/criteria" className="block hover:text-green-200">
              ⚙ Recommendation Criteria
            </Link>

          </nav>

        </aside>

        {/* Page Content */}
        <section className="flex-1 p-10">
          {children}
        </section>

      </div>
    </main>
  );
}