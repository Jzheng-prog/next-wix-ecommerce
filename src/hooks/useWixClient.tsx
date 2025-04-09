'use client'
import { useContext } from "react"
import { WixClientContext } from "@/context/wixContext"


export const useWixClient = ()=>{

    const context = useContext(WixClientContext)

    if(!context || context===undefined || context === null){
        throw new Error("WixClientContext is missing.");
    }
    return context
}