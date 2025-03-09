import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections, products } from "@wix/stores";
import { cookies } from "next/headers";


export const wixClientSever = async ()=>{

    let refreshToken;
    try {
        const cookieStore = cookies()
        refreshToken = JSON.parse(cookieStore.get('refreshToken')?.value  || "{}" )
    } catch (error) {
        console.log(error)
    }

    const myWixClient = createClient({
        modules: {
        products,
        collections
        //   currentCart,s
        },
        auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
        tokens: {
            refreshToken, accessToken:{value:'', expiresAt:0}
        },
        }),
    });
    return myWixClient;
}
