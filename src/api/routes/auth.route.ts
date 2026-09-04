import { Router } from "express";
import { login, signup } from "../controllers/auth.controller";


const router = Router();

router.post( "/signup", signup )
router.post( "/login", login )
router.get( "/me", (req,res) => {} )
router.put( "/update/:id", (req,res) => {} )
router.delete( "/delete/:id", (req,res) => {} )

export default router;