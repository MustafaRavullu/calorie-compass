import RecipeCard from "@/components/recipe-card";
import RecipeSearch from "@/components/recipe-search";

async function getRecipes(url) {
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
    <div className="w-full h-full flex justify-start flex-col items-center">
      <RecipeSearch />
      <div className="w-full h-full my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4">
        {searchParams.q === "" || recipes.hits.length === 0 ? (
          <>
            <p className="flex justify-center animate-bounce col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 text-lg">
              {`Let's search recipes!`}
            </p>
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
