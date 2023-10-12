import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      isUserAuthorized: false,
      setIsUserAuthorized: (value) => set({ isUserAuthorized: value }),
      dailyCalorieNeed: 0,
      setDailyCalorieNeed: (value) => set({ dailyCalorieNeed: value }),
      completedDailyCalorieNeed: 0,
      setCompletedDailyCalorieNeed: (value) =>
        set({ completedDailyCalorieNeed: value }),
    }),
    {
      name: "user-store",
    }
  )
);

export default useUserStore;
