import express,  {Request, Response} from "express"
import authModel from "../Model/AuthModel"
import bcrypt from "bcrypt"
import {HTTP, mainError} from "../Error/mainError"





export const Register = async(res: Response, req: Request) => {
    try {
        const {name, email, password, avatar} = req.body;

        const auth = await authModel.create ({
            name, email, password, avatar
        })
        res.status(HTTP.OK).json({
            message: "created",
            data: auth,
        })
    } catch (error) {
        res.status(HTTP.BAD).json({
            message: Error
        })
    }
};

export const SignIn =async (req: Request, res: Response)=> {
    try {
        const {email, password } = req.body;
        const auth = await authModel.findOne({email, password})

        res.status(HTTP.OK).json({
            message: "SignIn",
            data: auth!.id,
        })
    } catch (error) {
        res.status(HTTP.BAD).json({
            message: "Error"
        })
    }
}
export const getOneUser = async(req: Request, res: Response)=> {
    try {
        const {authID} = req.params;

        const auth = await authModel.findById(authID);

        res.status(HTTP.OK).json({
            message: "found one",
            data: auth,
        })
    } catch (error) {
        res.status(HTTP.BAD).json({
            message: "Error"
        })
    }
}