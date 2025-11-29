"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { demoAccounts, users, User } from "@/data/mock";

type UserRole = "donor" | "recipient" | "hospital" | "admin";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (phone: string, password: string) => Promise<{ success: boolean; error?: string; redirect?: string }>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("waseel_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (phone: string, password: string): Promise<{ success: boolean; error?: string; redirect?: string }> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Check demo accounts
    let matchedRole: UserRole | null = null;
    
    for (const [role, account] of Object.entries(demoAccounts)) {
      if (account.phone === phone && account.password === password) {
        matchedRole = role as UserRole;
        break;
      }
    }

    if (!matchedRole) {
      return { success: false, error: "رقم الهاتف أو كلمة المرور غير صحيحة" };
    }

    // Find or create user based on role
    let loggedInUser: User;
    
    if (matchedRole === "donor") {
      loggedInUser = users.find(u => u.phone === phone) || {
        id: "demo-donor",
        name: "أحمد محمد علي",
        phone: phone,
        bloodType: "A+",
        city: "khartoum",
        role: "donor",
        status: "active",
        isAvailable: true,
        lastDonation: "2024-08-15",
        totalDonations: 5,
        points: 150,
        joinDate: "2024-01-15",
      };
    } else if (matchedRole === "recipient") {
      loggedInUser = {
        id: "demo-recipient",
        name: "فاطمة أحمد حسن",
        phone: phone,
        bloodType: "O+",
        city: "khartoum",
        role: "recipient",
        status: "active",
        isAvailable: false,
        totalDonations: 0,
        points: 20,
        joinDate: "2024-02-20",
      };
    } else if (matchedRole === "hospital") {
      loggedInUser = {
        id: "demo-hospital",
        name: "مستشفى الخرطوم التعليمي",
        phone: phone,
        bloodType: "O+",
        city: "khartoum",
        role: "hospital",
        status: "active",
        isAvailable: false,
        totalDonations: 0,
        points: 0,
        joinDate: "2023-06-01",
      };
    } else {
      loggedInUser = {
        id: "demo-admin",
        name: "مدير النظام",
        phone: phone,
        bloodType: "O+",
        city: "khartoum",
        role: "admin",
        status: "active",
        isAvailable: false,
        totalDonations: 0,
        points: 0,
        joinDate: "2023-01-01",
      };
    }

    // Save to state and localStorage
    setUser(loggedInUser);
    localStorage.setItem("waseel_user", JSON.stringify(loggedInUser));

    // Determine redirect based on role
    const redirectMap: Record<UserRole, string> = {
      donor: "/dashboard",
      recipient: "/dashboard",
      hospital: "/hospital",
      admin: "/admin",
    };

    return { success: true, redirect: redirectMap[matchedRole] };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("waseel_user");
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
