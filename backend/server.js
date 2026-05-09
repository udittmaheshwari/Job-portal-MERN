import dotenv from "dotenv"
import cors from 'cors'
import connectDB from "./config/db.js"
import express from 'express'
import jobRoutes from "./routes/jobRoutes.js"

dotenv.config()

connectDB();

const PORT = process.env.PORT || 5000


const app = express()
app.use(cors())
app.use(express.json())


app.use("/api/jobs" , jobRoutes)

app.listen(PORT , ()=>{
console.log(`Server running on port ${PORT}`);
})