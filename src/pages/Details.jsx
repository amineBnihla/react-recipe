import { useContext, useEffect } from "react"
import { GlobalContext } from "../context"
import { useParams } from "react-router-dom"



export default function Detail(){
      const {setRecipeDetailItem,recipeDetailItem,toggleFavourite,favouriteList} = useContext(GlobalContext)
    const params = useParams()
    useEffect(()=>{
        async function getRecipe(){
            try {
                const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`)
                const {data} = await res.json()
                console.log(data)
                setRecipeDetailItem(data.recipe)
                
            } catch (error) {
                console.log(error)
               
            }
        }
        getRecipe()

    },[])
   
    return <div className="flex gap-20 justify-center">

        <div>       
     <img src={recipeDetailItem?.image_url} alt={recipeDetailItem?.title} className="w-[600px] max-w-full h-[400px] relative rounded-md object-cover" />
        </div>
        <div>
      <h1 className="text-sm font-semibold text-gray-700 mb-3">{recipeDetailItem?.publisher}</h1> 
      <h1 className="text-4xl font-semibold text-gray-900">{recipeDetailItem?.title}</h1> 
      <button className="text-white font-medium text-lg mt-3 bg-black rounded-md px-3 py-2" onClick={()=>toggleFavourite(recipeDetailItem)}  >
        {
          favouriteList.find((fav)=> fav.id == recipeDetailItem.id) ?
          "REMOVE FROM FAVORITES"
          :
        "ADD TO FAVORITES"
        }
        
        </button>
      <ul className="mt-10">
        {
          recipeDetailItem?.ingredients && recipeDetailItem?.ingredients.length > 0 ?  recipeDetailItem.ingredients.map((ing,index)=>{
                
            return   <li key={index} >{ing.quantity && <span className="mr-2">{ing.quantity}</span> }<span>{ing.description}</span></li>
            })
            : null
        }
      </ul>
        </div>
    </div>
}