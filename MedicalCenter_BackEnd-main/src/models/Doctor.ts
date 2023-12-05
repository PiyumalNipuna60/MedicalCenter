import { Document, Schema, model } from "mongoose";

interface IDoctor extends Document{
        DId:string;
        DName:string;
        position:string;
        time:string;
        contact:string;
        DCharge:number;
        wardNo:number;
};
const DoctorScheema =new Schema(

    {
        DId:{
            type:String,
            required:true
        },
        DName:{
            type:String,
            required:true
        },
        position:{
            type:String,
            required:true
        },
        time:{
            type:String,
            required:true
        },
        contact:{
            type:String,
            required:true
        },
        DCharge:{
            type:Number,
            required:true
        },
        wardNo:{
            type:Number,
            required:true
        }
    }
   
);
export const Doctor = model<IDoctor>("Doctor",DoctorScheema);
