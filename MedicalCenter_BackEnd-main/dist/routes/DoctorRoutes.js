"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DoctorController_1 = __importDefault(require("../controllers/DoctorController"));
class DoctorRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.controller = new DoctorController_1.default();
        this.configRoutes = () => {
            this.router.post("/", this.controller.saveDoctor);
            this.router.get("/", this.controller.getAllDoctor);
            this.router.put("/:DId", this.controller.updateDoctor);
            this.router.delete("/:DId", this.controller.deleteDoctor);
            this.router.get("/searchById/:DId", this.controller.searchDoctor);
            this.router.get("/searchName/:DName", this.controller.searchDoctorByName);
            this.router.get("/:position", this.controller.getAllDoctors);
        };
        this.getRouter = () => {
            return this.router;
        };
        this.configRoutes();
    }
}
exports.default = DoctorRoutes;
