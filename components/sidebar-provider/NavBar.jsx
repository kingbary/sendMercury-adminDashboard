import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DropDown from "./DropDown";

export default function NavBar({ isSidebarOpen, toggleSideBar }) {
  const session = useSession();
  const adminData = session?.data?.user?.data?.admin;
  return (
    <>
      <nav
        className={`shadowBx z-10 flex flex-col md:flex-row ${
          isSidebarOpen ? "col-start-2" : "col-start-1"
        } bg-white w-full px-[21px] py-[18px] text-[#333] fixed top-0 text-sm flex justify-between lg:px-[40px] xl:px-[80px]`}
      >
        <div className="flex justify-between md:hidden mb-4">
          <button onClick={toggleSideBar}>
            <Image
              className="lg:hidden"
              src="/assets/icons/hamburger.svg"
              width={37}
              height={37}
              priority
              alt=""
            />
          </button>
          <div className="relative flex gap-[15px]">
            <Image
              src="/assets/icons/nav-notification.svg"
              width={36}
              height={36}
              alt="notification icon"
            />
            <div className="flex gap-[5px] md:gap-[9px] items-center">
              {adminData?.avatar ? (
                <Image
                  src={`${adminData?.avatar}`}
                  width={30}
                  height={30}
                  alt=""
                />
              ) : (
                <Image
                  src="/assets/icons/user.svg"
                  width={30}
                  height={30}
                  alt=""
                />
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
          </div>
        </div>
        <div className="lg:block relative z-10 lg:ml-[15%] xl:ml-[25%]">
          <Image
            className="absolute left-2 top-[30%]"
            src={"/assets/icons/search.svg"}
            width={13}
            height={13}
            alt="search icon"
          />
          <input
            className="py-3 pl-8 bg-[#ededed] w-full md:w-[400px] rounded-xl outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="relative md:flex gap-[15px] hidden">
          <Link href={"/notifications"}>
            <Image
              src="/assets/icons/nav-notification.svg"
              width={36}
              height={36}
              alt="notification icon"
            />
          </Link>
          <DropDown />
        </div>
      </nav>
    </>
  );
}
