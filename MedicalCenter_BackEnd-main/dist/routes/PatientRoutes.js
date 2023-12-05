"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PatientController_1 = __importDefault(require("../controllers/PatientController"));
class PatientRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.controller = new PatientController_1.default();
        this.configRoutes = () => {
            this.router.post("/", this.controller.savePatient);
            this.router.get("/", this.controller.getAllPatient);
            this.router.put("/:email", this.controller.updatePatient);
            this.router.get("/:email", this.controller.searchPatient);
            this.router.delete("/:email", this.controller.deletePatient);
        };
        this.getRouter = () => {
            return this.router;
        };
        this.configRoutes();
    }
}
exports.default = PatientRoutes;
