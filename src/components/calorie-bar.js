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
  const setCompletedDailyCalorieNeed = useAppStore(
    (state) => state.setCompletedDailyCalorieNeed
  );

  //FUNCTIONS
  /**
   *
   * @param {number} value - The calorie of food
   */
  function handleCompletedCalorieNeedCalculation(value) {
    const prevVal = completedDailyCalorieNeed;
    setCompletedDailyCalorieNeed(prevVal + value);
  }

  return (
    <div className="flex flex-col">
      {completedDailyCalorieNeed}/{dailyCalorieNeed}
      <button
        type="button"
        onClick={() => handleCompletedCalorieNeedCalculation(10)}
      >
        increase 10
      </button>
    </div>
  );
}

export default CalorieBar;
