const server = require("./app");
const Port = procces.env.PORT || 5500;

server.listen(Port, () => {
  console.log(`Server Running on ${Port}`);
});
