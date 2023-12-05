"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes"));
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
// Create the express app
const app = (0, express_1.default)();
// allow CORS
// app.use(cors());
// Here you can add more origins to allow CORS
const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
}));
// if you are receiving JSON data in request-body
app.use((0, body_parser_1.json)());
// if you are receiving url-encoded data in request-body
app.use((0, body_parser_1.urlencoded)({ extended: true }));
// Mount the routes at /resourse URL path
app.use("/", routes_1.default);
// error handling middleware
app.use((error, req, res) => {
    res.status(500).json({ message: error.message });
});
mongoose_1.default.connect(process.env.MONGO_DB_URL).then(() => {
    console.log("db connected");
    app.listen(process.env.PORT, () => {
        console.log('server is running on port 5000');
    });
}).catch((error) => {
    console.log("something went wrong", error.message);
});
