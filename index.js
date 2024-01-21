import express from "express";
import dotenv from "dotenv";
import mongoose from'mongoose';
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import tasksRoute from './routes/tasks.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const port = 8800;
const app = express()
dotenv.config()

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Database connected");
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected");
})


//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/tasks', tasksRoute)

app.use((err,req, res, next)=>{
    const errStatus = err.status || 500
    const errMessage = err.message || "Something went wrong!"
    return res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage,
        stack: err.stack
    })
})

app.listen(port, () => {
    connect();
    console.log(`Example app listening on port http://localhost:${port}`)
})