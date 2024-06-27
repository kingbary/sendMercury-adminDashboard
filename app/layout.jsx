"use client";
import { Toaster } from "sonner";
import "./globals.css";
import "@/styles/nprogress.css";
import Interceptor from "../components/provider/Interceptor";
import AuthProvider from "../components/provider/AuthProvider";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children, session }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SessionProvider session={session}>
          <AuthProvider>
            <Interceptor>{children}</Interceptor>
          </AuthProvider>
        </SessionProvider>
      </body>
      <Toaster position="top-right" />
    </html>
  );
}
