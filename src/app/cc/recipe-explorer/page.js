import RecipeSearch from "@/components/recipe-search";
import RecipeCard from "@/components/recipe-card";
import { v4 as uuidv4 } from "uuid";

async function getRecipes(url) {
  const response = await fetch(url, { cache: "no-store" });
  return response.json();
}

async function RecipeExplorer({ searchParams }) {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchParams.q}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}&random=true&field=label&field=image&field=url&field=calories&field=totalTime`;
  const recipes = await getRecipes(url);
  return (
    <div className="w-full h-full flex justify-start flex-col items-center">
      <RecipeSearch />
      <div className="w-full h-full my-4 flex flex-col gap-16">
        {searchParams.q === undefined || recipes.hits.length === 0 ? (
          <p className="flex justify-center animate-bounce text-lg">
            {`Let's search recipes!`}
          </p>
        ) : (
          recipes.hits.map((item) => {
            let id = uuidv4();
            return (
              <RecipeCard
                key={id}
                id={id}
                label={item.recipe.label}
                image={item.recipe.image}
                sourceUrl={item.recipe.url}
                calories={Math.floor(item.recipe.calories)}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default RecipeExplorer;
