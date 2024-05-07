"use client";
import React, { useState } from "react";
import Container from "../universal/Container";
import Image from "next/image";
import EditProfileModal from "./EditProfileModal";
import { useAdminData } from "@/app/provider/AdminDataProvider";

export default function Profile() {
  const { adminData } = useAdminData();
  const [avatar, setAvatar] = useState("/assets/images/profile-avatar.png");
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
  );
}
