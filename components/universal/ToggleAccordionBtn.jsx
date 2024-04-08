import Image from "next/image";
import React from "react";

export default function ToggleAccordionBtn({ activeIndex, setActiveIndex, index }) {
  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <button
      className="w-6 md:w-5 h-6 md:h-5 rounded-sm border border-neutral-200 flex justify-center items-center"
      onClick={() => toggleAccordion(index)}
    >
      <Image
        className={`${activeIndex === index ? "rotate-180" : ""}`}
        src="/assets/icons/arrow-down-2.svg"
        width={26}
        height={26}
        alt="arrow-down icon"
      />
    </button>
  );
}
