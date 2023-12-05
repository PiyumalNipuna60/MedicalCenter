"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannellingDetails = void 0;
const mongoose_1 = require("mongoose");
;
const ChannellingDetailsScheema = new mongoose_1.Schema({
    appoinmentNo: {
        type: Number,
        required: true
    },
    p_Name: {
        type: String,
        required: true
    },
    p_Age: {
        type: Number,
        required: true
    },
    p_Address: {
        type: String,
        required: true
    },
    appoinmentDate: {
        type: String,
        required: true
    },
    d_Name: {
        type: String,
        required: true
    },
    d_Charges: {
        type: Number,
        required: true
    },
    wardNo: {
        type: Number,
        required: true
    },
    bill: {
        type: Number,
        required: true
    },
    paymentDAte: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
});
exports.ChannellingDetails = (0, mongoose_1.model)("ChannellingDetails", ChannellingDetailsScheema);
