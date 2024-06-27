import { useParams } from "next/navigation";
import React from "react";
import { ClipLoader } from "react-spinners";
import useVetToLive from "@/hooks/mutations/useVetToLive";
import { useAuthToken } from "@/hooks/useAuthToken";

export default function VetProduct({ isActive }) {
  const param = useParams();
  const productId = param.productId;
  useAuthToken();
  const { mutate, isPending } = useVetToLive();
  const handleVetToLive = async () => {
    mutate(productId);
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
              {isPending ? (
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
