import { Link } from "react-router";
import { Recipe } from "../types/Recipe"

type CardProps = {
    recipe : Recipe;
}

function Card({recipe}:CardProps) {
  return (
    <Link to={`recipe/${String(recipe.id)}`}>
        <div className="bg-gray-100 p-4 rounded-md">
            <img src={recipe.image} alt={recipe.name} className="rounded-md object-cover"/>
            <h2 className="text-xl font-bold my-2">{recipe.name}</h2>
            <p className="text-sm font-medium">Difficulty - {recipe.difficulty}</p>
            <p className="text-sm font-medium">Rating - {recipe.rating}</p>
        </div>
    </Link>
  )
}

export default Card