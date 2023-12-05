"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ChannellingController_1 = __importDefault(require("../controllers/ChannellingController"));
class ChannelingRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.controller = new ChannellingController_1.default();
        this.configRoutes = () => {
            this.router.post("/", this.controller.saveChanneling);
            this.router.get("/", this.controller.getAllChanneling);
            this.router.put("/:appoinmentNo", this.controller.updateChanneling);
            this.router.delete("/:appoinmentNo", this.controller.deleteChanneling);
        };
        this.getRouter = () => {
            return this.router;
        };
        this.configRoutes();
    }
}
exports.default = ChannelingRoutes;
