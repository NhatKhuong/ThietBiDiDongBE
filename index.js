const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require("morgan");
const dotenv = require('dotenv');
const roomRoute = require("./routes/room");

dotenv.config();
//CONECT DATABASE

mongoose.connect((process.env.MONGODB_URL),()=>{
    console.log("Conect DB success");
})

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));

//ROUTES
app.use('/api/room',roomRoute)


app.listen(8000,()=>{
    console.log("Server is running");
})