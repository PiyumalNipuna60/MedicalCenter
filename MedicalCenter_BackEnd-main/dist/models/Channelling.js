"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channelling = void 0;
const mongoose_1 = require("mongoose");
;
const ChannellingScheema = new mongoose_1.Schema({
    appoinmentNo: {
        type: Number,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    channelingDate: {
        type: String,
        required: true
    }
});
exports.Channelling = (0, mongoose_1.model)("Channelling", ChannellingScheema);
