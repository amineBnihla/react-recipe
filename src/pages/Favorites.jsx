import { Link } from "react-router-dom"
import { GlobalContext } from "../context"
import { useContext } from "react"
export default function Favorites(){
    const {favouriteList} = useContext(GlobalContext)
    console.log(favouriteList)
    return <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {
        favouriteList.map((fav)=>{
   return <div className="rounded-md flex flex-col gap-4 shadow-md  py-4 px-3">
    <div className="relative w-full h-[200px] overflow-hidden">
     <img src={fav.image_url} alt={fav.title} srcset="" className="absolute w-full h-full top-0 left-0 rounded-md hover:scale-105 duration-150" />

    </div>
     <div>
     <span className="text-teal-500">{fav.publisher}</span>
     <h2 className="text-xl font-semibold">{fav.title}</h2>
     </div>
     <Link className="bg-black rounded-md text-white font-medium text-base py-2 px-3 w-fit" to={'/details/'+fav.id}>RECIPE DETAILS</Link>
   </div>
        })

      }
      <div></div>

    </div>
}