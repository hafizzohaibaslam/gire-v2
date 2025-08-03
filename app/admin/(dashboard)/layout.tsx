import React from "react";
import AdminHeader from "@/features/admin/components/Header";
import Sidebar from "@/features/admin/components/Sidebar";
import AdminRouteGuard from "@/features/admin/components/AdminRouteGuard";

const AdminDashboardLayoutPage = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AdminRouteGuard>
      <div className="bg-[#F5F7FA] h-screen flex relative overflow-hidden">
        {/* Sidebar */}
        <div className="lg:block hidden bg-white border-r-[1px] border-[#E0E0E0]">
          <Sidebar />
        </div>
        {/* Header and Main Content */}
        <div className="w-full flex flex-col overflow-hidden">
          <AdminHeader />
          <main className="px-[40px] py-[30px] flex-1 overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </AdminRouteGuard>
  );
};

export default AdminDashboardLayoutPage;
