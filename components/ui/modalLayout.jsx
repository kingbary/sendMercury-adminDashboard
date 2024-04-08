"use client";
import { X } from "lucide-react";
import React, { ReactNode, useEffect } from "react";
import { twMerge } from "tailwind-merge";
{
  /*
    The `onClick` function prop is intended for scenarios where you want the modal overlay to close when clicked. To achieve this, simply pass the `handleCloseModal` function from the `useHandleModal` hook to this prop in any component utilizing it.
    Additionally, the `showIcon` boolean is available to control the visibility of an icon, and it is set to true by default.
  */
}
export const ModalLayout = ({
  className,
  overlayClassName,
  children,
  hideIcon = false,
  isModalOpen,
  handleCloseModal,
  onClick,
}) => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isModalOpen]);
  return (
    <div
      onClick={onClick}
      className={twMerge(
        `fixed cursor-pointer z-[9999] inset-0 w-screen bg-black/70 animate-out  ${
          isModalOpen
            ? "animate-in visible fade-in-0 "
            : "invisible animate-out fade-out-0"
        }`,
        overlayClassName
      )}
    >
      <div
        className={twMerge(
          `fixed left-[50%] top-[50%] z-[9999] grid w-full max-w-lg max-h-[90%] translate-x-[-50%] translate-y-[-50%] sm:rounded-lg  gap-4 overflow-hidden overflow-y-auto bg-white p-6   ${
            isModalOpen
              ? "animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%]"
              : "animate-out fade-out-0 zoom-out-95 slide-out-to-left-1/2 slide-out-to-top-[48%]"
          }`,
          className
        )}
      >
        <button
          onClick={handleCloseModal}
          className={` self-start ml-auto w-fit  p-0.5  hover:text-black border-primary text-gray-400 rounded  border ${
            hideIcon ? "hidden" : "block"
          }`}
        >
          {/* <X className="h-4 w-4 " /> */}
        </button>
        {children}
      </div>
    </div>
  );
};
