"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ChannelingDetailsController_1 = __importDefault(require("../controllers/ChannelingDetailsController"));
class ChannellingDetailsRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.controller = new ChannelingDetailsController_1.default();
        this.configRoutes = () => {
            this.router.post("/", this.controller.saveChannellingDEtails);
            this.router.get("/", this.controller.getAllChannellingDEtails);
            this.router.put("/:appoinmentNo", this.controller.updateChannellingDEtails);
            this.router.delete("/:appoinmentNo", this.controller.deleteChannellingDEtails);
            this.router.get("/:appoinmentNo", this.controller.searchAppoinment);
            this.router.get("/search/:appoinmentDate", this.controller.searchAppoinmentByEmail);
        };
        this.getRouter = () => {
            return this.router;
        };
        this.configRoutes();
    }
}
exports.default = ChannellingDetailsRoutes;
