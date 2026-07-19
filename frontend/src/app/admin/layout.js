import Link from "next/link";
import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="flex">

        <AdminSidebar />

        {/* Page Content */}
        <section className="flex-1 p-10">
          {children}
        </section>

      </div>
    </main>
  );
}