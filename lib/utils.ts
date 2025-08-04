import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Cookies from "js-cookie";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Cookie utility functions
export const getAuthCookies = () => {
  const accessToken = Cookies.get("accessToken");
  const refreshToken = Cookies.get("refreshToken");
  const isAdmin = Cookies.get("isAdmin") === "true";

  return {
    accessToken,
    refreshToken,
    isAdmin,
  };
};

export const setAuthCookies = (
  accessToken: string,
  refreshToken: string,
  isAdmin: boolean = true
) => {
  Cookies.set("accessToken", accessToken, {
    expires: 7, // 7 days
    path: "/",
    sameSite: "lax",
  });
  Cookies.set("refreshToken", refreshToken, {
    expires: 7, // 7 days
    path: "/",
    sameSite: "lax",
  });
  Cookies.set("isAdmin", isAdmin.toString(), {
    expires: 7, // 7 days
    path: "/",
    sameSite: "lax",
  });
};

export const clearAuthCookies = () => {
  Cookies.remove("accessToken", { path: "/" });
  Cookies.remove("refreshToken", { path: "/" });
  Cookies.remove("isAdmin", { path: "/" });
};
