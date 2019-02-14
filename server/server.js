const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const mongoose = require('mongoose');

// BOdy Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Mango config
const db = require("./../config/key").mongoURI;

// MangoDB connet
mongoose
  .connect(
    db
  )
  .then(() => console.log("mongodb conneneted "))
  .catch(err => console.log(err));
 //app.get("/", (req, res) => res.send("hello Run Server"));

 // Routes Refer
const users = require("./routes/api/users");
const products = require("./routes/api/products");
// const profile = require("./routes/api/profile");


// User Routes
app.use("/api/users", users);
app.use("/api/products", products);
// app.use("/api/posts", posts);

 
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server Running ${port}`);
})

