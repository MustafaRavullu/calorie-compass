"use client";

import useAppStore from "@/store/app";
import { useGetFromStore } from "@/hooks";
import { BsLightningFill } from "react-icons/bs";
import { useEffect } from "react";
import { resetCompletedDailyCalorieNeed, isNewDay } from "@/utils";

function CalorieBar() {
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
  const lastVisitedDayOfTheMonth = useGetFromStore(
    useAppStore,
    (state) => state.lastVisitedDayOfTheMonth
  );
  const setLastVisitedDayOfTheMonth = useAppStore(
    (state) => state.setLastVisitedDayOfTheMonth
  );
  const setCompletedDailyCalorieNeed = useAppStore(
    (state) => state.setCompletedDailyCalorieNeed
  );
  const calculateCalorieBarPercentage = useAppStore(
    (state) => state.calculateCalorieBarPercentage
  );
  const unmarkFoodAsEaten = useAppStore((state) => state.unmarkFoodAsEaten);
  useEffect(() => {
    console.log("lastVisitedDayOfTheMonth:", lastVisitedDayOfTheMonth);
    console.log("isNewDay:", isNewDay(lastVisitedDayOfTheMonth));
    if (isNewDay(lastVisitedDayOfTheMonth)) {
      resetCompletedDailyCalorieNeed(
        setCompletedDailyCalorieNeed,
        unmarkFoodAsEaten,
        calculateCalorieBarPercentage
      );
      const currentDate = new Date();
      const currentDay = currentDate.getDate();
      setLastVisitedDayOfTheMonth(currentDay);
    }
  }, [
    setLastVisitedDayOfTheMonth,
    lastVisitedDayOfTheMonth,
    setCompletedDailyCalorieNeed,
    unmarkFoodAsEaten,
    calculateCalorieBarPercentage,
  ]);

  return (
    <div
      className="w-full h-[50px]  mt-4 sticky 
    top-[var(--top-margin)] z-10 bg-cc_dark_background lg:top-[var(--lg-top-margin)]
     text-cc_dark_text flex justify-start items-center"
    >
      <div
        className={` h-full bg-green-500 transition-all ease-out
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
