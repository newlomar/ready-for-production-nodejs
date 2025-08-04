import http from "http";

import express from "express";

const router = express();

const { PORT = 3000 } = process.env;

const server = http.createServer(router);

server.listen(PORT, () => {
  //setInterval(() => console.log(`Server is running on http://localhost:${PORT}`), 1000);
  console.log(`Server is running on http://localhost:${PORT}`)
})