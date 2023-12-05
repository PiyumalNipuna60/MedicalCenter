"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.laboratory = void 0;
const mongoose_1 = require("mongoose");
;
const LaboratoryScheema = new mongoose_1.Schema({
    userName: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
});
exports.laboratory = (0, mongoose_1.model)("Laboratory", LaboratoryScheema);
