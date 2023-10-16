"use client";
import { useGetFromStore, useNotification } from "@/hooks";
import useAppStore from "@/store/app";

function Notification() {
  const successMessage = useGetFromStore(
    useAppStore,
    (state) => state.successMessage
  );
  const errorMessage = useGetFromStore(
    useAppStore,
    (state) => state.errorMessage
  );
  const [showMessage, setShowMessage] = useNotification(3000);

  return (
    <>
      {showMessage &&
        (successMessage ? (
          <div className="bg-green-500 p-1">{successMessage}</div>
        ) : (
          <div className="bg-red-500 p-1">{errorMessage}</div>
        ))}
    </>
  );
}

export default Notification;
