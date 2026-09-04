import type { RUser, User } from "../../types"
import bcrypt from "bcrypt"
import { sql } from "../../db"


class AuthService {
    async createUser(user: RUser & {password: string}){
        const {name, email, age , role ,password } = user

        const hash = await bcrypt.hash(password, 12)

        const res = await sql`
                INSERT INTO users (name, email, password_hash, age , role) 
                VALUES (${name}, ${email}, ${hash}, ${age}, COALESCE(${role}, 'user'))
                RETURNING id, name, email, role, age 
        `

        return res[0]
    }
    async validateUser(email:string, password:string){
        const res = await sql`
            SELECT id,name,email,role,age,password_hash FROM users WHERE email = ${email} 
        `
        if(!res.length){
            return null
        }
        const {password_hash,...userInfo} = res[0] as User
        const isValid = await bcrypt.compare(password,password_hash)
        return isValid ? userInfo : null
    }
}

export default new AuthService;
