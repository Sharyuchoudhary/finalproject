import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export default async function getdatafromtoken (request) 
{

    try {
        
        const token = request.cookies.get('token')?.value || '' ; 
        if(!token)
        {
          return NextResponse.json({"msg" : "UNSUCKTOKEN"})

        }

        const decodedtoken = jwt.verify(token , 'finalproject')
        if(!decodedtoken){

          return NextResponse.json({"msg" : "UNSUCKDECODEDTOKEN" , "id" : decodedtoken.id})

        }
        return decodedtoken.id ;
        
    } catch (error) {
        console.log(error);
    }


}
