"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { calculateDailyCalorieNeed } from "@/utils";
import useAppStore from "@/store";

function CalorieNeed() {
  // Hooks
  const calorieNeedModal = useRef(null);

  // States
  const [calorieNeedCalculationInfo, setCalorieNeedCalculationInfo] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "",
    activityLevel: "",
    goal: "",
  });
  const dailyCalorieNeed = useAppStore((state) => state.dailyCalorieNeed);
  const setDailyCalorieNeed = useAppStore((state) => state.setDailyCalorieNeed);
  const [isMissingValue, setIsMissingValue] = useState(false);

  // Functions
  /**
   *
   * @param {object} obj
   * @returns {boolean}
   */
  function checkForEmptyValues(obj) {
    for (const key in obj) {
      if (obj[key] === "") {
        return true;
      }
    }
    return false;
  }

  function handleCalorieNeedCalculation() {
    if (!checkForEmptyValues(calorieNeedCalculationInfo)) {
      const calculatedCalorieNeed = Math.floor(
        calculateDailyCalorieNeed(calorieNeedCalculationInfo)
      );
      setDailyCalorieNeed(calculatedCalorieNeed);
      setIsMissingValue(false);
      calorieNeedModal?.current?.showModal();
      localStorage.setItem(
        "daily-calorie-need",
        JSON.stringify(calculatedCalorieNeed)
      );
    } else {
      setIsMissingValue(true);
    }
  }

  return (
    <main>
      <p>Calorie Calculation Page</p>

      {/* Error message if there is a missing value in the form submit */}
      {isMissingValue && (
        <p className="text-red-500">There is a missing value.</p>
      )}

      {/* Calorie need calculation form */}
      <form className="flex flex-col">
        <input
          id="first-input"
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
        <button type="button" onClick={handleCalorieNeedCalculation}>
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
        <Link href="/diet">Continue</Link>
      </dialog>
    </main>
  );
}

export default CalorieNeed;
