import express, { Router } from "express";
import ChannelingDetailsController from "../controllers/ChannelingDetailsController";

export default class ChannellingDetailsRoutes{
    
  private router : Router = express.Router();
  private  controller : ChannelingDetailsController = new ChannelingDetailsController();

  constructor(){
    this.configRoutes();
  }
  
  private configRoutes = (): void => {
    this.router.post("/",this.controller.saveChannellingDEtails);
    this.router.get("/",this.controller.getAllChannellingDEtails);
    this.router.put("/:appoinmentNo",this.controller.updateChannellingDEtails);
    this.router.delete("/:appoinmentNo", this.controller.deleteChannellingDEtails);
    this.router.get("/:appoinmentNo", this.controller.searchAppoinment);
    this.router.get("/search/:appoinmentDate",this.controller.searchAppoinmentByEmail);

 };
  public getRouter = () : Router =>{
    return this.router
  }
}