import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { LogOutIcon } from "lucide-react";

export default function DropDown() {
  const session = useSession();
  const adminData = session?.data?.user?.data?.admin;

  const handleLogout = () => {
    signOut({ callbackUrl: "/auth/login" });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-[5px] md:gap-[9px] items-center">
          {adminData?.avatar ? (
            <Image src={`${adminData?.avatar}`} width={30} height={30} alt="" />
          ) : (
            <Image src="/assets/icons/user.svg" width={30} height={30} alt="" />
          )}
          <p className="flex gap-1 text-base font-medium">
            <span className="hidden lg:block">
              {adminData?.fullName?.split(" ")[0]}{" "}
            </span>
            <span>{adminData?.fullName?.split(" ")[1]}</span>
          </p>
          <Image
            src="/assets/icons/arrow-down-2.svg"
            width={20}
            height={20}
            alt=""
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="px-6 pt-4 pb-6">
        <DropdownMenuLabel className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <Image src={`${adminData?.avatar}`} width={30} height={30} />{" "}
            <p className="text-lg font-medium">{adminData?.fullName}</p>
          </div>
          <Link
            href={"/settings/profile"}
            className="text-primaryBlue font-semibold"
          >
            View Profile
          </Link>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex items-center gap-3 text-red-600 cursor-pointer"
          onClick={handleLogout}
        >
          <LogOutIcon className="rotate-180" size={16} color="red" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
