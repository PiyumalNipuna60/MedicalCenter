"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ChannellingDetails_1 = require("../models/ChannellingDetails");
class ChannelingDetailsController {
    constructor() {
        this.saveChannellingDEtails = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log("channellingdetails");
            try {
                let channellingDetails = new ChannellingDetails_1.ChannellingDetails(req.body);
                let saveChannellingDetails = yield channellingDetails.save();
                console.log("channellingDetails saved");
                return res.status(200).json({ message: "save channel", responseData: saveChannellingDetails });
            }
            catch (error) {
                console.log("discard");
                if (error instanceof Error) {
                    return res.status(500).json({ message: error });
                }
                else {
                    return res.status(500).json({ message: "unknow error" });
                }
            }
        });
        this.getAllChannellingDEtails = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let channellingDetails = yield ChannellingDetails_1.ChannellingDetails.find();
                return res.status(200).json({ message: "Patient Loaded", responseData: channellingDetails });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error });
                }
                else {
                    return res.status(500).json({ message: "unknow error" });
                }
            }
        });
        this.updateChannellingDEtails = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { appoinmentNo } = req.params;
                let updatechannellingdetails = yield ChannellingDetails_1.ChannellingDetails.findOneAndUpdate({ appoinmentNo: appoinmentNo }, req.body, {
                    new: true,
                });
                return res.status(200).json({ message: "Successfully Updated", responseData: updatechannellingdetails });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error.message });
                }
                else {
                    return res.status(500).json({ message: "unknow error!" });
                }
            }
        });
        this.deleteChannellingDEtails = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { appoinmentNo } = req.params;
                let deletechannellingdetails = yield ChannellingDetails_1.ChannellingDetails.findOneAndDelete({ appoinmentNo: appoinmentNo });
                if (!deletechannellingdetails) {
                    throw new Error("Email Not Found!");
                }
                console.log("deleted Channelling");
                return res.status(200).json({ message: "Successfully deleted", responseData: deletechannellingdetails });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error.message });
                }
                else {
                    return res.status(500).json({ message: "unknow error!" });
                }
            }
        });
        this.searchAppoinment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { appoinmentNo } = req.params;
                let searchAppoinment = yield ChannellingDetails_1.ChannellingDetails.findOne({ appoinmentNo: appoinmentNo });
                return res.status(200).json({ message: "successfully loaded.AppoinmentDe-tails..!", responseData: searchAppoinment });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error.message });
                }
                else {
                    return res.status(500).json({ message: "unknow error!" });
                }
            }
        });
        this.searchAppoinmentByEmail = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { appoinmentDate } = req.params;
                let searchAppoinment = yield ChannellingDetails_1.ChannellingDetails.find({ appoinmentDate: appoinmentDate });
                console.log(searchAppoinment);
                return res.status(200).json({ message: "successfully loaded.AppoinmentDe-tails By date..!", responseData: searchAppoinment });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error.message });
                }
                else {
                    return res.status(500).json({ message: "unknow error!" });
                }
            }
        });
    }
}
exports.default = ChannelingDetailsController;
