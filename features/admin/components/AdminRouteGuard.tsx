"use client";
import { useAuthContext } from "@/lib/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface AdminRouteGuardProps {
  children: React.ReactNode;
}

const AdminRouteGuard = ({ children }: AdminRouteGuardProps) => {
  const { isAdmin, accessToken, isLoading } = useAuthContext();
  const router = useRouter();
  const [hasCheckedAuth, setHasCheckedAuth] = useState(false);

  useEffect(() => {
    // Only check authentication after loading is complete
    if (!isLoading) {
      if (!isAdmin || !accessToken) {
        router.push("/admin/sign-in");
      } else {
        setHasCheckedAuth(true);
      }
    }
  }, [isAdmin, accessToken, isLoading, router, hasCheckedAuth]);

  // Show loading while authentication is being checked
  if (isLoading || (!hasCheckedAuth && isAdmin && accessToken)) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Show loading if not authenticated (this will redirect in useEffect)
  if (!isAdmin || !accessToken) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to sign in...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default AdminRouteGuard;
