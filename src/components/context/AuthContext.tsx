"use client"
import { RootState } from '@/redux/store';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useSelector } from 'react-redux';
// Định nghĩa kiểu cho giá trị của AuthContext
interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}
// Khởi tạo giá trị mặc định cho AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);
// Định nghĩa kiểu cho props của AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}
export function AuthProvider({ children }: AuthProviderProps) {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  useEffect(() => {
    setIsAuthenticated(!!currentUser);
  }, []); // Chỉ chạy khi component mount
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
