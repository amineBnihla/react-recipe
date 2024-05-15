import { createContext, useEffect, useState } from "react";


export const GlobalContext = createContext("")

export default function GlobalComppopnentContext({children}){
    const [recipeList,setRecipeList]= useState([])
    const [loading,setLoading] = useState(false)
    const [search,setSearch] = useState("")
    const [error,setError] = useState("")
    const [recipeDetailItem,setRecipeDetailItem] = useState(null)
     const [favouriteList,setFavouriteList]= useState([])
     async function getRecipes(e){
     e.preventDefault()
         setLoading(true)
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`)
            const {data} = await res.json()
            console.log(data)
            setRecipeList(data.recipes)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setError(error)
            setLoading(false)
        }

     }

     function toggleFavourite(recipeItem){
     const index = favouriteList.findIndex((res)=> res.id == recipeItem.id)
     const tempFavourites = [...favouriteList]
    if(index == -1){
        tempFavourites.push(recipeItem)
    }else{
        tempFavourites.splice(index)
    }
    console.log(index, tempFavourites)
    setFavouriteList(tempFavourites)
     }

    return <GlobalContext.Provider value={{search,setSearch,getRecipes,recipeList,error,loading,recipeDetailItem,setRecipeDetailItem,favouriteList,toggleFavourite}}>
        {children}
    </GlobalContext.Provider>
}