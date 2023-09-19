const server = require("./app");
const Port = process  .env.PORT || 5500;

server.listen(Port, () => {
  console.log(`Server Running on ${Port}`);
});
