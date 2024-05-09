import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { DrawerClose } from "../ui/drawer";
import { BeatLoader, ClipLoader } from "react-spinners";
import { toast } from "sonner";
import axios from "axios";

export default function VetProduct({ isActive }) {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState();
  // const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
  const baseUrl = "https://send-mercury-backend-staging.up.railway.app/api/v1";
  useEffect(() => {
    const item = localStorage.getItem("token");
    setToken(item);
  }, []);
  const param = useParams();
  const productId = param.productId;
  const handleVetToLive = async () => {
    try {
      setIsLoading(true);
      const response = await axios.patch(
        `${baseUrl}/admin/products/${productId}/live`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsLoading(false);
      toast.success("Product has been veted to live!");
    } catch (error) {
      setIsLoading(false);
      toast.error(`${error.response.data.message}`);
    }
  };
  return (
    <>
      <div className="flex justify-center">
        {isActive === "active" ? (
          <div className="rounded-full border border-gray-500 flex gap-[6px] font-semibold p-1 w-fit mt-8">
            <button className="rounded-full text-gray-500 py-[10px] px-4">
              Pending
            </button>
            <button className="rounded-full bg-[#219653] text-white py-[10px] px-6">
              Live
            </button>
          </div>
        ) : isActive === "pending" ? (
          <div className="rounded-full border border-gray-500 flex gap-[6px] font-semibold p-1 w-fit mt-8">
            <button className="rounded-full bg-[#F79E1B] text-white py-[10px] px-4">
              Pending
            </button>
            <button
              className="rounded-full py-[10px] px-4"
              onClick={handleVetToLive}
            >
              {isLoading ? (
                <div className="flex items-center gap-1">
                  {" "}
                  <ClipLoader color="#000" size={20} /> Set live
                </div>
              ) : (
                "Set live"
              )}
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}
