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
    <div className="my-4   grid grid-cols-1   gap-4">
      {diet?.length === 0 ? (
        <div className="w-full flex flex-col items-center justify-center text-xl text-gray-500">
          <p>You have no recipe in the cookbook!</p>
          <p className="text-center">To add some go to explorer</p>
        </div>
      ) : (
        diet?.map((item) => (
          <div
            key={item.id}
            className="group relative flex justify-between gap-5  text-center border rounded-md border-black bg-cc_background flex-col md:flex-row"
          >
            <div className="absolute inset-0 z-[-1] bg-black group-hover:translate-x-[6px] group-hover:translate-y-[6px] rounded-md transition-all duration-200 ease-out"></div>
            <div className="flex items-center p-3 gap-4">
              <span className="flex min-w-[100px] p-3 gap-1 border border-black rounded-sm items-center sm:text-sm bg-[#ff90e8]  justify-center ">
                <BsLightningFill />
                <p>{item.calories}</p>
              </span>
              <p className="text-left">{item.title}</p>
            </div>
            <div className="grid grid-cols-3  text-sm p-3 h-full border-t border-black md:border-none min-w-max  gap-3">
              <button
                className={`border flex justify-center items-center flex-1 h-full border-black rounded-sm transition-all duration-300 ease-out ${
                  item.eaten && "bg-[#0DFF8A] text-lg"
                }`}
                disabled={item.eaten}
                onClick={() => {
                  markFoodAsEaten(item);
                  calculateCompletedDailyCalorieNeed();
                  calculateCalorieBarPercentage();
                }}
              >
                {item.eaten ? <IoCheckmarkDoneSharp /> : "Eat"}
              </button>
              <a
                href={item.source}
                target="_blank"
                className="border flex justify-center items-center py-2 px-4 flex-1 border-black rounded-sm bg-[#ffc900]"
              >
                <span className="flex gap-1 items-center ">
                  View
                  <GoLinkExternal />
                </span>
              </a>
              <button
                type="button"
                className="border h-full  flex-1 border-black hover:text-white rounded-sm bg-red-500"
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
        ))
      )}
    </div>
  );
}

export default DietList;
