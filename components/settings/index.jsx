"use client";
import React, { useState } from "react";
import Image from "next/image";
import Container from "../universal/Container";
import EditProfileModal from "./EditProfileModal";
import { useAdminData } from "@/app/provider/AdminDataProvider";

export default function Settings() {
  const [avatar, setAvatar] = useState("/assets/images/profile-avatar.png");
  const { adminData } = useAdminData();

  const handleFileChange = (e) => {
    const fileInput = e.target;
    const newFileName =
      fileInput.files.length > 0 ? fileInput.files[0].name : "";

    if (fileInput.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAvatar(event.target.result);
      };
      reader.readAsDataURL(fileInput.files[0]);
    }
  };
  return (
    <>
      <div className="w-full md:w-3/4">
        <Container className="px-4">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row gap-14 items-center">
              <div className="relative">
                <div className="w-[167px] h-[167px] rounded-full overflow-hidden  z-[-10]">
                  <Image
                    src={avatar}
                    width={167}
                    height={167}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </div>
                <label
                  className="absolute right-0 bottom-0 cursor-pointer hover:opacity-90"
                  title="Change picture"
                >
                  <Image
                    className=""
                    src={"/assets/icons/camera-icon.png"}
                    width={44}
                    height={44}
                    alt=""
                  />
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                </label>
              </div>
              <div className="w-full">
                <form action="">
                  <div className="flex flex-col mb-6">
                    <label htmlFor="">Email Address</label>
                    <input
                      className="outline-none border border-[#DCDCE4] rounded text-sm py-3 pl-4 w-full"
                      type="email"
                      placeholder={adminData?.email}
                    />
                  </div>
                  {/* <div className="flex flex-col mb-4">
                    <label htmlFor="">Password</label>
                    <input
                      className="outline-none border border-[#DCDCE4] rounded text-sm py-3 pl-4 w-full"
                      type="password"
                      placeholder="********"
                    />
                  </div> */}
                  <div className="flex flex-col mb-4">
                    <label htmlFor="">Name</label>
                    <input
                      className="outline-none border border-[#DCDCE4] rounded text-sm py-3 pl-4 w-full"
                      type="text"
                      placeholder={adminData?.fullName}
                    />
                  </div>
                  <EditProfileModal adminData={adminData} />
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="w-full md:w-3/4">
        <Container className="px-4">
          <p className="font-bold">Notification Settings</p>
          <p className="text-[#666] mb-10">
            Select your default notification channels
          </p>
          <div className="flex flex-col md:flex-row justify-between border-b-[1px] border-[#C4C4C4] mb-4 pb-4">
            <p className="text-[#666]">New vendor application</p>
            <div className="flex gap-1">
              <button className="py-1 px-[10px] text-[#525252] border-solid border-[1px] border-[#525252] rounded-[5px]">
                None
              </button>
              <button className="py-1 px-[10px] bg-[#0032C8] text-white rounded-[5px]">
                In app
              </button>
              <button className="py-1 px-[10px] bg-[#0032C8] text-white rounded-[5px]">
                Email
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between border-b-[1px] border-[#C4C4C4] pb-4">
            <p className="text-[#666]">New Features</p>
            <div className="flex gap-1">
              <button className="py-1 px-[10px] text-[#525252] border-solid border-[1px] border-[#525252] rounded-[5px]">
                None
              </button>
              <button className="py-1 px-[10px] bg-[#0032C8] text-white rounded-[5px]">
                In app
              </button>
              <button className="py-1 px-[10px] bg-[#0032C8] text-white rounded-[5px]">
                Email
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
