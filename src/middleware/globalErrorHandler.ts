import { NextFunction, Request, Response } from "express";
import config from "../config";

const globalErrorHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({
        message: err instanceof Error ? err.message : "internal server error",
        success: false,
        stack: config.node_env === 'development' && err instanceof Error? err.stack : undefined,
    })
}

export { globalErrorHandler };