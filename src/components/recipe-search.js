"use client";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { BsArrowCounterclockwise } from "react-icons/bs";
function RecipeSearch() {
  const [value, setValue] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="pr-2 z-[1] flex items-center justify-center  sticky top-[var(--top-margin)]
 mt-4 w-full bg-white text-cc_text border pl-3 border-black rounded-sm 
  lg:top-[var(--lg-top-margin)] focus-within:ring-2 focus-within:ring-cc_accent"
    >
      <BsSearch />
      <input
        type="text"
        placeholder="Search for recipes "
        className="outline-none p-3 w-full"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            router.push(`?q=${value}`);
            router.refresh();
          }
        }}
        onClick={(e) => e.target.select()}
      />
      {searchParams.get("q") && (
        <button
          className="hover:bg-gray-300/50 rounded-full p-3"
          type="button"
          onClick={() => router.refresh()}
        >
          <BsArrowCounterclockwise className="text-xl" />
        </button>
      )}
    </form>
  );
}

export default RecipeSearch;
