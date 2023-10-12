"use client";

import useUserStore from "@/store/user";
import { useGetFromStore } from "@/hooks";

function CalorieBar() {
  //STATES
  const dailyCalorieNeed = useGetFromStore(
    useUserStore,
    (state) => state.dailyCalorieNeed
  );
  const completedDailyCalorieNeed = useGetFromStore(
    useUserStore,
    (state) => state.completedDailyCalorieNeed
  );
  const setCompletedDailyCalorieNeed = useUserStore(
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
