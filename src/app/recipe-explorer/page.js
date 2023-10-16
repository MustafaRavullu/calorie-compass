import Link from "next/link";
import Notification from "@/components/notification";
import RecipeSearch from "@/components/recipe-search";

async function getRecipes(url) {
  const response = await fetch(url, { cache: "no-store" });
  return response.json();
}

async function RecipeExplorer({ searchParams }) {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchParams.q}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}&random=true`;
  const recipes = await getRecipes(url);
  return (
    <div>
      <div className="flex text-3xl">
        <Link href="/recipe-explorer">Recipe Explorer</Link>
        <Link href="/diet">Diet</Link>
      </div>

      <Notification />
      <RecipeSearch />

      {searchParams.q !== undefined &&
        recipes.hits.map((item) => (
          <p key={item.recipe.label}>{item.recipe.label}</p>
        ))}
    </div>
  );
}

export default RecipeExplorer;
