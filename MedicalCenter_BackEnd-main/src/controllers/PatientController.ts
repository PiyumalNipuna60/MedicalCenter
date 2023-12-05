import { Request, RequestHandler, Response } from "express";
import { Patient } from "../models/Patient";
import { log } from "console";

export default class PatientController{



    savePatient:RequestHandler = async (req:Request,res:Response):Promise<Response>=> {
        console.log("JHGAJSHFGJ");

        try {
            let patient= new Patient (req.body);
            let savePatient=  await patient.save();
               console.log()    
            return res.status(200).json({message:"Patient saved",responseData:savePatient});
        } catch (error:unknown) {
            if(error instanceof Error){
                return res.status(500).json({message:error})
            }else{
                return res.status(500).json({message:"unknow error"})
            }
        }
       
    };
    getAllPatient:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

        try {
            let patient = await Patient.find()
            return res.status(200).json({message:"Patient Loaded",responseData:patient})

        } catch (error:unknown) {
            if(error instanceof Error){
                return res.status(500).json({message:error})
            }else{
                return res.status(500).json({message:"unknow error"})
            }
        }

    };
    updatePatient:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

            try {
            let {email} = req.params ;
            let updatedPatient=await Patient .findOneAndUpdate({email:email},req.body,{
                new:true,
            });
                console.log("updated patient")
            return res.status(200).json({message:"Successfully Updated",responseData:updatedPatient});
        } catch (error:unknown) {
            if(error instanceof Error){
                return res.status(500).json({message:error.message})
            }else{
                return res.status(500).json({message:"unknow error!"})
            }
        }    
    };
    deletePatient:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

        try {
            let {email} = req.params ;
            let deletedPatient=await Patient.findOneAndDelete({email:email});
            if(!deletedPatient){
                throw new Error("Email Not Found!") 
            }
            return res.status(200).json({message:"Successfully deleted",responseData:deletedPatient})
        } catch (error:unknown) {
            if(error instanceof Error){
                return res.status(500).json({message:error.message})
            }else{
                return res.status(500).json({message:"unknow error!"})
            }
        }  
    };
    searchPatient:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

        try {
            let {email}=req.params;
            let patient= await Patient.findOne({email:email});
            return res.status(200).json({message:"successfully loaded...!",responseData:patient})
        } catch (error:unknown) {
            if(error instanceof Error){
                return res.status(500).json({message:error.message})
            }else{
                return res.status(500).json({message:"unknow error!"})
            }
        }     
     };

}