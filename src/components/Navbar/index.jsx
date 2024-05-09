import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context";





export default function Navbar(){

    const {search,setSearch,getRecipes} = useContext(GlobalContext)

    return(
        <>
       <div className="flex justify-between items-center h-20 shadow-[0px_10px_27px_-7px_rgba(0,0,0,0.21)] w-full px-10">
         <span className="logo"><Link to='/' className="text-green-950 text-3xl font-semibold">Recipe</Link></span>
        <form action="">
      <input type="text" value={search} onInput={(e)=>setSearch(e.target.value)} className=" border-none rounded-xl shadow-md outline-none w-[300px] shadow-red-100 px-3 py-2" placeholder="Search Recipe..." />
        <button onClick={getRecipes} >Recherche</button>
        </form>
        <ul className="flex gap-4">
             <li><Link to='/details' className="text-black/50  hover:text-black/80 text-lg font-medium">Detail</Link></li>
             <li><Link to='/Favourites' className="text-black/50 hover:text-black/80  text-lg font-medium">Favourites</Link></li>
        </ul>
        
        
          </div>

        </>
    )

}