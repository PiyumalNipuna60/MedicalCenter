"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctor = void 0;
const mongoose_1 = require("mongoose");
;
const DoctorScheema = new mongoose_1.Schema({
    DId: {
        type: String,
        required: true
    },
    DName: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    DCharge: {
        type: Number,
        required: true
    },
    wardNo: {
        type: Number,
        required: true
    }
});
exports.Doctor = (0, mongoose_1.model)("Doctor", DoctorScheema);
