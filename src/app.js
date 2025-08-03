import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app= express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit: "16 kb"}))
app.use(express.urlencoded({extended: true, limits: "16 kb"}))
app.use(express.static ("public"))
app.use(cookieParser)


import userRouter from "./routes/user.routes.js"

app.use("/users", userRouter)
app.use ("/api/v1/users", userRouter)


export {app}