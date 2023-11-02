import RecipeCard from "@/components/recipe-card";
import RecipeSearch from "@/components/recipe-search";
import { BiSearchAlt } from "react-icons/bi";
import { FaWpexplorer } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";

async function getRecipes(url) {
  //
  const response = await fetch(url, { cache: "no-store" });
  return response.json();
}

async function RecipeExplorer({ searchParams }) {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${
    searchParams.q === undefined ? "" : searchParams.q
  }&app_id=${process.env.EDAMAM_APP_ID}&app_key=${
    process.env.EDAMAM_APP_KEY
  }&random=true&field=label&field=image&field=url&field=calories&field=totalTime&field=totalCO2Emissions&field=yield`;
  const recipes = await getRecipes(url);
  return (
    <div className="w-full px-4  h-full flex justify-start flex-col items-center">
      <RecipeSearch />
      <div
        className={`w-full h-full  ${
          searchParams.q === "" || recipes.hits.length === 0
            ? " flex justify-center"
            : "my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        }`}
      >
        {searchParams.q === "" || recipes.hits.length === 0 ? (
          <>
            <div className="flex justify-around w-[300px] sm:w-fit items-center text-sm mt-8 flex-col lg:flex-row gap-5 lg:mt-56">
              <div className="flex flex-col items-center rounded-sm border border-black gap-3 w-[300px] h-[180px]">
                <p className="text-[#7a7a78] pt-2">Step 1</p>
                <BiSearchAlt className="w-14 h-14 rounded-sm" />
                <p className="text-center w-full border-t border-black p-3 ">
                  Search for recipes by name, ingredient, or cuisine...
                </p>
              </div>
              <div className="flex flex-col items-center rounded-sm border border-black gap-3 w-[300px] h-[180px]">
                <p className="text-[#7a7a78] pt-2">Step 2</p>
                <FaWpexplorer className=" w-14 h-14 rounded-sm" />
                <p className="text-center w-full border-t border-black p-3">
                  {`Here you'll find up to 20 delicious recipes that match your search.`}
                </p>
              </div>
              <div className="flex flex-col items-center rounded-sm border border-black gap-3 w-[300px] h-[180px]">
                <p className="text-[#7a7a78] pt-2">Step 3</p>
                <BsCheck className="w-14 h-14 rounded-sm" />
                <p className="text-center w-full border-t border-black p-3">
                  Your Cookbook: Save your favorite recipes here for quick
                  access.
                </p>
              </div>
            </div>
          </>
        ) : (
          recipes.hits.map((item) => {
            return (
              <RecipeCard
                key={item.recipe.totalCO2Emissions}
                id={item.recipe.totalCO2Emissions}
                label={item.recipe.label}
                image={item.recipe.image}
                sourceUrl={item.recipe.url}
                calories={Math.floor(item.recipe.calories / item.recipe.yield)}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default RecipeExplorer;
