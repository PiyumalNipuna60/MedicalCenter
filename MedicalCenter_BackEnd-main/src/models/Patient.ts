import { Document, Schema, model } from "mongoose";

interface IPatient extends Document{
        email:string;
        userName:string;
        password:string;
};
const PatientScheema =new Schema(

    {
        email:{
            type:String,
            required:true
        },
        userName:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
   
);
export const Patient=model<IPatient>("Patient",PatientScheema)

