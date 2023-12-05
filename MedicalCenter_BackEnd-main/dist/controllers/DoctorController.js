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
const Doctor_1 = require("../models/Doctor");
class DoctorController {
    constructor() {
        this.saveDoctor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log("doctor");
            try {
                let doctor = new Doctor_1.Doctor(req.body);
                let saveDoctor = yield doctor.save();
                console.log("saved");
                return res.status(200).json({ message: "Doctor saved", responseData: saveDoctor });
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
        this.getAllDoctor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let doctor = yield Doctor_1.Doctor.find();
                return res.status(200).json({ message: "Doctors` Loaded", responseData: doctor });
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
        this.getDoctorByPosition = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { position } = req.params;
                let doctor = yield Doctor_1.Doctor.find({ position: position });
                console.log("Data", doctor);
                return res.status(200).json({ message: "Doctors Loaded", responseData: doctor });
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
        this.updateDoctor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { DId } = req.params;
                let updatedDoctor = yield Doctor_1.Doctor.findOneAndUpdate({ DId: DId }, req.body, {
                    new: true,
                });
                return res.status(200).json({ message: "Successfully Updated", responseData: updatedDoctor });
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
        this.deleteDoctor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { DId } = req.params;
                let deletedDoctor = yield Doctor_1.Doctor.findOneAndDelete({ DId: DId });
                if (!deletedDoctor) {
                    throw new Error("Id Not Found!");
                }
                return res.status(200).json({ message: "Successfully deleted", responseData: deletedDoctor });
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
        this.searchDoctor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { DId } = req.params;
                let doctor = yield Doctor_1.Doctor.findOne({ DId: DId });
                return res.status(200).json({ message: "successfully loaded...!", responseData: doctor });
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
        this.searchDoctorByName = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { DName } = req.params;
                let doctor = yield Doctor_1.Doctor.findOne({ DName: DName });
                return res.status(200).json({ message: "successfully loaded...!", responseData: doctor });
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
        this.getAllDoctors = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { position } = req.params;
                console.log(position);
                let positions = yield Doctor_1.Doctor.find({ position: position });
                console.log("position");
                return res.status(200).json({ responseData: positions });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error.message });
                }
                else {
                    return res.status(500).json({ message: "Unknown error occured." });
                }
            }
        });
    }
}
exports.default = DoctorController;
