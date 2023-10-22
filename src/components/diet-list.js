"use client";

import useAppStore from "@/store/app";
import { useGetFromStore } from "@/hooks";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { BsLightningFill } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";

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
    <div className="my-4 flex flex-col gap-10 ">
      {diet?.length === 0 ? (
        <div className="w-full flex flex-col items-center justify-center text-xl text-gray-500">
          <p>You have no food in your diet!</p>
          <p>To add some go to recipe explorer</p>
        </div>
      ) : (
        diet?.map((item) => (
          <div
            key={item.id}
            className="flex justify-between gap-5 items-center text-center
             flex-col text-cc_dark_text bg-cc_dark_background  border-2
              border-black transform transition-all duration-300 ease-in-out
                 hover:scale-105"
          >
            <p className="text-3xl px-3 pt-2">{item.title}</p>
            <span className="flex items-center text-xl">
              <BsLightningFill className="text-yellow-500" />
              calories: <p className="text-yellow-500">{item.calories}</p>
            </span>
            <div className="flex flex-col w-full md:flex-row gap-2 px-2 pb-2">
              <div className="w-full flex justify-center">
                <a
                  href={item.source}
                  target="_blank"
                  className="p-2 hover:bg-violet-600 bg-violet-500 text-cc_dark_text
                   md:text-cc_text transition-all duration-300 ease-in-out
                    md:hover:text-cc_dark_text flex-1 flex 
                  items-center justify-center rounded-sm"
                >
                  <span className="flex gap-1 items-center">
                    View <GoLinkExternal />
                  </span>
                </a>
              </div>

              {item.eaten === true ? (
                <div className="flex justify-center w-full">
                  <button
                    className="flex items-center p-3 gap-1 flex-1 justify-center
                     cursor-not-allowed rounded-sm bg-green-500
                   text-cc_dark_text"
                    disabled={true}
                  >
                    <IoCheckmarkDoneSharp />
                    Marked as eaten
                  </button>
                </div>
              ) : (
                <div className="flex rounded-sm justify-center w-full">
                  <button
                    className="p-3 flex-1 hover:bg-yellow-600 text-cc_dark_text
                     md:hover:text-cc_dark_text md:text-cc_text bg-yellow-500
                     transition-all duration-300 ease-in-out"
                    onClick={() => {
                      markFoodAsEaten(item);
                      calculateCompletedDailyCalorieNeed();
                      calculateCalorieBarPercentage();
                    }}
                  >
                    Mark as eaten
                  </button>
                </div>
              )}
              <div className="flex justify-center w-full">
                <button
                  type="button"
                  className="bg-red-500 text-cc_dark_text hover:bg-red-600 flex-1 p-3 rounded-sm md:text-cc_text
                   md:hover:text-cc_dark_text transition-all duration-300 ease-in-out"
                  onClick={() => {
                    removeFoodFromDiet(item);
                    calculateCompletedDailyCalorieNeed();
                    calculateCalorieBarPercentage();
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default DietList;
