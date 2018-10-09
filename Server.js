const express = require("express");
const app = express();
const request = require("request");
const response = require("respone");

app.get( '/reveiws/:reveiwid' , (request,response));
app.listen(7000);
console.log("Listening on port 7000..");
