import React from "react";
import AdminHeader from "@/features/admin/components/Header";
import Sidebar from "@/features/admin/components/Sidebar";

const AdminDashboardLayoutPage = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-[#F5F7FA] min-h-screen flex relative">
      {/* Sidebar */}
      <div className="lg:block hidden bg-white border-r-[1px] border-[#E0E0E0]">
        <Sidebar />
      </div>
      {/* Header and Main Content */}
      <div className="w-full flex flex-col">
        <AdminHeader />
        <main className="px-[40px] py-[30px] flex-1">{children}</main>
      </div>
    </div>
  );
};

export default AdminDashboardLayoutPage;
