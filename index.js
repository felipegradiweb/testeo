const express = require('express')
const server = express()
const port = 3015;
const routes = require("./routes");

      server.use(express.json());
    
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