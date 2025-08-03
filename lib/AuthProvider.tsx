import React, { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";

type AuthContextType = {
  accessToken: string | null;
  setAccessToken: (accessToken: string | null) => void;
  refreshToken: string | null;
  setRefreshToken: (refreshToken: string | null) => void;
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const accessToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken="))
      ?.split("=")[1];
    const refreshToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("refreshToken="))
      ?.split("=")[1];
    const isAdmin = document.cookie
      .split("; ")
      .find((row) => row.startsWith("isAdmin="))
      ?.split("=")[1];
    setAccessToken(accessToken || null);
    setRefreshToken(refreshToken || null);
    setIsAdmin(isAdmin === "true" || false);

    // Also set cookies for middleware access
    if (accessToken) {
      document.cookie = `accessToken=${accessToken}; path=/; max-age=${
        60 * 60 * 24 * 7
      }`; // 7 days
    }
    if (isAdmin === "true") {
      document.cookie = `isAdmin=true; path=/; max-age=${60 * 60 * 24 * 7}`; // 7 days
    }
  }, []);

  const signOut = () => {
    setAccessToken(null);
    setRefreshToken(null);
    setIsAdmin(false);

    // Clear cookies
    document.cookie =
      "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "isAdmin=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

    router.push("/admin/sign-in");
  };

  const values = {
    accessToken,
    setAccessToken,
    refreshToken,
    setRefreshToken,
    isAdmin,
    setIsAdmin,
    signOut,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
