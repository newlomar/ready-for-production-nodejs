import type { Request, Response, NextFunction } from "express";
import { HTTP400Error } from "../utils/httpErrors.js";

export const checkSearchParams = (req: Request,res: Response,next: NextFunction) => {
  if (!req.query.q) {
    throw new HTTP400Error("Missing q parameter!");
  } else {
    next()
  }
}