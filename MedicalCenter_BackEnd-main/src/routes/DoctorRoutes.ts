import express, { Router } from "express";
import DoctorController from "../controllers/DoctorController";

export default class DoctorRoutes{
    
  private router : Router = express.Router();
  private  controller : DoctorController = new DoctorController();

  constructor(){
    this.configRoutes()
  }
  
  private configRoutes = (): void => {
    this.router.post("/",this.controller.saveDoctor);
    this.router.get("/",this.controller.getAllDoctor);
    this.router.put("/:DId",this.controller.updateDoctor);
    this.router.delete("/:DId",this.controller.deleteDoctor);
    this.router.get("/searchById/:DId",this.controller.searchDoctor);
    this.router.get("/searchName/:DName",this.controller.searchDoctorByName);
    this.router.get("/:position",this.controller.getAllDoctors);

  };
  public getRouter = () : Router =>{
    return this.router
  }
}