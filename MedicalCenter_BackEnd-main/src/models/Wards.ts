import { Document, Schema, model } from "mongoose";

interface IWards extends Document{
        woardNo:number;
        d_Id:string;
};
const WardsScheema =new Schema(

    {
        wardNo:{
            type:Number,
            required:true
        },
        d_Id:{
            type:String,
            required:true
        },
       
    }
   
);
export const patient=model<IWards>("Wards",WardsScheema)

