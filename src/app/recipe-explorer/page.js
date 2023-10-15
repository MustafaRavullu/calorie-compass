"use client";

import Link from "next/link";
import useAppStore from "@/store/app";
import { useGetFromStore, useNotification } from "@/hooks";
import Notification from "@/components/notification";

function RecipeExplorer() {
  // STATES
  const addFoodToDiet = useAppStore((state) => state.addFoodToDiet);
  const successMessage = useGetFromStore(
    useAppStore,
    (state) => state.successMessage
  );
  const errorMessage = useGetFromStore(
    useAppStore,
    (state) => state.errorMessage
  );

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
              addFoodToDiet({
                id: 1,
                title: "hamburger",
                calories: 500,
                eaten: false,
              });
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
              addFoodToDiet({
                id: 2,
                title: "pizza",
                calories: 400,
                eaten: false,
              });
              setShowMessage(true);
            }}
          >
            Add food
          </button>
        </div>
        <div className="flex flex-col">
          <p>title: pasta</p>
          <p>calories: 1000</p>
          <button
            type="button"
            className="bg-green-500 p-3"
            onClick={() => {
              addFoodToDiet({
                id: 3,
                title: "pasta",
                calories: 1000,
                eaten: false,
              });
              setShowMessage(true);
            }}
          >
            Add food
          </button>
        </div>
        <div className="flex flex-col">
          <p>title: berry</p>
          <p>calories: 600</p>
          <button
            type="button"
            className="bg-green-500 p-3"
            onClick={() => {
              addFoodToDiet({
                id: 4,
                title: "berrry",
                calories: 600,
                eaten: false,
              });
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
