require("dotenv").config();
const express = require("express");
const app = express(); // host - app
const port = 2210;

app.listen(port,function(){
  console.log("Server is running...");
})
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// connect database
require("./src/db/connect");
// set session
const session = require("express-session");
app.use(
    session({
      resave: true,
      saveUninitialized: true,
      secret: process.env.SESSION_SECRET,
      cookie: {
        maxAge: 3600000,
        secure: false
      }
    })
);






