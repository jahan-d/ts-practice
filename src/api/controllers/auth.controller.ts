import { Request, Response } from "express"
import authService from "../services/auth.service"
import { sendResponse } from "../../utils/sendResponse"
import { signToken } from "../../utils/jwt"

export const signup = async (req: Request, res: Response) => {
    // const {name, email, age, role ,password} = req.body
    const user = await authService.createUser(req.body)
    if (!user) {
        sendResponse(res, { message: "Failed to create user" }, 400)
        return
    }
    sendResponse(res, { message: "user created successfully", data: user }, 201)
}
export const login = async (req: Request, res: Response) => {
    const {email, password} = req.body
    const user = await authService.validateUser(email,password)
    if(!user){
        sendResponse(res, { message: "Invalid credentials" }, 401)
        return
    }
    // sendResponse(res, { message: "Login success", data: user }, 200 )
    const { accessToken, refressToken } = signToken(user)

    res.cookie("refress_token", refressToken,
        {sameSite: "lax",
        httpOnly: true,
        secure: false }
    )

    const response = {
        user:user,
        tokens:{
            accessToken,
            refressToken
        }
    }
    sendResponse(res, { message: "Login success", data: response }, 200 )

    
}