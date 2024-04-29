"use client";
import { useEffect, useState } from "react";
import SideBarProvider from "./sidebar-provider/SideBarProvider";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAdminData } from "@/app/provider/AdminDataProvider";

export default function DashboardLayout({ children }) {
  const [token, setToken] = useState("");
  const baseUrl = "https://send-mercury-backend-staging.up.railway.app/api/v1";
  const router = useRouter();
  const { adminData, setAdminData } = useAdminData();

  useEffect(() => {
    const sessionToken = localStorage.getItem("token");
    if (!sessionToken) {
      router.push("/auth/login");
    } else {
      setToken(sessionToken);
    }
  }, [router]);

  useEffect(() => {
    const getAdminData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/admin/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = response.data.data;
        setAdminData(data);
      } catch (error) {
        toast.error("Session expired!");
        localStorage.removeItem("token");
        router.push("/auth/login");
      }
    };

    if (token) {
      getAdminData();
    }
  }, [token, router, setAdminData]);
  // console.log(adminData);

  return (
    <div className="font-nunito relative">
      <SideBarProvider />
      <main className="bg-[#FAFAFA] min-h-screen lg:ml-[15%] mt-[133px] md:mt-[73px] pb-6 pt-6">
        {children}
      </main>
    </div>
  );
}
