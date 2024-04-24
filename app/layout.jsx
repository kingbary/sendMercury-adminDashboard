import { Toaster } from "sonner";
import "./globals.css";
import "@/styles/nprogress.css";
import Interceptor from "./provider/Interceptor";
import AuthProvider from "./provider/AuthProvider";
import { AdminDataProvider } from "./provider/AdminDataProvider";

export const metadata = {
  title: "SendMercury | Admin Dashboard",
  description: "Admin Dashboard for SendMercury",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AuthProvider>
          <Interceptor>
            <AdminDataProvider>{children}</AdminDataProvider>
          </Interceptor>
        </AuthProvider>
      </body>
      <Toaster position="top-right" />
    </html>
  );
}
