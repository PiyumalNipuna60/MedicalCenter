import { Request, RequestHandler, Response } from "express";
import { ChannellingDetails } from "../models/ChannellingDetails";
import { log } from "console";

export default class ChannelingDetailsController{
    

    saveChannellingDEtails:RequestHandler = async (req:Request,res:Response):Promise<Response> => {
        console.log("channellingdetails");
        try {
            let channellingDetails = new ChannellingDetails (req.body);
            let saveChannellingDetails = await channellingDetails.save();
               console.log("channellingDetails saved")    
            return res.status(200).json({message:"save channel",responseData:saveChannellingDetails});
        } catch (error:unknown) {
               console.log("discard")
            if(error instanceof Error){
                return res.status(500).json({message:error});
            }else{
                return res.status(500).json({message:"unknow error"});
            }
        }   
      };
    getAllChannellingDEtails:RequestHandler = async (req:Request,res:Response):Promise<Response> => {
       try {
            let channellingDetails = await ChannellingDetails.find()
            return res.status(200).json({message:"Patient Loaded",responseData:channellingDetails})

        } catch (error:unknown) {
            if(error instanceof Error){
                return res.status(500).json({message:error})
            }else{
                return res.status(500).json({message:"unknow error"})
            }
        }

    };
    updateChannellingDEtails:RequestHandler = async (req:Request,res:Response):Promise<Response> => {
     try {
            let {appoinmentNo} = req.params ;
            let updatechannellingdetails=await ChannellingDetails.findOneAndUpdate({appoinmentNo:appoinmentNo},req.body,{
                new:true,
            });
            return res.status(200).json({message:"Successfully Updated",responseData:updatechannellingdetails})
        } catch (error:unknown) {
            if(error instanceof Error){
                return res.status(500).json({message:error.message})
            }else{
                return res.status(500).json({message:"unknow error!"})
            }
        }    
    };
    
    deleteChannellingDEtails:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

          try {
            let {appoinmentNo} = req.params ;
            let deletechannellingdetails=await ChannellingDetails.findOneAndDelete({appoinmentNo:appoinmentNo});
            if(!deletechannellingdetails){
                throw new Error("Email Not Found!") 
            }
              console.log("deleted Channelling")
            return res.status(200).json({message:"Successfully deleted",responseData:deletechannellingdetails})
        } catch (error:unknown) {
            if(error instanceof Error){
                return res.status(500).json({message:error.message})
            }else{
                return res.status(500).json({message:"unknow error!"})
            }
        }  
    };
     searchAppoinment:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

        try {
            let {appoinmentNo}=req.params;
            let searchAppoinment= await ChannellingDetails.findOne({appoinmentNo:appoinmentNo});
            return res.status(200).json({message:"successfully loaded.AppoinmentDe-tails..!",responseData:searchAppoinment})
        } catch (error:unknown) {
            if(error instanceof Error){
                return res.status(500).json({message:error.message})
            }else{
                return res.status(500).json({message:"unknow error!"})
            }
        }     
     };
      searchAppoinmentByEmail:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

        try {
            let {appoinmentDate}=req.params;
            let searchAppoinment= await ChannellingDetails.find({appoinmentDate:appoinmentDate});
            console.log(searchAppoinment);            
            return res.status(200).json({ message: "successfully loaded.AppoinmentDe-tails By date..!", responseData: searchAppoinment })
        } catch (error:unknown) {
            if(error instanceof Error){
                return res.status(500).json({message:error.message})
            }else{
                return res.status(500).json({message:"unknow error!"})
            }
        }     
     };

}