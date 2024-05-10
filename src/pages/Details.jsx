import { useContext, useEffect } from "react"
import { GlobalContext } from "../context"
import { useParams } from "react-router-dom"



export default function Detail(){
      const {setRecipeDetailItem,recipeDetailItem} = useContext(GlobalContext)
    const params = useParams()
    useEffect(()=>{
        async function getRecipe(){
            try {
                const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`)
                const {data} = await res.json()
                console.log(data.recipe)
                setRecipeDetailItem(data.recipes)
                
            } catch (error) {
                console.log(error)
                
            }
        }
        getRecipe()

    },[])
    console.log(recipeDetailItem)
    return <div className="text-3xl font-semibold text-indigo-700">
       {recipeDetailItem?.title}
    </div>
}