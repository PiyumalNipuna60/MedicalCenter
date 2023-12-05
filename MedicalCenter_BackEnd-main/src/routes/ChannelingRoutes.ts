import express, { Router } from "express";
import ChannelingController from "../controllers/ChannellingController";

export default class ChannelingRoutes{
    
  private router : Router = express.Router();
  private  controller : ChannelingController = new ChannelingController();

  constructor(){
    this.configRoutes()
  }
  
  private configRoutes = (): void => {
    this.router.post("/",this.controller.saveChanneling);
    this.router.get("/",this.controller.getAllChanneling);
    this.router.put("/:appoinmentNo",this.controller.updateChanneling);
    this.router.delete("/:appoinmentNo",this.controller.deleteChanneling);

  };
  public getRouter = () : Router =>{
    return this.router
  }
}