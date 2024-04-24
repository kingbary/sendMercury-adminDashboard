import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { DrawerClose } from "../ui/drawer";
import { BeatLoader } from "react-spinners";
import { toast } from "sonner";
import axios from "axios";

export default function VetProduct() {
  const [token, setToken] = useState();
  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
  useEffect(() => {
    const item = localStorage.getItem("token");
    setToken(item);
  }, []);
  const param = useParams();
  const productId = param.productId;
  const handleVetToLive = async () => {
    try {
      const response = await axios.patch(
        `${baseUrl}/admin/products/${productId}/live`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Product has been veted to live!")
    } catch (error) {
        toast.error(`Error vetting product to live: ${error}`);
    }
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="rounded-full border border-gray-500 flex gap-[6px] font-semibold p-1 w-fit mt-8">
          <button className="rounded-full bg-[#F79E1B] text-white py-[10px] px-4">
            Pending
          </button>
          <button
            className="rounded-full py-[10px] px-4"
            onClick={handleVetToLive}
          >
            Set Live
          </button>
        </div>
      </div>
    </>
  );
}
