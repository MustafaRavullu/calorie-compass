"use client";

import useAppStore from "@/store/app";
import { useGetFromStore } from "@/hooks";
import { BsLightningFill } from "react-icons/bs";

function CalorieBar() {
  //STATES
  const dailyCalorieNeed = useGetFromStore(
    useAppStore,
    (state) => state.dailyCalorieNeed
  );
  const completedDailyCalorieNeed = useGetFromStore(
    useAppStore,
    (state) => state.completedDailyCalorieNeed
  );
  const calorieBarPercentage = useGetFromStore(
    useAppStore,
    (state) => state.calorieBarPercentage
  );
  const percentageStyle = {
    width: `${calorieBarPercentage}%`,
  };

  return (
    <div
      className="w-full h-[50px]  mt-4 sticky 
    top-[var(--top-margin)] z-10 bg-cc_dark_background lg:top-[var(--lg-top-margin)]
     text-cc_dark_text flex justify-start items-center"
    >
      <div
        className={` h-full bg-green-500 transition-all ease-linear 
      duration-1000`}
        style={percentageStyle}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2
       -translate-y-1/2 flex items-center"
      >
        <BsLightningFill className="text-yellow-500" />
        <span>
          {completedDailyCalorieNeed}/{dailyCalorieNeed}
        </span>
      </div>
    </div>
  );
}

export default CalorieBar;
