"use client";

import Link from "next/link";
import { useLayoutEffect } from "react";
import useAppStore from "@/store/app";
import { useRouter } from "next/navigation";
import { useGetFromStore } from "@/hooks";

function Landing() {
  const isUserAuthorized = useGetFromStore(
    useAppStore,
    (state) => state.isUserAuthorized
  );

  const router = useRouter();
  useLayoutEffect(() => {
    if (isUserAuthorized) {
      router.push("/cc/diet");
    }
  }, [isUserAuthorized, router]);
  return (
    <div>
      <Link href="/calorie-need" className="text-5xl">
        Start
      </Link>
    </div>
  );
}

export default Landing;
