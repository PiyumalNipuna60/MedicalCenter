import { Document, Schema, model } from "mongoose";

interface ILaboratory extends Document{
        userName:string;
        type:string;
};
const LaboratoryScheema =new Schema(

    {
        
        userName:{
            type:String,
            required:true
        },
        type:{
            type:String,
            required:true
        },
       
    }
   
);
export const laboratory=model<ILaboratory>("Laboratory",LaboratoryScheema)

