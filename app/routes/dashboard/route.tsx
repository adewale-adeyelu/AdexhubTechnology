import { Outlet } from "react-router";
import Sidebar from "~/dashboard/Sidebar";
import Navbar from "~/dashboard/Navbar";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />
        <main className="dark:bg-gray-900">
          <Outlet />
        </main>
      </div>
    </div>
  );
}