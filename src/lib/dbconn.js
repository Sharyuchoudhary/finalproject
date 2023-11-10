import mongoose from "mongoose";


export default async function Connect()
{


try {

await mongoose.connect("mongodb+srv://patekarkartik:KPMONGO@mongo.xwwzj6m.mongodb.net/FINALYEAR?retryWrites=true&w=majority")
    console.log(" CONNECTION ESTABLSIHED !");
} catch (error) {
    console.log(" CONNECTION NOT ESTABLSIHED !");
}



}