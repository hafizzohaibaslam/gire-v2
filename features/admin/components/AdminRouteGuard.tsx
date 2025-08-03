"use client";
import { useAuthContext } from "@/lib/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface AdminRouteGuardProps {
  children: React.ReactNode;
}

const AdminRouteGuard = ({ children }: AdminRouteGuardProps) => {
  const { isAdmin, accessToken } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated as admin
    if (!isAdmin || !accessToken) {
      router.push("/admin/sign-in");
    }
  }, [isAdmin, accessToken, router]);

  // Show loading or nothing while checking authentication
  if (!isAdmin || !accessToken) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default AdminRouteGuard;
