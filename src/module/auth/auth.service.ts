import config from "../../config"
import { IUser } from "../user/user.interface"
import User from "../user/user.model"
import { ILogin } from "./auth.interface"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userRegisterDb = async (payload: IUser) => {
    const result = await User.create(payload)
    return result
}

const loginUserDb = async (payload: ILogin) => {
    const user = await User.findOne({ email: payload?.email })

    if (!user) {
        throw new Error("This user not found")
    }

    const userStatus = user.userStatus

    if (userStatus === 'inactive') {
        throw new Error("This User is Blocked")
    }

    // checking password 
    const isPasswordMetch = await bcrypt.compare(
        payload.password,
        user.password
    )

    if (!isPasswordMetch) {
        throw new Error("Worng password !!")
    }

    // create token 

    const jwtPayload = {
        email: user.email,
        role: user.role,
        id: user._id,
        name: user.name
    }

    const token = jwt.sign(jwtPayload, config.jwt_access_secret as string, { expiresIn: "1d" });
    return { token, user }

}



export const authService = {
    userRegisterDb,
    loginUserDb
}