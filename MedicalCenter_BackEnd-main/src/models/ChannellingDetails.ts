import { Document, Schema, model } from "mongoose";

interface IChannellingDetails extends Document{
        appoinmentNo:number;
        p_Name:string;
        p_Age:number;
        p_Address:string;
        appoinmentDate:string;
        d_Name:string;
        d_Charges:number;
        wardNo:number;
        bill:number;
        paymentDAte:string;
        time: string;
    
};
const ChannellingDetailsScheema =new Schema(

    {
        appoinmentNo:{
            type:Number,
            required:true
        },
        p_Name:{
            type:String,
            required:true
        },
        p_Age:{
            type:Number,
            required:true
        },
        p_Address:{
            type:String,
            required:true
        },
        appoinmentDate:{
            type:String,
            required:true
        },
        d_Name:{
            type:String,
            required:true
        },
        d_Charges:{
            type:Number,
            required:true
        },
        wardNo:{
            type:Number,
            required:true
        },
        bill:{
            type:Number,
            required:true
        },
        paymentDAte:{
            type:String,
            required:true
        },
        time:{
            type:String,
            required:true
        },
        

    }
   
);
export const ChannellingDetails=model<IChannellingDetails>("ChannellingDetails",ChannellingDetailsScheema)

