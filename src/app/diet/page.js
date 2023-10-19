"use client";

import CalorieBar from "@/components/calorie-bar";
import useAppStore from "@/store/app";
import { useRouter } from "next/navigation";
import DietList from "@/components/diet-list";
import Link from "next/link";
import Notification from "@/components/notification";
import { useGetFromStore, useNotification } from "@/hooks";

function Diet() {
  // STATES
  const setIsUserAuthorized = useAppStore((state) => state.setIsUserAuthorized);
  const setCompletedDailyCalorieNeed = useAppStore(
    (state) => state.setCompletedDailyCalorieNeed
  );
  const setDailyCalorieNeed = useAppStore((state) => state.setDailyCalorieNeed);
  const [showMessage, setShowMessage] = useNotification(3000);
  const successMessage = useGetFromStore(
    useAppStore,
    (state) => state.successMessage
  );
  const errorMessage = useGetFromStore(
    useAppStore,
    (state) => state.errorMessage
  );
  const setSuccessMessage = useAppStore((state) => state.setSuccessMessage);
  const setErrorMessage = useAppStore((state) => state.setErrorMessage);

  // HOOKS
  const router = useRouter();

  return (
    <main>
      <p>Diet page</p>

      <CalorieBar />

      <Notification
        active={showMessage}
        successMessage={successMessage}
        errorMessage={errorMessage}
      />
      <DietList setShowMessage={setShowMessage} />
    </main>
  );
}

export default Diet;
