import React from "react";
import { X } from "lucide-react";

export default function LabelCard({ text, hasX }) {
  return (
    <div className="px-3 py-1 bg-neutral-100 rounded-lg w-fit text-black text-[10px] flex items-center gap-3 whitespace-nowrap">
      {text}
      {hasX ? <X size={16} /> : ""}
    </div>
  );
}
