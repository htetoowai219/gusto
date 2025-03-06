import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { Recipe } from "../types/Recipe";

function RecipePage() {
  const [recipe, setRecipes] = useState<Recipe | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const { id } = useParams();
  useEffect(() => {
    const getSingleRecipe = async () => {
      try {
        setLoading(true)
        const response = await fetch(`http://dummyjson.com/recipes/${id}`)
        if(response.status !== 200){
          return setRecipes(null)
        }
        const data = await response.json()
        setRecipes(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    getSingleRecipe()
  }, [id])

  return (
    <>
      { loading && <p>Loading...</p>}
      { !loading && !recipe && <p>No Recipe Found.</p> }  
      { !loading && recipe &&
      <main className="grid grid-cols-2 gap-6">
        <img src={recipe?.image} alt={recipe?.name} />
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">{recipe?.name}</h2>
          <p className="text-sm font-medium">{recipe?.difficulty}</p>
          <p className="text-xs font-medium">{recipe?.rating}</p>
          <p className="font-medium mb-2">Ingredients</p>
          <ol className="list-decimal ps-6">
            {recipe?.ingredients.map((ing, index) => (
              <li key={index}>
                {ing}
              </li>
            ))}
          </ol>
          <p className="font-medium mb-2">Instructions</p>
          <ol className="list-decimal ps-6">
            {recipe?.instructions.map((ing, index) => (
              <li key={index}>
                {ing}
              </li>
            ))}
          </ol>
        </div>
      </main>}
    </>
  )
}

export default RecipePage