import jwt from "jsonwebtoken";

export default async function (request) 
{

    try {
        
        const token = request.cookies.get('token')?.value || '' ; 

        const decodedtoken = jwt.verify(token , 'finalproject')
        
        return decodedtoken.id ;
        
    } catch (error) {
        console.log(error);
    }


}
