"use client";

import { usePathname } from "next/navigation";
import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayoutShell({ children }) {
  const pathname = usePathname();

  const isLoginPage = pathname === "/admin/login";

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="flex">
        <AdminSidebar />

        <section className="flex-1 p-10">
          {children}
        </section>
      </div>
    </main>
  );
}