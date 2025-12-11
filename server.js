require("dotenv").config();
const express = require("express");
// import the sendJob function to trigger the cron Job
const sendJob = require("./sendQuote");
const app = express();
const PORT=process.env.PORT || 5000;

app.get("/",async(req,res)=>{
    res.send("WELCOME TO THE DAILY QUOTE API");
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})