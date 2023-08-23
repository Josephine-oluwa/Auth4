import express, { Router } from "express"
import {
    Register, SignIn, getOneUser
} from "../controller/AuthController"

const router = Router();

router.route("/register").post(Register);
router.route("/sign-in").post(SignIn);

router.route("/:id/user-info").get(getOneUser);

// router.route("/:id/update-user-info").patch(updateOneUser);

// router.route("/:id/delete-user").delete(deleteOneUser);

export default router;