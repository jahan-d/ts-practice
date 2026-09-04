import express, { Application, Request, Response } from "express";
import { logger } from "./middleware/logger";
import { globalErrorHandler } from "./middleware/globalErrorHandler";
import authRoutes from "./api/routes/auth.route";
import cookieParser from "cookie-parser"

const app: Application = express();

app.use(logger)
app.use(cookieParser())
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  throw new Error("Server is dying")
  res.send("Hello, World!");
});
app.use("/auth", authRoutes)
app.use(globalErrorHandler)

export default app;
