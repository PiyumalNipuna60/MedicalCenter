import express, { Router } from "express";
import PatientController from "../controllers/PatientController";

export default class PatientRoutes{
    
  private router : Router = express.Router();
  private  controller : PatientController = new PatientController();

  constructor(){
    this.configRoutes()
  }
  
  private configRoutes = (): void => {
    this.router.post("/",this.controller.savePatient);
    this.router.get("/",this.controller.getAllPatient);
    this.router.put("/:email",this.controller.updatePatient);
    this.router.get("/:email",this.controller.searchPatient);
    this.router.delete("/:email",this.controller.deletePatient);

  }
  public getRouter = () : Router =>{
    return this.router
  }
}