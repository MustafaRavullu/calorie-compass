"use client";
import Image from "next/image";
import useAppStore from "@/store/app";
import { BsLightningFill } from "react-icons/bs";

function RecipeCard({ id, label, image, sourceUrl, calories }) {
  const addFoodToDiet = useAppStore((state) => state.addFoodToDiet);
  return (
    <div
      className="flex flex-col w-full 
    border-2 border-cc_text bg-cc_dark_background text-cc_dark_text gap-3 
    sm:w-[var(--sm-content-width)] sm:flex-row sm:gap-0"
    >
      <div
        className="w-full aspect-square relative sm:w-[300px] sm:h-[300px] 
      sm:border-r-2 sm:border-cc_text"
      >
        <Image
          src={image}
          alt={label}
          fill={true}
          priority
          sizes="(min-width: 640px) 298px, calc(100vw - 28px)"
        />
      </div>
      <div className="flex flex-col gap-3 justify-between sm:w-full">
        <div className="flex flex-col gap-3">
          <p className="text-center text-3xl font-bold py-3">{label}</p>
          <p className="flex items-center text-xl justify-center">
            <BsLightningFill className="text-yellow-500" />
            Calories: <span className="text-yellow-500">{calories}</span>
          </p>
        </div>
        <button
          type="button"
          className="bg-green-600 hover:bg-green-500 p-3 text-2xl"
          onClick={() => {
            addFoodToDiet({
              id: id,
              title: label,
              calories: calories,
              img: image,
              source: sourceUrl,
              eaten: false,
            });
          }}
        >
          Add to Diet
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
