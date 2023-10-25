"use client";
import Image from "next/image";
import useAppStore from "@/store/app";
import { useState } from "react";
import { BsLightningFill, BsCheck } from "react-icons/bs";
function RecipeCard({ id, label, image, sourceUrl, calories }) {
  const addFoodToDiet = useAppStore((state) => state.addFoodToDiet);
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className="group relative flex rounded-md flex-col  
    border border-black bg-cc_background text-black  
      w-full justify-between
      "
    >
      <div className="absolute inset-0 bg-black group-hover:translate-x-[6px] group-hover:translate-y-[6px]  transition-all duration-200 ease-out z-[-1] rounded-[3px]"></div>
      <div className=" relative border-b border-black w-full aspect-square object-cover ">
        <Image
          src={image}
          alt={label}
          fill={true}
          priority
          sizes="(min-width: 640px) 298px, calc(100vw - 28px)"
          className="rounded-t-[5px]"
        />
      </div>
      <div className=" flex font-bold p-3 text-left">{label}</div>
      <div className="flex p-3 border-t gap-2 border-black justify-between">
        <div className="flex flex-1 gap-1 border border-black rounded-sm items-center sm:text-sm bg-[#ff90e8]  justify-center">
          <BsLightningFill />
          {calories}
        </div>
        <button
          type="button"
          className={`${
            clicked && "bg-[#0DFF8A]"
          } transition-all duration-300 flex justify-center items-center ease-in-out border border-black flex-1 rounded-sm py-2 `}
          onClick={() => {
            addFoodToDiet({
              id: id,
              title: label,
              calories: calories,
              source: sourceUrl,
              eaten: false,
            });
            setClicked(true);
          }}
        >
          {clicked ? (
            <BsCheck
              className="text-black text-2xl z-[2]
            "
            />
          ) : (
            "Add"
          )}
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
