import type { Request, Response } from "express";
import { getPlacesByName } from "./SearchController.js"

export default [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send("<h1>Hello, world!</h1><h2>Brazil, Morocco, London to Ibiza</h2><h2>Straight to LA, New York, Vegas to Africa!</h2>");
    }
  },
  {
    path: "/api/v1/search",
    method: "get",
    handler: [
      async ({ query }: Request, res: Response) => {
        const result = await getPlacesByName(query.q);

        res.status(200).send(result)
      }
    ]
  }
]