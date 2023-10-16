"use client";

import useAppStore from "@/store/app";
import { useGetFromStore } from "@/hooks";
import { handleCalculationCompletedDailyCalorieNeed } from "@/utils";
import Image from "next/image";

function DietList({ setShowMessage }) {
  // STATES
  const diet = useGetFromStore(useAppStore, (state) => state.diet);
  const removeFoodFromDiet = useAppStore((state) => state.removeFoodFromDiet);
  const markFoodAsEaten = useAppStore((state) => state.markFoodAsEaten);
  const completedDailyCalorieNeed = useGetFromStore(
    useAppStore,
    (state) => state.completedDailyCalorieNeed
  );
  const setCompletedDailyCalorieNeed = useAppStore(
    (state) => state.setCompletedDailyCalorieNeed
  );

  return (
    <div>
      {diet?.length === 0 ? (
        <p>You have no food in your diet</p>
      ) : (
        diet?.map((item) => (
          <div key={item.id} className="flex flex-col p-3">
            <Image
              src={item.img}
              alt={item.label}
              width={200}
              height={200}
              priority
            />

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
                removeFoodFromDiet(item.id);
                setShowMessage(true);
              }}
            >
              Remove
            </button>
            <button
              type="button"
              className="bg-yellow-500 p-3"
              onClick={() => {
                markFoodAsEaten(item.id);
                handleCalculationCompletedDailyCalorieNeed(
                  completedDailyCalorieNeed,
                  item.calories,
                  setCompletedDailyCalorieNeed,
                  item.id,
                  diet
                );
                setShowMessage(true);
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
