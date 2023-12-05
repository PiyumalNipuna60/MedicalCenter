import { Document, Schema, model } from "mongoose";

interface IChannelling extends Document{
        appoinmentNo:number;
        userName:string;
        channelingDate:string;
        
};
const ChannellingScheema =new Schema(

    {
        appoinmentNo:{
            type:Number,
            required:true
        },
        userName:{
            type:String,
            required:true
        },
        channelingDate:{
            type:String,
            required:true
        }
    }
   
);
export const Channelling=model<IChannelling>("Channelling",ChannellingScheema)

