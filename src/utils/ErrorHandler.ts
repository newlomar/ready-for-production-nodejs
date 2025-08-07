import type { Response, NextFunction} from "express";
//import { HTTPClientError, HTTP404Error } from "../utils/httpErrors.js"/

export const notFoundError = () => {
  // throw new HTTP404Error("Methood not found.");
}

export const clientError = (err: Error, res: Response, next: NextFunction) => {
  
}

export const serverError = (err: Error, res: Response, next: NextFunction) => {
  
}