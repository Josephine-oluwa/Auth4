import express, { Application } from "express"
import { dbConnect } from "./config/db"
import { mainApp } from "./mainApp"
import dotenv from "dotenv"
dotenv.config()

const app: Application = express()

const realPort = parseInt(process.env.APPLICATION_PORT!)

const port: number = realPort;

mainApp(app)

const server = app.listen(port,()=> {
    console.log("")
    dbConnect();
    console.log("server is live now")
})

process.on ("unhandledRejection", (err: any)=> {
    console.log("server is shutting down due to uncaught Rejection")

    console.log(err)
    process.exit(1)
})


process.on ("uncaughtException", (Reason: any)=> {
    console.log("server is shutting down due to uncaught Rejection")

    console.log(Reason)
    server.close (()=> {
        process.exit(1)
    })
})