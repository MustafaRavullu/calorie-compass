"use client";

import CalorieBar from "@/components/calorie-bar";
import useAppStore from "@/store/app";
import { useRouter } from "next/navigation";
import DietList from "@/components/diet-list";
import Notification from "@/components/notification";
import { useGetFromStore, useNotification } from "@/hooks";

function Diet() {
  return (
    <main className="w-full">
      <CalorieBar />
      <DietList />
    </main>
  );
}

export default Diet;
