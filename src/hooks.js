import { useEffect, useState } from "react";

/**
 * Zustand persist middleware can not work properly beacuse
 * server side states and client side states are different
 * in each page refresh. So we need to merge the states.
 * This function does this.
 */
export function useGetFromStore(store, callback) {
  const result = store(callback);
  const [state, setState] = useState();
  useEffect(() => {
    setState(result);
  }, [result]);
  return state;
}

// Makes a notification appear for a certain amount of time
export function useNotification(time) {
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, time);
    return () => clearTimeout(timer);
  }, [showMessage, time]);
  return [showMessage, setShowMessage];
}
