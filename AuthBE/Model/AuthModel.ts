import mongoose from "mongoose"

interface iAuth {
    username?: string;
    email?: string;
    password?: string;
    avatar?: string;

}

interface iAuthData extends iAuth, mongoose.Document{}

const authModel = new mongoose.Schema (
    {
        username: {
            type: String,
            trim: true,
        },
        email: { 
            type: String,
            trim: true,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            min: 6,
            
        },
        avatar: {
            type: String,
        },
    },
    {timestamps: true}
)
export default mongoose.model<iAuthData>("iAuth", authModel)