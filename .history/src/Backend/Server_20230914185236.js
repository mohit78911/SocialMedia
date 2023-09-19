const port = process.env.PORT || 3800;

const server = require("./app");

server.listen(port, () => {
  console.log(`Server Running with ${port}`);
});
