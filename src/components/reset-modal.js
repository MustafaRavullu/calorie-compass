import Link from "next/link";
import { handleReset } from "@/utils";
import { forwardRef } from "react";

const ResetModal = forwardRef(({ resetEverything }, ref) => {
  function closeResetModal() {
    ref.current.close();
  }
  return (
    <dialog
      ref={ref}
      className="z-50 border-2 border-cc_text text-center
   backdrop:bg-gray-900/20 open:flex open:flex-col block
    opacity-0 -translate-y-20 transition-[opacity, transform]
     duration-300 pointer-events-none open:pointer-events-auto
      [&[open]]:opacity-100 [&[open]]:translate-y-0 inset-0"
    >
      <p
        className="w-full border-b-2 border-cc_text  py-2 font-extrabold
   text-xl"
      >
        Reset your account
      </p>
      <div className="flex flex-col p-2">
        <div className="flex flex-col my-2 gap-3">
          <p className="font-semibold text-lg">
            <span className="text-red-500">Warning</span>: If you continue, your
            data will no longer be saved.
          </p>
          <p className="mb-2">Please confirm if you would like to proceed.</p>
        </div>
        <div className="flex flex-col border-t border-cc_text py-2 gap-2">
          <button
            type="button"
            onClick={closeResetModal}
            className="border-4 transition-all duration-300 ease-in-out
         border-cc_dark_secondary bg-cc_secondary p-2 mt-3
          hover:bg-cc_dark_secondary hover:text-cc_dark_text"
          >
            Nevermind, I do not want to reset
          </button>
          <Link
            href="/"
            onClick={() => handleReset(resetEverything)}
            className="border-4 border-cc_dark_accent bg-cc_accent
         p-2 transition-all duration-300 ease-in-out
          hover:bg-cc_dark_accent hover:text-cc_dark_text"
          >
            Yes, reset!
          </Link>
        </div>
      </div>
    </dialog>
  );
});

ResetModal.displayName = "ResetModal";

export default ResetModal;
