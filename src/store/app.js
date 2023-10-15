import {
  calculateAddedFoodCalories,
  handleCalculationCompletedDailyCalorieNeed,
} from "@/utils";
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
      successMessage: "",
      errorMessage: "",
      setSuccessMessage: (message) => set({ successMessage: message }),
      setErrorMessage: (message) => set({ errorMessage: message }),
      diet: [],
      emptyDiet: () => set({ diet: [] }),
      addFoodToDiet: (food) =>
        set((state) => {
          const isDuplicate = state.diet.some((item) => item.id === food.id);
          let doesItExceedDailyCalorie =
            calculateAddedFoodCalories(state.diet) + food.calories >
            state.dailyCalorieNeed;
          if (!isDuplicate && !doesItExceedDailyCalorie) {
            state.setSuccessMessage("Item added successfully");
            state.setErrorMessage("");
            return {
              diet: [...state.diet, food],
            };
          }
          if (isDuplicate) {
            state.setErrorMessage("Item already exists!");
          } else if (doesItExceedDailyCalorie) {
            state.setErrorMessage("It exceeds daily calorie need!");
          }
          state.setSuccessMessage("");
          return {
            diet: state.diet,
          };
        }),
      removeFoodFromDiet: (foodId) =>
        set((state) => {
          state.setSuccessMessage("Item deleted successfully");
          const removedItem = state.diet.filter((item) => item.id === foodId);
          if (removedItem[0].eaten === true) {
            handleCalculationCompletedDailyCalorieNeed(
              state.completedDailyCalorieNeed,
              -1 * removedItem[0].calories,
              state.setCompletedDailyCalorieNeed
            );
          }
          return {
            diet: state.diet.filter((item) => item.id !== foodId),
          };
        }),
      markFoodAsEaten: (foodId) =>
        set((state) => {
          if (
            state.diet.filter((item) => item.id === foodId)[0].eaten === true
          ) {
            state.setSuccessMessage("");
            state.setErrorMessage("It is already marked as eaten");
            return { diet: state.diet };
          }
          state.setSuccessMessage("Marked as eaten");
          state.setErrorMessage("");
          return {
            diet: state.diet.map((item) => {
              if (item.id === foodId) {
                return { ...item, eaten: true };
              }
              return item;
            }),
          };
        }),
    }),
    {
      name: "app-store",
    }
  )
);

export default useAppStore;
