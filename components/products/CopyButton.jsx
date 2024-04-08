import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

export default function CopyButton({textToCopy}) {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <button
      onClick={handleCopyClick}
      className="absolute right-2 top-[55%] text-neutral-500 hover:text-black"
    >
      {copied ? <p className="text-xs">Copied!</p> : <FaRegCopy />}
    </button>
  );
}
