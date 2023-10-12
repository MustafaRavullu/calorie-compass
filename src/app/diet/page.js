"use client";

import CalorieBar from "@/components/calorie-bar";
import useUserStore from "@/store/user";
import { useRouter } from "next/navigation";
import DietList from "@/components/diet-list";
import useDietStore from "@/store/diet";
import Link from "next/link";
import Notification from "@/components/notification";
import { useGetFromStore, useNotification } from "@/hooks";

function Diet() {
  // STATES
  const setIsUserAuthorized = useUserStore(
    (state) => state.setIsUserAuthorized
  );
  const setCompletedDailyCalorieNeed = useUserStore(
    (state) => state.setCompletedDailyCalorieNeed
  );
  const setDailyCalorieNeed = useUserStore(
    (state) => state.setDailyCalorieNeed
  );
  const [showMessage, setShowMessage] = useNotification(3000);
  const successMessage = useGetFromStore(
    useDietStore,
    (state) => state.successMessage
  );

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
      <div className="flex text-3xl">
        <Link href="/recipe-explorer">Recipe Explorer</Link>
        <Link href="/diet">Diet</Link>
      </div>
      <CalorieBar />
      <button type="button" onClick={handleReset}>
        reset progress
      </button>
      <Notification
        active={showMessage}
        successMessage={successMessage}
        errorMessage=""
      />
      <DietList setShowMessage={setShowMessage} />
    </main>
  );
}

export default Diet;
