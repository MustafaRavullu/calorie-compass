"use client";

import { useGetFromStore } from "@/hooks";
import useAppStore from "@/store/app";
import { useState, useEffect } from "react";

function CircleCalorieBar() {
  const calorieBarPercentage = useGetFromStore(
    useAppStore,
    (state) => state.calorieBarPercentage
  );

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (percentage < calorieBarPercentage) {
        setPercentage(percentage + 1);
      }
    }, 30); // Change the delay time (in milliseconds) as needed

    return () => clearTimeout(timer);
  }, [percentage, calorieBarPercentage]);

  return (
    <div className="relative w-[300px] h-[300px]">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-gray-200 stroke-current"
          strokeWidth="10"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        ></circle>

        <circle
          className="text-cc_green  progress-ring__circle stroke-current"
          strokeWidth="10"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          strokeDashoffset={`calc(250 - (250 * ${percentage}) / 100)`}
        ></circle>

        <text
          x="50"
          y="50"
          fontFamily="Verdana"
          fontSize="12"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {Math.trunc(percentage)}%
        </text>
      </svg>
    </div>
  );
}

export default CircleCalorieBar;
