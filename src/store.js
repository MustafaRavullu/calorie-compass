import { create } from "zustand";

const useAppStore = create((set) => ({
  dailyCalorieNeed: 0,
  setDailyCalorieNeed: (value) => set({ dailyCalorieNeed: value }),
}));

export default useAppStore;
