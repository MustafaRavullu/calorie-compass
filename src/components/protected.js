"use client";

import useAppStore from "@/store/app";
import { useGetFromStore } from "@/hooks";

function Protected({ children }) {
  const isUserAuthorized = useGetFromStore(
    useAppStore,
    (state) => state.isUserAuthorized
  );
  return <>{isUserAuthorized && children}</>;
}

export default Protected;
