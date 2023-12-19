    import mongoose from "mongoose";

    const UserSchema  = new mongoose.Schema({


        username:{
            type:String , 
            required:[true , "Please Provide a username"] , 
            unique :true , 
        } , 
    number :{
    type :String , 
    required:[true , "Please Provide a Number"] ,
    unique:true , 
    }

        ,
        email:{
            type:String , 
            required:[true , "Please Provide a email"] , 
            unique :true , 
        } , 
        
        password:{
            type:String , 
            required:[true , "Please Provide a password"] , 
        
        } , 
        
        isVerified:{
        
            type:Boolean , 
            default:false , 
        } , 
        
        isAdmin:{
        
            type:Boolean , 
            default:false , 
        } , 
        
        forgotPasswordToken:String , 
        forgotPasswordTokenExpiry:Date ,
        verifyToken:String , 
        verifyTokenExpiry:Date , 

        clickedIds: {
            type: [mongoose.Schema.Types.ObjectId],  // Array of ObjectIds
            default: [],  // Default value is an empty array
          },
          





    })


    export const User = mongoose.models.User || mongoose.model("User" , UserSchema) 

