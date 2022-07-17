const router = require("./Routes");
require ("dotenv").config()
const express = require("express");
  app = express(),
  PORT = process.env.PORT;

  //   const router = require("./Routes");
  //   console.log("process.env.port",process.env.PORT);
  // this is middleware
  app.use(express.json());
  app.use(require("cors")());
  app.use("/api",router)
  // here it is no longer middleware


//   const mainRouter=require("./Routes")
//   app.use("/api", mainRouter);
  
  app.listen(PORT, () => console.log(`server is running at port => ${PORT}`));

  require("./DL/db").connect();