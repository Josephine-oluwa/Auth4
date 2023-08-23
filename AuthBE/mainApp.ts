import express, { Application, Request, Response, NextFunction } from "express"
import cors from "cors"

import auth from "./Router/AuthRouter"
import { HTTP, mainError } from "./Error/mainError"


export const mainApp = (app: Application) => {
    app.use(express.json())
    app.use(
        cors({
            origin: "http://localhost: 2233",
            methods: ["GET", "POST", "PATCH", "DELETE"]
        })
    )

    app.use ("/api/v1", auth)


    app.get("/", (res: Response, req: Request) => {
        res.status(201).json ({
            message: "Awesome code"
        })
    })

    app.all ("*", (req: Request, res: Response, next: NextFunction) => {
        new mainError({
            name: "Route Error",
            message: "This is showing up because this route isn't correct",
            status: HTTP.BAD,
            success: false
        })
    })
}
