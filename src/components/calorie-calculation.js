"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { calculateDailyCalorieNeed, hasEmptyValue } from "@/utils";
import useAppStore from "@/store/app";
import { useGetFromStore } from "@/hooks";
import { IoIosArrowBack } from "react-icons/io";

function CalorieCalculation() {
  const calorieNeedModal = useRef(null);
  const weightRef = useRef(null);
  const heightRef = useRef(null);
  const ageRef = useRef(null);
  const genderRef = useRef(null);
  const activityLevelRef = useRef(null);
  const goalRef = useRef(null);

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
  const [activePage, setActivePage] = useState(1);

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
    <main className="text-sm w-full flex-1 justify-center max-w-[1200px] flex flex-col items-center">
      {/* Error message if there is a missing value on the form submit */}
      {isEmptyValueDetected && (
        <p className="text-red-500">There is a missing value.</p>
      )}

      {/* Calorie need calculation form */}
      <form className="flex flex-col items-center gap-3 h-[550px] max-w-[450px] px-4 lg:px-0 w-full">
        <div className="flex w-full items-center justify-center gap-3">
          <div className="h-[30px] flex gap-2 rounded-md flex-1  ">
            <div className="h-full rounded-md  flex-1 border border-black">
              <div
                className={`h-full rounded-md transition-all duration-500 ease-out bg-[#0DFF8A]  ${
                  activePage >= 1 ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
            <div className="h-full rounded-md  flex-1 border border-black">
              <div
                className={`h-full rounded-md transition-all duration-500 ease-out bg-[#0DFF8A] ${
                  activePage >= 2 ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
            <div className="h-full rounded-md  flex-1 border border-black">
              <div
                className={`h-full rounded-md transition-all duration-500 ease-out bg-[#0DFF8A] ${
                  activePage >= 3 ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
            <div className="h-full rounded-md  flex-1 border border-black">
              <div
                className={`h-full rounded-md transition-all duration-500 ease-out bg-[#0DFF8A] ${
                  activePage >= 4 ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
          </div>
        </div>
        {activePage === 1 && (
          <div className="w-full flex flex-col gap-3 flex-1">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="weight">Weight(kg)</label>
              <input
                ref={weightRef}
                id="weight"
                type="number"
                placeholder="Your weight"
                value={calorieNeedCalculationInfo.weight}
                onChange={(event) =>
                  setCalorieNeedCalculationInfo({
                    ...calorieNeedCalculationInfo,
                    weight: Number(event.target.value),
                  })
                }
                className={`p-5 outline-none rounded-md w-full border border-black remove_arrows focus:border-[#0DFF8A] `}
                min="0"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="height">Height(cm)</label>
              <input
                id="height"
                type="number"
                placeholder="Your height"
                value={calorieNeedCalculationInfo.height}
                onChange={(event) =>
                  setCalorieNeedCalculationInfo({
                    ...calorieNeedCalculationInfo,
                    height: Number(event.target.value),
                  })
                }
                className={`p-5  outline-none rounded-md w-full border border-black
              remove_arrows  focus:border-[#0DFF8A] `}
                min="0"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="age">Age</label>
              <input
                id="age"
                type="number"
                placeholder="Your age"
                value={calorieNeedCalculationInfo.age}
                onChange={(event) =>
                  setCalorieNeedCalculationInfo({
                    ...calorieNeedCalculationInfo,
                    age: Number(event.target.value),
                  })
                }
                className={`p-5  outline-none rounded-md w-full border border-black
              remove_arrows  focus:border-[#0DFF8A] `}
                min="0"
              />
            </div>
          </div>
        )}
        {activePage === 2 && (
          <div className="w-full flex flex-col gap-3 flex-1">
            <div>Gender: </div>
            <div className="w-full flex flex-col gap-4">
              <button
                type="button"
                value="male"
                onClick={(event) =>
                  setCalorieNeedCalculationInfo({
                    ...calorieNeedCalculationInfo,
                    gender: event.target.value,
                  })
                }
                className={`p-5 transition-colors duration-100 ease-in-out rounded-md border border-black  ${
                  calorieNeedCalculationInfo.gender === "male" && "bg-[#0DFF8A]"
                }`}
              >
                Male
              </button>
              <button
                type="button"
                value="female"
                onClick={(event) =>
                  setCalorieNeedCalculationInfo({
                    ...calorieNeedCalculationInfo,
                    gender: event.target.value,
                  })
                }
                className={`border transition-colors duration-100 ease-in-out  border-black p-5 rounded-md ${
                  calorieNeedCalculationInfo.gender === "female" &&
                  "bg-[#0DFF8A]"
                }`}
              >
                Female
              </button>
            </div>
          </div>
        )}
        {activePage === 3 && (
          <div className="w-full flex flex-col gap-3 flex-1">
            <div>Activity Level:</div>
            <div className="w-full flex flex-col gap-4">
              <button
                type="button"
                value="sedentary"
                onClick={(event) =>
                  setCalorieNeedCalculationInfo({
                    ...calorieNeedCalculationInfo,
                    activityLevel: event.target.value,
                  })
                }
                className={` p-5 rounded-md border transition-colors duration-100 ease-in-out  border-black ${
                  calorieNeedCalculationInfo.activityLevel === "sedentary" &&
                  "bg-[#0DFF8A]"
                }`}
              >
                Sedentary
              </button>
              <button
                type="button"
                value="lightly active"
                onClick={(event) =>
                  setCalorieNeedCalculationInfo({
                    ...calorieNeedCalculationInfo,
                    activityLevel: event.target.value,
                  })
                }
                className={` p-5 rounded-md border transition-colors duration-100 ease-in-out  border-black ${
                  calorieNeedCalculationInfo.activityLevel ===
                    "lightly active" && "bg-[#0DFF8A]"
                }`}
              >
                Lightly active
              </button>
              <button
                type="button"
                value="moderately active"
                onClick={(event) =>
                  setCalorieNeedCalculationInfo({
                    ...calorieNeedCalculationInfo,
                    activityLevel: event.target.value,
                  })
                }
                className={` p-5 rounded-md border transition-colors duration-100 ease-in-out  border-black ${
                  calorieNeedCalculationInfo.activityLevel ===
                    "moderately active" && "bg-[#0DFF8A]"
                }`}
              >
                Moderately active
              </button>
              <button
                type="button"
                value="very active"
                onClick={(event) =>
                  setCalorieNeedCalculationInfo({
                    ...calorieNeedCalculationInfo,
                    activityLevel: event.target.value,
                  })
                }
                className={` p-5 rounded-md border transition-colors duration-100 ease-in-out  border-black ${
                  calorieNeedCalculationInfo.activityLevel === "very active" &&
                  "bg-[#0DFF8A]"
                }`}
              >
                Very active
              </button>
              <button
                type="button"
                value="extra active"
                onClick={(event) =>
                  setCalorieNeedCalculationInfo({
                    ...calorieNeedCalculationInfo,
                    activityLevel: event.target.value,
                  })
                }
                className={` p-5 rounded-md border transition-colors duration-100 ease-in-out  border-black ${
                  calorieNeedCalculationInfo.activityLevel === "extra active" &&
                  "bg-[#0DFF8A]"
                }`}
              >
                Extra active
              </button>
            </div>
          </div>
        )}
        {activePage === 4 && (
          <>
            <div className="w-full flex flex-col gap-3 flex-1">
              <div>Goal:</div>
              <div className="w-full flex flex-col gap-4">
                <button
                  type="button"
                  value="gain"
                  onClick={(event) =>
                    setCalorieNeedCalculationInfo({
                      ...calorieNeedCalculationInfo,
                      goal: event.target.value,
                    })
                  }
                  className={` p-5 rounded-md border transition-colors duration-100 ease-in-out  border-black ${
                    calorieNeedCalculationInfo.goal === "gain" && "bg-[#0DFF8A]"
                  }`}
                >
                  Gain
                </button>
                <button
                  type="button"
                  value="maintain"
                  onClick={(event) =>
                    setCalorieNeedCalculationInfo({
                      ...calorieNeedCalculationInfo,
                      goal: event.target.value,
                    })
                  }
                  className={`p-5 rounded-md border transition-colors duration-100 ease-in-out  border-black ${
                    calorieNeedCalculationInfo.goal === "maintain" &&
                    "bg-[#0DFF8A]"
                  }`}
                >
                  Maintain
                </button>
                <button
                  type="button"
                  value="lose"
                  onClick={(event) =>
                    setCalorieNeedCalculationInfo({
                      ...calorieNeedCalculationInfo,
                      goal: event.target.value,
                    })
                  }
                  className={`p-5 rounded-md border transition-colors duration-100 ease-in-out  border-black ${
                    calorieNeedCalculationInfo.goal === "lose" && "bg-[#0DFF8A]"
                  }`}
                >
                  Lose
                </button>
              </div>
            </div>
          </>
        )}
        <div
          className={`flex  items-center w-full gap-3 ${
            activePage === 1 ? "justify-end" : "justify-between"
          }`}
        >
          {activePage !== 1 && (
            <button
              onClick={() => setActivePage((prev) => prev - 1)}
              type="button"
              className=" py-5 border border-black w-1/2  rounded-md"
            >
              Previous
            </button>
          )}
          {activePage !== 4 && (
            <button
              onClick={() => setActivePage((prev) => prev + 1)}
              type="button"
              className="bg-[#0DFF8A] border border-[#0DFF8A] py-5 w-1/2 rounded-md"
            >
              Next
            </button>
          )}
          {activePage === 4 && (
            <button
              className="bg-[#0DFF8A] border border-[#0DFF8A] p-5 w-1/2 rounded-md"
              type="button"
              onClick={handleDailyCalorieNeedCalculation}
            >
              Calculate
            </button>
          )}
        </div>
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

export default CalorieCalculation;
