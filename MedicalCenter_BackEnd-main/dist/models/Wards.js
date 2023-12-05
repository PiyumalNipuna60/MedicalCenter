"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patient = void 0;
const mongoose_1 = require("mongoose");
;
const WardsScheema = new mongoose_1.Schema({
    wardNo: {
        type: Number,
        required: true
    },
    d_Id: {
        type: String,
        required: true
    },
});
exports.patient = (0, mongoose_1.model)("Wards", WardsScheema);
