"use client";

import CalorieBar from "@/components/calorie-bar";
import useAppStore from "@/store";
import { useRouter } from "next/navigation";

function Diet() {
  // STATES
  const setIsUserAuthorized = useAppStore((state) => state.setIsUserAuthorized);
  const setCompletedDailyCalorieNeed = useAppStore(
    (state) => state.setCompletedDailyCalorieNeed
  );
  const setDailyCalorieNeed = useAppStore((state) => state.setDailyCalorieNeed);

  // HOOKS
  const router = useRouter();

  // FUNCTIONS
  function handleReset() {
    setIsUserAuthorized(false);
    setCompletedDailyCalorieNeed(0);
    setDailyCalorieNeed(0);
    localStorage.clear();
    router.push("/");
  }

  return (
    <main>
      <p>Diet page</p>
      <CalorieBar />
      <button type="button" onClick={handleReset}>
        reset progress
      </button>
    </main>
  );
}

export default Diet;
