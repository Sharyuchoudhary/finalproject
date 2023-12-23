import jwt from "jsonwebtoken";

export default async function getdatafromtoken (request) 
{

    try {
        
        const token = request.cookies.get('token')?.value || '' ; 

        const decodedtoken = jwt.verify(token , 'finalproject')
        console.log(decodedtoken.id);
        return decodedtoken.id ;
        
    } catch (error) {
        console.log(error);
    }


}
