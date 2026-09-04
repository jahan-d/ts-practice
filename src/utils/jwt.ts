import { RUser } from "../types"
import jwt from "jsonwebtoken"
import config from "../config"

export const signToken = (payload: RUser&{id:number}) => {
    const accessToken = jwt.sign(payload, config.access_secret, {
        expiresIn: "1d"
    })


    const refressToken = jwt.sign(payload, config.refress_secret, {
        expiresIn: "7d"
    })

    //store both tokens in cookies

    return { accessToken, refressToken }

}