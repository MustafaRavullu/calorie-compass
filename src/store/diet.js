import { create } from "zustand";
import { persist } from "zustand/middleware";

const useDietStore = create(
  persist(
    (set) => ({
      successMessage: "",
      errorMessage: "",
      setSuccessMessage: (message) => set({ successMessage: message }),
      setErrorMessage: (message) => set({ errorMessage: message }),
      diet: [],
      addFoodToDiet: (food) =>
        set((state) => {
          const isDuplicate = state.diet.some((item) => item.id === food.id);
          if (!isDuplicate) {
            state.setSuccessMessage("Item added successfully ");
            state.setErrorMessage("");
            return {
              diet: [...state.diet, food],
            };
          }
          state.setErrorMessage("Item already exists");
          state.setSuccessMessage("");
          return {
            diet: state.diet,
          };
        }),
      removeFoodFromDiet: (foodId) =>
        set((state) => {
          state.setSuccessMessage("Item deleted successfully");
          return {
            diet: state.diet.filter((item) => item.id !== foodId),
          };
        }),
    }),
    {
      name: "diet-store",
    }
  )
);
export default useDietStore;
