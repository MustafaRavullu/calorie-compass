import React from "react";

function CardShadow() {
  return (
    <div className="bg-black absolute inset-0 z-[-1] transition-all duration-200 ease-out rounded-md group-hover:translate-x-[6px] group-hover:translate-y-[6px]"></div>
  );
}

export default CardShadow;
