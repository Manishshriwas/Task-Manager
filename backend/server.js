import express from "express"
import dotenv from 'dotenv'
import { connectDB } from "./config/db.js";

import router from "./routes/taskRoutes.js";

dotenv.config();


const app=express();

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("server is running")
});

app.use("/api/todos", router)

const PORT = 8000;
 connectDB().then(() => {
     app.listen(PORT, () => {
         console.log(`server is started on port ${PORT}`);
     });
 });
