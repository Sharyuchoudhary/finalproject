export const dynamic = 'force-dynamic'

import jwt from "jsonwebtoken";
import {cookies} from "next/headers"


async function getCookieData() {

 try {
        const cookieStore = cookies()
        const theme = cookieStore.get('token')
        const token = theme.value 
        return token
 } catch (error) {
    console.log("The error from getcookiefromdata" , error);
 }   

}



export default async function getdatafromtoken () 
{

    try {
        const token = await getCookieData()
        const decodedtoken = jwt.verify(token , 'finalproject')
        return decodedtoken.id ;
    } catch (error) {
        console.log("the error is from getdatafromtoken !" , error);
    }
}




