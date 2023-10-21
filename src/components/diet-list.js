"use client";

import useAppStore from "@/store/app";
import { useGetFromStore } from "@/hooks";
import Image from "next/image";

function DietList() {
  // STATES
  const diet = useGetFromStore(useAppStore, (state) => state.diet);
  const removeFoodFromDiet = useAppStore((state) => state.removeFoodFromDiet);
  const markFoodAsEaten = useAppStore((state) => state.markFoodAsEaten);
  const calculateCompletedDailyCalorieNeed = useAppStore(
    (state) => state.calculateCompletedDailyCalorieNeed
  );
  const calculateCalorieBarPercentage = useAppStore(
    (state) => state.calculateCalorieBarPercentage
  );

  return (
    <div>
      {diet?.length === 0 ? (
        <p>You have no food in your diet</p>
      ) : (
        diet?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col p-3 border-2 border-black"
          >
            {item.eaten === true && (
              <p className="text-green-500">Marked As Eaten</p>
            )}
            <p>title: {item.title}</p>
            <p>calories: {item.calories}</p>
            <a
              href={item.source}
              target="_blank"
              className="p-2 bg-black text-white"
            >
              go to source
            </a>

            <button
              type="button"
              className="bg-red-500 p-3"
              onClick={() => {
                removeFoodFromDiet(item);
                calculateCompletedDailyCalorieNeed();
                calculateCalorieBarPercentage();
              }}
            >
              Remove
            </button>
            <button
              type="button"
              className="bg-yellow-500 p-3"
              onClick={() => {
                markFoodAsEaten(item);
                calculateCompletedDailyCalorieNeed();
                calculateCalorieBarPercentage();
              }}
            >
              Mark as eaten
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default DietList;
