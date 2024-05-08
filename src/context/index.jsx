import { createContext, useState } from "react";


export const GlobalContext = createContext("")

export default function GlobalComppopnentContext({children}){

    const [search,setSearch] = useState("")
    return <GlobalContext.Provider value={{search,setSearch}}>
        {children}
    </GlobalContext.Provider>
}