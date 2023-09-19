const port = process.env.PORT || 3800;
const server = require("./app");

server.li(port, () => {
  console.log(`Server Running with ${port}`);
});
