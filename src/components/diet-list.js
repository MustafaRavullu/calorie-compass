"use client";

import useDietStore from "@/store/diet";
import { useGetFromStore } from "@/hooks";

function DietList({ setShowMessage }) {
  // STATES
  const diet = useGetFromStore(useDietStore, (state) => state.diet);
  const removeFoodFromDiet = useDietStore((state) => state.removeFoodFromDiet);

  return (
    <div>
      {diet?.length === 0 ? (
        <p>You have no food in your diet</p>
      ) : (
        diet?.map((item) => (
          <div key={item.id} className="flex flex-col p-3">
            <p>title: {item.title}</p>
            <p>calories: {item.calories}</p>

            <button
              type="button"
              className="bg-red-500 p-3"
              onClick={() => {
                removeFoodFromDiet(item.id);
                setShowMessage(true);
              }}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default DietList;
