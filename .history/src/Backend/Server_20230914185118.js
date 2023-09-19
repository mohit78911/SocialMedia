const port = process.env.PORT || 3800;
const express = require("express");
const app = express();
const servrequire("./app");

app.listen(port, () => {
  console.log(`Server Running with ${port}`);
});
