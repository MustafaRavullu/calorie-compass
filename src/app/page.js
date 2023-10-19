"use client";

import Link from "next/link";
import { useLayoutEffect } from "react";
import useAppStore from "@/store/app";
import { useRouter } from "next/navigation";
import { useGetFromStore } from "@/hooks";

export default function Home() {
  // STATES
  const isUserAuthorized = useGetFromStore(
    useAppStore,
    (state) => state.isUserAuthorized
  );

  // HOOKS
  const router = useRouter();
  useLayoutEffect(() => {
    if (isUserAuthorized) {
      router.push("/cc/diet");
    }
  }, [isUserAuthorized, router]);
  return (
    <main className="flex justify-center items-center flex-1">
      <Link href="/calorie-need" className="text-5xl">
        Start
      </Link>
    </main>
  );
}
