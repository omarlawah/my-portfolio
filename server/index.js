const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();

dotenv.config();    

app.get('/form', (req,res) =>{
    
})

app.listen(process.env.PORT, () =>{
    console.log(`Serer is running on port ${process.env.PORT}`);
})