import {
  isDuplicateItem,
  isAlreadyMarkedAsEaten,
  isSumExceedsDailyCalorieNeed,
} from "@/utils";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAppStore = create(
  persist(
    (set) => ({
      diet: [],
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
      emptyDiet: () => set({ diet: [] }),
      addFoodToDiet: (food) =>
        set((state) => {
          if (state.diet.length > 200) return { diet: state.diet };
          if (isDuplicateItem(food.id, state.diet)) return { diet: state.diet };
          return { diet: [...state.diet, food] };
        }),
      removeFoodFromDiet: (removedFood) =>
        set((state) => {
          return {
            diet: state.diet.filter((item) => item.id !== removedFood.id),
          };
        }),
      markFoodAsEaten: (food) =>
        set((state) => {
          if (isAlreadyMarkedAsEaten(food)) return { diet: state.diet };
          if (
            isSumExceedsDailyCalorieNeed(
              food,
              state.diet,
              state.dailyCalorieNeed
            )
          ) {
            return { diet: state.diet };
          }
          return {
            diet: state.diet.map((item) => {
              if (item.id === food.id) {
                return { ...item, eaten: true };
              }
              return item;
            }),
          };
        }),
      calculateCompletedDailyCalorieNeed: () =>
        set((state) => {
          let sum = 0;
          state.diet.forEach((element) => {
            if (element.eaten === true) {
              sum += element.calories;
            }
          });
          return { completedDailyCalorieNeed: sum };
        }),
    }),
    {
      name: "app-store",
    }
  )
);

export default useAppStore;
