'use client'
import { useContext, useEffect } from "react"
import { WixClientContext } from "@/context/wixContext"


export const useWixClient = ()=>{

    const context = useContext(WixClientContext)

    if(!context || context===undefined || context === null){
        console.log('Fail to load Context')
    }
    return context
}