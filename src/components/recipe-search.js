"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { BsSearch } from "react-icons/bs";

function RecipeSearch() {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  function handleClearInput() {
    setQuery("");
    inputRef.current.focus();
  }
  return (
    <>
      <form
        className=" z-20 flex items-center justify-center gap-3 sticky top-[var(--top-margin)]
       mt-4 w-full bg-white text-cc_text border border-black rounded-sm 
       sm:w-[var(--sm-content-width)] lg:top-[var(--lg-top-margin)] focus-within:ring-2 focus-within:ring-cc_accent"
      >
        <input
          type="text"
          placeholder="Search for recipes "
          className="outline-none p-3 w-full  "
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query !== "" && (
          <button
            className="text-3xl hover:bg-gray-500/20 px-2 py-1 rounded-full 
            outline-none"
            onClick={handleClearInput}
          >
            &#10005;
          </button>
        )}
        <div className="h-[48px]">
          <Link
            href={`?q=${query}`}
            type="button"
            className="peer p-3 flex justify-center items-center text-xl 
            border-l-2 border-cc_text bg-[#bfbfbf] h-full outline-none"
          >
            <BsSearch />
          </Link>
          {/* Tooltip for search button */}
          <p
            className="absolute transition duration-300 ease-in-out opacity-0 
          top-[120%] p-2 -right-3 bg-cc_text text-cc_dark_text rounded-sm 
          md:peer-hover:opacity-100"
          >
            Search
          </p>
        </div>
      </form>
    </>
  );
}

export default RecipeSearch;
