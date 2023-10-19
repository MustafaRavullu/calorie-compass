"use client";
import { useGetFromStore } from "@/hooks";
import useAppStore from "@/store/app";
import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";

function CC({ children }) {
  const isUserAuthorized = useGetFromStore(
    useAppStore,
    (state) => state.isUserAuthorized
  );
  const router = useRouter();
  useLayoutEffect(() => {
    if (isUserAuthorized === false) {
      router.push("/");
    }
  }, [isUserAuthorized, router]);
  return <>{children}</>;
}

export default CC;
