import { useContext } from "react"
import { GlobalContext } from "../context"
import RecipeItem from "../components/Recipe_item"



export default function Home(){
    
    const {recipeList,loading,error} = useContext(GlobalContext)
    console.log(recipeList)
    return <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
    {
      recipeList.map((rec)=>{
   return <RecipeItem recipe={rec} key={rec.id}/>
         
      })

    }
     

    </div>
}