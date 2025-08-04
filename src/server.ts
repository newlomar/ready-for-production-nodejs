import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils/index.js";
import middleware from "./middleware/index.js"; // TODO: Não deveria ser "middleware(s)" no plural?
import routes from "./services/index.js";

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);

const { PORT = 3000 } = process.env;

const server = http.createServer(router);

server.listen(PORT, () => {
  //setInterval(() => console.log(`Server is running on http://localhost:${PORT}`), 1000);
  console.log(`Server is running on http://localhost:${PORT}`)
})