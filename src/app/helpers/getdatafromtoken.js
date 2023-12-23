// import jwt from "jsonwebtoken";
// import { NextResponse } from "next/server";

// export default async function getdatafromtoken (request) 
// {

//     try {
        
//         const token = request.cookies.get('token')?.value || '' ; 
//         if(!token)
//         {
//           return NextResponse.json({"msg" : "UNSUCKTOKEN"})

//         }

//         const decodedtoken = jwt.verify(token , 'finalproject')
//         if(!decodedtoken){

//           return NextResponse.json({"msg" : "UNSUCKDECODEDTOKEN" , "id" : decodedtoken.id})

//         }
//         return decodedtoken.id ;
        
//     } catch (error) {
//         console.log(error);
//     }


// }
import jwt from "jsonwebtoken";

export default function getdatafromtoken(request) {
  try {
    const token = request.cookies.get("token")?.value || "";
    
    if (!token) {
      throw new Error("No token found");
    }

    const decodedtoken = jwt.verify(token, "finalproject");
    
    if (!decodedtoken || !decodedtoken.id) {
      throw new Error("Invalid or missing user ID in the token");
    }

    return decodedtoken.id;
  } catch (error) {
    // Handle errors appropriately
    console.error("Token validation error:", error.message);
    throw error; // Rethrow the error for the calling code to handle
  }
}
