import {  Router } from "express";
import type { Request, Response, NextFunction } from "express";
import * as ErrorHandler from "../utils/ErrorHandler.js";

const handle404Error = (router: Router) => {
  router.use((req: Request, res: Response) => {
    
  }) 
}

const handleClientError = (router: Router) => {
  router.use((req: Request, res: Response, next: NextFunction) => {
    
  }) 
}
const handleServerError = (router: Router) => {
  router.use((req: Request, res: Response, next: NextFunction) => {
    
  }) 
}

export default [handle404Error, handleClientError, handleServerError];