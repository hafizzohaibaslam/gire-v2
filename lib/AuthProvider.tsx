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
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const isAdmin = localStorage.getItem("isAdmin");
    setAccessToken(accessToken || null);
    setRefreshToken(refreshToken || null);
    setIsAdmin(isAdmin === "true");
  }, []);

  const signOut = () => {
    setAccessToken(null);
    setRefreshToken(null);
    setIsAdmin(false);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("isAdmin");
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
