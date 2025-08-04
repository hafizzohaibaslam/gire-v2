import React, { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { getAuthCookies, setAuthCookies, clearAuthCookies } from "./utils";

type AuthContextType = {
  accessToken: string | null;
  setAccessToken: (accessToken: string | null) => void;
  refreshToken: string | null;
  setRefreshToken: (refreshToken: string | null) => void;
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
  isLoading: boolean;
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
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const initializeAuth = () => {
      try {
        // Read cookies using utility function
        const { accessToken, refreshToken, isAdmin } = getAuthCookies();

        setAccessToken(accessToken || null);
        setRefreshToken(refreshToken || null);
        setIsAdmin(isAdmin);

        // Set cookies with proper configuration if they exist
        if (accessToken && refreshToken) {
          setAuthCookies(accessToken, refreshToken, isAdmin);
        }
      } catch (error) {
        console.error("Error initializing auth:", error);
      } finally {
        // Mark as loaded after ensuring cookies are read
        setIsLoading(false);
      }
    };

    // Initialize auth immediately
    initializeAuth();
  }, []);

  const signOut = () => {
    setAccessToken(null);
    setRefreshToken(null);
    setIsAdmin(false);

    // Clear cookies using utility function
    clearAuthCookies();
    router.push("/admin/sign-in");
  };

  const values = {
    accessToken,
    setAccessToken,
    refreshToken,
    setRefreshToken,
    isAdmin,
    setIsAdmin,
    isLoading,
    signOut,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
