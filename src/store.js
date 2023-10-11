import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAppStore = create(
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
      name: "app-store",
    }
  )
);

export default useAppStore;
