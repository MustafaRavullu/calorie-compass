"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { calculateDailyCalorieNeed, hasEmptyValue } from "@/utils";
import useAppStore from "@/store/app";
import { useGetFromStore } from "@/hooks";
import { IoIosArrowBack } from "react-icons/io";
import { PiConfettiFill } from "react-icons/pi";
import Button from "./button";

function CalorieCalculation() {
  const calorieNeedModal = useRef(null);

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
  const [error, setError] = useState(false);

  function handleDailyCalorieNeedCalculation(info) {
    if (info.goal !== "") {
      setError(false);
      calorieNeedModal?.current?.showModal();
      setDailyCalorieNeed(
        Math.floor(calculateDailyCalorieNeed(calorieNeedCalculationInfo))
      );
    } else {
      setError(true);
    }
  }
  function handlePageSkip() {
    if (activePage === 1) {
      if (
        calorieNeedCalculationInfo.weight === "" ||
        calorieNeedCalculationInfo.height === "" ||
        calorieNeedCalculationInfo.age === ""
      ) {
        setError(true);
      } else {
        setError(false);
        setActivePage((prev) => prev + 1);
      }
    } else if (activePage === 2) {
      if (calorieNeedCalculationInfo.gender === "") {
        setError(true);
      } else {
        setError(false);
        setActivePage((prev) => prev + 1);
      }
    } else if (activePage === 3) {
      if (calorieNeedCalculationInfo.activityLevel === "") {
        setError(true);
      } else {
        setError(false);
        setActivePage((prev) => prev + 1);
      }
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
          <div className="h-[30px] flex gap-2 rounded-md flex-1">
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
                className={`p-5 outline-none rounded-md w-full border  remove_arrows  ${
                  calorieNeedCalculationInfo.weight !== "" &&
                  calorieNeedCalculationInfo.weight !== 0
                    ? "border-[#0DFF8A]"
                    : error && "border-red-500"
                }`}
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
                className={`p-5  outline-none rounded-md w-full border 
              remove_arrows   ${
                calorieNeedCalculationInfo.height !== "" &&
                calorieNeedCalculationInfo.height !== 0
                  ? "border-[#0DFF8A]"
                  : error && "border-red-500"
              }`}
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
                className={`p-5  outline-none rounded-md w-full border 
              remove_arrows   ${
                calorieNeedCalculationInfo.age !== "" &&
                calorieNeedCalculationInfo.age !== 0
                  ? "border-[#0DFF8A]"
                  : error && "border-red-500"
              }`}
                min="0"
              />
            </div>
          </div>
        )}
        {activePage === 2 && (
          <div className="relative w-full flex flex-col gap-3 flex-1">
            <div
              className={`text-white opacity-0  transition-all duration-300 ease-out bg-red-500 p-3 rounded-md absolute top-[-100px] left-[100px] ${
                error && "opacity-100 -translate-x-[100px]"
              }`}
            >
              You need to pick one!
            </div>
            <div>Gender: </div>
            <div className="w-full flex flex-col gap-4">
              <button
                type="button"
                value="male"
                onClick={(event) => {
                  setCalorieNeedCalculationInfo({
                    ...calorieNeedCalculationInfo,
                    gender: event.target.value,
                  });
                  setError(false);
                }}
                className={`p-5 transition-colors duration-100 ease-in-out rounded-md border border-black  ${
                  calorieNeedCalculationInfo.gender === "male" && "bg-[#0DFF8A]"
                } `}
              >
                Male
              </button>
              <button
                type="button"
                value="female"
                onClick={(event) => {
                  setCalorieNeedCalculationInfo({
                    ...calorieNeedCalculationInfo,
                    gender: event.target.value,
                  });
                  setError(false);
                }}
                className={`border transition-colors duration-100 ease-in-out  border-black p-5 rounded-md ${
                  calorieNeedCalculationInfo.gender === "female" &&
                  "bg-[#0DFF8A]"
                } s`}
              >
                Female
              </button>
            </div>
          </div>
        )}
        {activePage === 3 && (
          <div className="relative w-full flex flex-col gap-3 flex-1">
            <div
              className={`text-white opacity-0  transition-all duration-300 ease-out bg-red-500 p-3 rounded-md absolute top-[-100px] left-[100px] ${
                error && "opacity-100 -translate-x-[100px]"
              }`}
            >
              You need to pick one!
            </div>
            <div>Activity Level:</div>
            <div className="w-full flex flex-col gap-4">
              <button
                type="button"
                value="sedentary"
                onClick={(event) => {
                  setCalorieNeedCalculationInfo({
                    ...calorieNeedCalculationInfo,
                    activityLevel: event.target.value,
                  });
                  setError(false);
                }}
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
                onClick={(event) => {
                  setCalorieNeedCalculationInfo({
                    ...calorieNeedCalculationInfo,
                    activityLevel: event.target.value,
                  });
                  setError(false);
                }}
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
                onClick={(event) => {
                  setCalorieNeedCalculationInfo({
                    ...calorieNeedCalculationInfo,
                    activityLevel: event.target.value,
                  });
                  setError(false);
                }}
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
                onClick={(event) => {
                  setCalorieNeedCalculationInfo({
                    ...calorieNeedCalculationInfo,
                    activityLevel: event.target.value,
                  });
                  setError(false);
                }}
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
                onClick={(event) => {
                  setCalorieNeedCalculationInfo({
                    ...calorieNeedCalculationInfo,
                    activityLevel: event.target.value,
                  });
                  setError(false);
                }}
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
            <div className="relative w-full flex flex-col gap-3 flex-1">
              <div
                className={`text-white opacity-0  transition-all duration-300 ease-out bg-red-500 p-3 rounded-md absolute top-[-100px] left-[100px] ${
                  error && "opacity-100 -translate-x-[100px]"
                }`}
              >
                You need to pick one!
              </div>
              <div>Goal:</div>
              <div className="w-full flex flex-col gap-4">
                <button
                  type="button"
                  value="gain"
                  onClick={(event) => {
                    setCalorieNeedCalculationInfo({
                      ...calorieNeedCalculationInfo,
                      goal: event.target.value,
                    });
                    setError(false);
                  }}
                  className={` p-5 rounded-md border transition-colors duration-100 ease-in-out  border-black ${
                    calorieNeedCalculationInfo.goal === "gain" && "bg-[#0DFF8A]"
                  }`}
                >
                  Gain
                </button>
                <button
                  type="button"
                  value="maintain"
                  onClick={(event) => {
                    setCalorieNeedCalculationInfo({
                      ...calorieNeedCalculationInfo,
                      goal: event.target.value,
                    });
                    setError(false);
                  }}
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
                  onClick={(event) => {
                    setCalorieNeedCalculationInfo({
                      ...calorieNeedCalculationInfo,
                      goal: event.target.value,
                    });
                    setError(false);
                  }}
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
        <div className={`grid grid-cols-2 w-full gap-3`}>
          {activePage !== 1 && (
            <button
              onClick={() => setActivePage((prev) => prev - 1)}
              type="button"
              className=" py-5 border border-black w-full  rounded-md"
            >
              Previous
            </button>
          )}
          {activePage !== 4 && (
            <button
              onClick={handlePageSkip}
              type="button"
              className="bg-[#0DFF8A] border col-start-2 border-[#0DFF8A] py-5 w-full rounded-md"
            >
              Next
            </button>
          )}
          {activePage === 4 && (
            <button
              className="bg-[#0DFF8A] border border-[#0DFF8A] p-5 w-full rounded-md"
              type="button"
              onClick={() =>
                handleDailyCalorieNeedCalculation(calorieNeedCalculationInfo)
              }
            >
              Calculate
            </button>
          )}
        </div>
      </form>

      {/* Modal to show the calculated calorie need */}
      <dialog
        ref={calorieNeedModal}
        className="p-6 z-50 border border-black text-center
        backdrop:bg-gray-900/20 open:flex open:flex-col open:justify-between block
         opacity-0 -translate-y-20 transition-[opacity, transform]
          duration-300 pointer-events-none open:pointer-events-auto
           [&[open]]:opacity-100 [&[open]]:translate-y-0 inset-0 rounded-[5px] "
      >
        <div className="flex flex-col items-center gap-8">
          <p className="text-2xl text-center">
            Your daily calorie goal to{" "}
            <span className="text-yellow-500">
              {calorieNeedCalculationInfo.goal}
            </span>{" "}
            weight
          </p>
          <div className="flex justify-center items-center gap-3">
            <PiConfettiFill className="-rotate-90 text-6xl text-orange-600" />
            <span className="text-yellow-600 text-4xl">{dailyCalorieNeed}</span>
            <PiConfettiFill className="text-6xl text-orange-600" />
          </div>
          <Button
            menu=""
            type="link"
            href="/cc/diet"
            content="Continue"
            color="default"
            onClickFunc={() => setIsUserAuthorized(true)}
          />
        </div>
      </dialog>
    </main>
  );
}

export default CalorieCalculation;
