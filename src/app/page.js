"use client";

import Link from "next/link";
import { useEffect } from "react";
import useAppStore from "@/store";
import { useRouter } from "next/navigation";

export default function Home() {
  // STATES
  const isUserAuthorized = useAppStore((state) => state.isUserAuthorized);

  // HOOKS
  const router = useRouter();
  useEffect(() => {
    if (isUserAuthorized) {
      router.push("/diet");
    }
  }, []);
  return (
    <main>
      <p>Landing Page</p>
      <Link href="/calorie-need">Start</Link>
    </main>
  );
}
