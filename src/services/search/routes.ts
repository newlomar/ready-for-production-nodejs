import type { Request, Response } from "express";
//import { getPlace }

export default [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send("<h1>Hello, world!</h1><h2>Brazil, Morocco, London to Ibiza</h2><h2>Straight to LA, New York, Vegas to Africa!</h2>");
    }
  }
]