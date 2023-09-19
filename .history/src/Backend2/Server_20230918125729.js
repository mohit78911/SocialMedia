const port = process.env.PORT || 4700;
const server = require("./app");

server.listen(port, () => {
  console.log(`Working Successfully with ${port}`);
});
