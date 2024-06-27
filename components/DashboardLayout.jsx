"use client";
import { useEffect } from "react";
import SideBarProvider from "./sidebar-provider/SideBarProvider";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { BeatLoader } from "react-spinners";

export default function DashboardLayout({ children }) {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "loading") return;
    if (session.status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [session, router]);

  if (session.status === "loading") {
    return (
      <div className="w-screen h-screen bg-[#FAFAFA] flex justify-center items-center">
        <BeatLoader color="#0032C8" size={20} />
      </div>
    );
  }

  if (session.status === "unauthenticated") {
    toast.error("You're not authorized!");
    return null;
  }

  return (
    <div className="font-nunito relative">
      <SideBarProvider />
      <main className="bg-[#FAFAFA] min-h-screen lg:ml-[15%] mt-[133px] md:mt-[73px] pb-6 pt-6">
        {children}
      </main>
    </div>
  );
}
