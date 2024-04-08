import React, { useState } from "react";
import CopyButton from "./CopyButton";
import Image from "next/image";

export default function InputContainer({
  labelName,
  id,
  inputVal,
  hasLogo,
  logoSrc,
}) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="relative flex flex-col w-full">
      <label htmlFor={id}>{labelName}</label>
      {hasLogo ? (
        <div
          style={{ backgroundImage: `url(${logoSrc})` }}
          className="absolute bg-[#8E8EA9] bg-cover bg-center hover:opacity-90 rounded-sm p-3 w-11 h-11 left-0"
        ></div>
      ) : (
        ""
      )}
      <input
        className={`text-sm py-3 ${hasLogo ? "pl-[20%]" : "px-4"} rounded-sm border bg-white border-neutral-200`}
        type="text"
        id={id}
        value={inputVal}
        onChange={handleInputChange}
        disabled
      />
      {hasLogo ? "" : <CopyButton textToCopy={inputVal} />}
    </div>
  );
}
