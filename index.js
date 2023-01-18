const router = require("./Routes");
require("dotenv").config()
const express = require("express"),
  app = express(),
  PORT = process.env.PORT,
  jwt=require ('jsonwebtoken');


// this is middleware
app.use(express.json());
app.use(require("cors")());
app.use("/api", router)


//   const mainRouter=require("./Routes")
//   app.use("/api", mainRouter);

app.listen(PORT, () => console.log(`server is running at port => ${PORT}`));

require("./DL/db").connect();