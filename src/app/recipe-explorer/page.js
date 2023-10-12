"use client";

import Link from "next/link";
import useDietStore from "@/store/diet";
import { useGetFromStore, useNotification } from "@/hooks";
import { useEffect, useState } from "react";
import Notification from "@/components/notification";

function RecipeExplorer() {
  // STATES
  const addFoodToDiet = useDietStore((state) => state.addFoodToDiet);
  const successMessage = useGetFromStore(
    useDietStore,
    (state) => state.successMessage
  );
  const errorMessage = useGetFromStore(
    useDietStore,
    (state) => state.errorMessage
  );
  // sets the message that informs the user for adding food

  // HOOKS
  const [showMessage, setShowMessage] = useNotification(3000);
  return (
    <div>
      <div className="flex text-3xl">
        <Link href="/recipe-explorer">Recipe Explorer</Link>
        <Link href="/diet">Diet</Link>
      </div>
      <Notification
        active={showMessage}
        successMessage={successMessage}
        errorMessage={errorMessage}
      />
      <div className="flex flex-col">
        <div className="flex flex-col">
          <p>title: hamburger</p>
          <p>calories: 500</p>
          <button
            type="button"
            className="bg-green-500 p-3"
            onClick={() => {
              addFoodToDiet({ id: 1, title: "hamburger", calories: 500 });
              setShowMessage(true);
            }}
          >
            Add food
          </button>
        </div>
        <div className="flex flex-col">
          <p>title: pizza</p>
          <p>calories: 400</p>
          <button
            type="button"
            className="bg-green-500 p-3"
            onClick={() => {
              addFoodToDiet({ id: 2, title: "pizza", calories: 400 });
              setShowMessage(true);
            }}
          >
            Add food
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeExplorer;
