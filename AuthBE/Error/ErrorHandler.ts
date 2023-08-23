import { NextFunction, Request, Response } from "express";
import { mainError, HTTP } from "./mainError";

const PreparedError = (err: mainError, res: Response) => {
    res.status(HTTP.BAD_REQUEST).json({
        name: err.name,
        message: err.message,
        status: err.status,
        success: err.success,
        err,
    })
}

export const errorHandler = (
    err: mainError,
    res: Response
) => {
    PreparedError(err, res)
}