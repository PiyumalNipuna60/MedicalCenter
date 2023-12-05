import  express, { Router } from "express";
import PatientRoutes from "./PatientRoutes";
import DoctorRoutes from "./DoctorRoutes";
import ChannelingRoutes from "./ChannelingRoutes";
import ChannellingDetailsRoutes from "./ChannelingDetailsRoutes";

const router : Router = Router();

const baseUrl ="/api/v1/"

router.use(`${baseUrl}patient`,new PatientRoutes().getRouter());
router.use(`${baseUrl}doctor`,new DoctorRoutes().getRouter());
router.use(`${baseUrl}channeling`,new ChannelingRoutes().getRouter());
router.use(`${baseUrl}channelingDetails`,new ChannellingDetailsRoutes().getRouter());

export default router;