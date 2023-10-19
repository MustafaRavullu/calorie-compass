"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { calculateDailyCalorieNeed, hasEmptyValue } from "@/utils";
import useAppStore from "@/store/app";
import { useGetFromStore } from "@/hooks";

function CalorieNeed() {
  // HOOKS
  const calorieNeedModal = useRef(null);

  // STATES
  const [calorieNeedCalculationInfo, setCalorieNeedCalculationInfo] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "",
    activityLevel: "",
    goal: "",
  });
  const dailyCalorieNeed = useGetFromStore(
    useAppStore,
    (state) => state.dailyCalorieNeed
  );
  const setDailyCalorieNeed = useAppStore((state) => state.setDailyCalorieNeed);
  const setIsUserAuthorized = useAppStore((state) => state.setIsUserAuthorized);
  // keeps track of missing input values to inform user that they are missing values
  const [isEmptyValueDetected, setIsEmptyValueDetected] = useState(false);

  // FUNCTIONS

  function handleDailyCalorieNeedCalculation() {
    if (!hasEmptyValue(calorieNeedCalculationInfo)) {
      setIsEmptyValueDetected(false);
      calorieNeedModal?.current?.showModal();
      setIsUserAuthorized(true);
      setDailyCalorieNeed(
        Math.floor(calculateDailyCalorieNeed(calorieNeedCalculationInfo))
      );
    } else {
      setIsEmptyValueDetected(true);
    }
  }

  return (
    <main>
      <p>Calorie Calculation Page</p>

      {/* Error message if there is a missing value on the form submit */}
      {isEmptyValueDetected && (
        <p className="text-red-500">There is a missing value.</p>
      )}

      {/* Calorie need calculation form */}
      <form className="flex flex-col">
        <input
          type="number"
          placeholder="weight"
          value={calorieNeedCalculationInfo.weight}
          onChange={(event) =>
            setCalorieNeedCalculationInfo({
              ...calorieNeedCalculationInfo,
              weight: Number(event.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="height"
          value={calorieNeedCalculationInfo.height}
          onChange={(event) =>
            setCalorieNeedCalculationInfo({
              ...calorieNeedCalculationInfo,
              height: Number(event.target.value),
            })
          }
        />
        <input
          type="number"
          placeholder="age"
          value={calorieNeedCalculationInfo.age}
          onChange={(event) =>
            setCalorieNeedCalculationInfo({
              ...calorieNeedCalculationInfo,
              age: Number(event.target.value),
            })
          }
        />
        <select
          id="gender"
          value={calorieNeedCalculationInfo.gender}
          onChange={(event) =>
            setCalorieNeedCalculationInfo({
              ...calorieNeedCalculationInfo,
              gender: event.target.value,
            })
          }
        >
          <option value="">Please select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select
          id="activity-level"
          value={calorieNeedCalculationInfo.activityLevel}
          onChange={(event) =>
            setCalorieNeedCalculationInfo({
              ...calorieNeedCalculationInfo,
              activityLevel: event.target.value,
            })
          }
        >
          <option value="">Please select</option>
          <option value="sedentary">sedentary</option>
          <option value="lightly-active">lightly active</option>
          <option value="moderately-active">moderately active</option>
          <option value="very-active">very active</option>
          <option value="extra-active">extra active</option>
        </select>
        <select
          id="goal"
          value={calorieNeedCalculationInfo.goal}
          onChange={(event) =>
            setCalorieNeedCalculationInfo({
              ...calorieNeedCalculationInfo,
              goal: event.target.value,
            })
          }
        >
          <option value="">please select</option>
          <option value="gain">gain</option>
          <option value="maintain">maintain</option>
          <option value="lose">lose</option>
        </select>
        <button type="button" onClick={handleDailyCalorieNeedCalculation}>
          Calculate
        </button>
      </form>

      {/* Modal to show the calculated calorie need */}
      <dialog ref={calorieNeedModal}>
        <p>
          This is your daily calorie goal to {calorieNeedCalculationInfo.goal}{" "}
          weight
        </p>
        <span>{dailyCalorieNeed}</span>
        <Link href="/cc/diet">Continue</Link>
      </dialog>
    </main>
  );
}

export default CalorieNeed;
