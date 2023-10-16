"use client";

import useAppStore from "@/store/app";
import { useGetFromStore } from "@/hooks";

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

  return (
    <div className="flex flex-col">
      {completedDailyCalorieNeed}/{dailyCalorieNeed}
    </div>
  );
}

export default CalorieBar;
