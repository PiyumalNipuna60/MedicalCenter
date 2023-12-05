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
const Patient_1 = require("../models/Patient");
class PatientController {
    constructor() {
        this.savePatient = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log("JHGAJSHFGJ");
            try {
                let patient = new Patient_1.Patient(req.body);
                let savePatient = yield patient.save();
                console.log();
                return res.status(200).json({ message: "Patient saved", responseData: savePatient });
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
        this.getAllPatient = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let patient = yield Patient_1.Patient.find();
                return res.status(200).json({ message: "Patient Loaded", responseData: patient });
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
        this.updatePatient = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { email } = req.params;
                let updatedPatient = yield Patient_1.Patient.findOneAndUpdate({ email: email }, req.body, {
                    new: true,
                });
                console.log("updated patient");
                return res.status(200).json({ message: "Successfully Updated", responseData: updatedPatient });
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
        this.deletePatient = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { email } = req.params;
                let deletedPatient = yield Patient_1.Patient.findOneAndDelete({ email: email });
                if (!deletedPatient) {
                    throw new Error("Email Not Found!");
                }
                return res.status(200).json({ message: "Successfully deleted", responseData: deletedPatient });
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
        this.searchPatient = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { email } = req.params;
                let patient = yield Patient_1.Patient.findOne({ email: email });
                return res.status(200).json({ message: "successfully loaded...!", responseData: patient });
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
exports.default = PatientController;
