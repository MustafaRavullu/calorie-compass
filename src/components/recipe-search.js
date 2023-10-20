"use client";
import Link from "next/link";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

function RecipeSearch() {
  const [query, setQuery] = useState("");
  return (
    <>
      <form
        className="flex justify-center gap-5 sticky top-[var(--top-margin)]
       mt-4 w-full bg-cc_background text-cc_text border-2 border-cc_text 
       sm:w-[var(--sm-content-width)] lg:top-[var(--lg-top-margin)]"
      >
        <input
          type="text"
          placeholder="Search for recipes"
          className="outline-none p-3 w-full bg-transparent"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div>
          <Link
            href={`?q=${query}`}
            type="button"
            className="peer p-3 flex justify-center items-center text-xl 
            border-l-2 border-cc_text bg-[#bfbfbf] h-full"
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
