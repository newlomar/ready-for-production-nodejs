import type { Response, NextFunction} from "express";
//import { HTTPClientError, HTTP404Error } from "../utils/httpErrors.js"/

export const notFoundError = () => {
  // throw new HTTP404Error("Methood not found.");
  throw new Error('Not Found');
}

export const clientError = (err: Error, res: Response, next: NextFunction) => {
  if (err) {
    console.warn(err);
    res.status(400).send(err.message)
  } else {
    next(err);
  }
}

export const serverError = (err: Error, res: Response, next: NextFunction) => {
  console.error(err);

  if (process.env.NODE_ENV === "production") {
    res.status(500).send("Internal Server Error");
  } else {
    res.status(500).send(err.stack);
  }
}