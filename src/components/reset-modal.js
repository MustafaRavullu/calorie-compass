import Link from "next/link";
import { handleReset } from "@/utils";
import { forwardRef } from "react";
import Button from "./button";

const ResetModal = forwardRef(({ resetEverything }, ref) => {
  function closeResetModal() {
    ref.current.close();
  }
  return (
    <dialog
      ref={ref}
      className="z-50 border border-black text-center
   backdrop:bg-gray-900/20 open:flex open:flex-col open:justify-between block
    opacity-0 -translate-y-20 transition-[opacity, transform]
     duration-300 pointer-events-none open:pointer-events-auto
      [&[open]]:opacity-100 [&[open]]:translate-y-0 inset-0 rounded-[5px] lg:w-[800px] lg:h-[310px]"
    >
      <p
        className="w-full border-b border-black  py-[20px] font-extrabold
   text-xl"
      >
        Reset Your Account
      </p>
      <div className="flex flex-col items-center my-2 mx-6 ">
        <span className="text-red-500 text-lg font-semibold ">Warning!</span>
        <p className="font-semibold flex flex-col text-lg py-3 px-4">
          If you continue, your data will no longer be saved.
        </p>
        <p className="mb-2">Please confirm if you would like to proceed.</p>
      </div>
      <div className="flex justify-center border-t border-black py-4 gap-2">
        <Button
          menu=""
          href=""
          content="Go back!"
          color="default"
          onClickFunc={closeResetModal}
        />
        <Button
          menu=""
          href="/"
          content="Yes, reset!"
          color="red"
          onClickFunc={() => handleReset(resetEverything)}
        />
      </div>
    </dialog>
  );
});

ResetModal.displayName = "ResetModal";

export default ResetModal;
