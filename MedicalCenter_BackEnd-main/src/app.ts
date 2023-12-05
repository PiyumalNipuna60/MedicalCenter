import {config} from "dotenv"
config();
import express, { Request, Response } from "express";
import db from "mongoose";
import routes from "./routes";
import { json, urlencoded } from "body-parser";
import cors from "cors";
// Create the express app
const app = express();

// allow CORS
// app.use(cors());

// Here you can add more origins to allow CORS
const allowedOrigins = ["http://localhost:3000","http://localhost:3001"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin!) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

// if you are receiving JSON data in request-body
app.use(json());

// if you are receiving url-encoded data in request-body
app.use(urlencoded({ extended: true }));

// Mount the routes at /resourse URL path
app.use("/", routes);

// error handling middleware
app.use((error: Error, req: Request, res: Response) => {
  res.status(500).json({ message: error.message });
});


db.connect(process.env.MONGO_DB_URL!).then(()=>{
        console.log("db connected")
        app.listen(process.env.PORT,()=>{
            console.log('server is running on port 5000')
        });
}).catch((error)=>{
        console.log("something went wrong",error.message)
});