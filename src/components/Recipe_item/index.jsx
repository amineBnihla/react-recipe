
import  {Link} from 'react-router-dom'
 

export default function RecipeItem({recipe}){
    
    return <div className="rounded-md flex flex-col shadow-md px-4 py-5">
        <img src={recipe?.image_url} alt={recipe?.title} className="w-full rounded-md h-[300px] object-cover aspect-square" />
        <div className="py-5 flex-grow flex flex-col justify-between">
        <h2 className="text-xl font-medium">{recipe?.title}</h2>
        <p className="text-slate-600 text-sm font-medium mt-6">{recipe?.publisher}</p>
        </div>
        <Link className="bg-gray-800 rounded-md  text-white font-medium text-lg w-fit py-2 px-3"  to={`/details/${recipe?.id}`} >Show Detail</Link>
    </div>
}