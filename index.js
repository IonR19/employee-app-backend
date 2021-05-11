const jsonServer = require("json-server");
const morgan = require("morgan");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

if (process.env.NODE_ENV != "production") {
  server.use(morgan("tiny"));
}
server.use(middlewares);
server.use(router);
server.listen(3050, () => {
  console.log("JSON Server is running");
});
