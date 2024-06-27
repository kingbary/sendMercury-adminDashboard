"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar({ isOpen }) {
  const pathname = usePathname();
  function isActiveBar(path) {
    return pathname === path;
  }

  return (
    <aside
      className={`${
        isOpen ? "flex z-10 animate-in" : "hidden"
      } fixed animate-out lg:w-[15%] top-[70px] lg:top-0 w-full h-screen z-10 bg-deepBlue p-3 lg:flex flex-col gap-2 xl:gap-3 text-white`}
    >
      <Link
        href={"/"}
        className="hidden font lg:flex flex-col gap-3 items-center p-3"
      >
        <Image
          src="/assets/icons/logo-white.svg"
          alt="logo icon"
          width={142}
          height={22}
        />
        <div className="bg-[#E6E6E6] w-[121px] h-[1px]"></div>
      </Link>
      <Link
        href={"/"}
        className={`${
          isActiveBar("/") ? "bg-lightBlue" : ""
        } flex gap-[10px] rounded-xl p-3 max-w-xs hover:bg-lightBlue`}
      >
        <Image
          src="/assets/icons/grid.svg"
          width={24}
          height={24}
          alt="grid-icon"
        />
        Dashboard
      </Link>
      <Link
        href={"/orders"}
        className={`${
          isActiveBar("/orders") || pathname.startsWith("/orders")
            ? "bg-lightBlue"
            : ""
        } flex gap-[10px] rounded-xl p-3 max-w-xs hover:bg-lightBlue`}
      >
        <Image
          src="/assets/icons/coin.svg"
          width={24}
          height={24}
          alt="coin icon"
        />
        Orders
      </Link>
      <Link
        href={"/vendors"}
        className={`${
          isActiveBar("/vendors") || pathname.startsWith("/vendors")
            ? "bg-lightBlue"
            : ""
        } flex gap-[10px] rounded-xl p-3 max-w-xs hover:bg-lightBlue`}
      >
        <Image
          src="/assets/icons/vendor-2.svg"
          width={24}
          height={24}
          alt="vendor"
        />
        Vendors
      </Link>
      <Link
        href={"/products"}
        className={`${
          isActiveBar("/products") || pathname.startsWith("/products")
            ? "bg-lightBlue"
            : ""
        } flex gap-[10px] rounded-xl p-3 max-w-xs hover:bg-lightBlue`}
      >
        <Image
          src="/assets/icons/products-icon.svg"
          width={24}
          height={24}
          alt="vendor"
        />
        Products
      </Link>
      <Link
        href={"/revenue"}
        className={`${
          isActiveBar("/revenue") || pathname.startsWith("/revenue")
            ? "bg-lightBlue"
            : ""
        } flex gap-[10px] rounded-xl p-3 max-w-xs hover:bg-lightBlue`}
      >
        <Image
          src="/assets/icons/card.svg"
          width={24}
          height={24}
          alt="product icon"
        />
        Revenue
      </Link>
      <Link
        href={"/notifications"}
        className={`${
          isActiveBar("/notifications") ? "bg-lightBlue" : ""
        } flex gap-[10px] rounded-xl p-3 max-w-xs hover:bg-lightBlue`}
      >
        <Image
          src="/assets/icons/notification.svg"
          width={24}
          height={24}
          alt="notification icon"
        />
        Notifications
      </Link>
      <Link
        href={"/reviews"}
        className={`${
          isActiveBar("/reviews") || pathname.startsWith("/reviews")
            ? "bg-lightBlue"
            : ""
        } flex gap-[10px] rounded-xl p-3 max-w-xs hover:bg-lightBlue`}
      >
        <Image
          src="/assets/icons/star-outline.svg"
          width={24}
          height={24}
          alt="notification icon"
        />
        Reviews
      </Link>
      <Link
        href={"/settings/profile"}
        className={`${
          isActiveBar("/settings") || pathname.startsWith("/settings")
            ? "bg-lightBlue"
            : ""
        } flex gap-[10px] rounded-xl p-3 max-w-xs hover:bg-lightBlue`}
      >
        <Image
          src="/assets/icons/settings.svg"
          width={22}
          height={22}
          alt="gear icon"
        />
        Settings
      </Link>
    </aside>
  );
}
