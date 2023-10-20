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
    <div className="w-full flex justify-center flex-col items-center">
      <RecipeSearch />
      <div className="">
        {searchParams.q !== undefined ? (
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
        ) : (
          <p>Lets search recipes </p>
        )}
      </div>
    </div>
  );
}

export default RecipeExplorer;
