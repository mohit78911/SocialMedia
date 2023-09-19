const port = process.env.PORT || 3800;
const express = require("express");
const app = express();
const server = require("./app");

server.listen(port, () => {
  console.log(`Server Running with ${port}`);
});
