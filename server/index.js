const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const dotenv = require('dotenv');
dotenv.config({path: './.env'});  
const bodyParser = require('body-parser');
const DB_Connection = require('./connection');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// initiating connection to the database
DB_Connection();

// middleware to handle form submission route
app.post('/Form/submit', (req,res) =>{
    res.status(200).send(req.body);
    console.log(req.body);
})


// starting the server
app.listen(process.env.PORT, () =>{
    console.log(`Server is running on port ${process.env.PORT}`);
})