"use client";
import Link from "next/link";
import { useState } from "react";

function RecipeSearch() {
  const [query, setQuery] = useState("");
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="recipe"
          className="bg-black text-white p-3"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Link
          href={`?q=${query}`}
          type="button"
          className="bg-gray-500 text-white p-2 ml-3"
        >
          Search
        </Link>
      </form>
    </>
  );
}

export default RecipeSearch;
