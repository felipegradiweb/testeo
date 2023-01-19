const express = require('express')
const server = express()
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const port = 3015;
const routes = require("./routes");
server.name = "APIGRADI";

server.use(cookieParser());
server.use(morgan("dev"));
server.use(express.json());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header( 'Content-Type', 'application/json');

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
   
    
      server.use("/", routes);
//       server.get('/', (req, res) => {
  
//   res.send('Hello World!')
// })
server.use((err, req, res, next) => {
    // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = server