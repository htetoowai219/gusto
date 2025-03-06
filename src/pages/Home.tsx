import { useEffect, useState } from "react"
import { Recipe } from "../types/Recipe"
import Card from "../components/Card"

function Home() {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        const getRecipes = async () => {
            try {
                setLoading(true)
                const response = await fetch("http://dummyjson.com/recipes?limit=8")
                const data = await response.json()
                setRecipes(data.recipes)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        getRecipes() 
    }, [])
  return (
    <main className="grid grid-cols-4 gap-6">
        {
            !loading ?
            recipes.map((recipe) => (
                <Card recipe={recipe} key={recipe.id}/>
            )) :
            <p className="text-center">Recipes are loading...</p>
        }   
    </main>
  )
}

export default Home