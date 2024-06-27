import DashboardLayout from "@/components/DashboardLayout";
import DashHome from "@/components/adminHome/DashHome";

export const metadata = {
  title: "SendMercury | Admin Dashboard",
  description: "Admin Dashboard for SendMercury",
};

export default function Page() {
  return (
    <DashboardLayout>
      <DashHome />
    </DashboardLayout>
  );
}
