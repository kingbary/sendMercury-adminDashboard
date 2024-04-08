"use client";
import React, { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function SideBarProvider() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSideBar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <NavBar isSidebarOpen={isSidebarOpen} toggleSideBar={toggleSideBar} />
      <SideBar isOpen={isSidebarOpen} />
    </>
  );
}
