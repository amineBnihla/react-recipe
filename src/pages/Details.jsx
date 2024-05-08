import { useContext } from "react"
import { GlobalContext } from "../context"



export default function Detail(){
     const {search} = useContext(GlobalContext)
     console.log(search)
    return <div className="text-3xl font-semibold text-indigo-700">Detail</div>
}