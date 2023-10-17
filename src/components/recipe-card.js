"use client";
import Image from "next/image";
import useAppStore from "@/store/app";

function RecipeCard({ id, label, image, sourceUrl, calories }) {
  const addFoodToDiet = useAppStore((state) => state.addFoodToDiet);
  return (
    <div className="flex flex-col border-2 border-black p-2">
      <p>title: {label}</p>
      <p>calories: {calories}</p>
      <Image src={image} alt={label} width={200} height={200} priority />
      <a href={sourceUrl} target="_blank">
        go to source
      </a>
      <button
        type="button"
        className="bg-green-500 p-3"
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
        Add food
      </button>
    </div>
  );
}

export default RecipeCard;
