const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const dotenv = require('dotenv');
dotenv.config({path: './.env'});  
const bodyParser = require('body-parser');
const DB_Connection = require('./connection');
const Customer = require('./customerSchema');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// initiating connection to the database
DB_Connection();



// middleware to handle form submission route 
app.post('/Form/submit', async (req,res,next) =>{
   try{
        const customer = new Customer(req.body);
        await customer.save()
        .then(()=>{
            console.log("new customer added: ", customer);
        })
        res.status(200).json({
            message: "success",
            data: req.body
        });
   }catch(err){
        res.status(500).json({
            message:"internal server error!",
            data: err.message
        })
   }
   next();
})


// starting the server
app.listen(process.env.PORT, () =>{
    console.log(`Server is running on port ${process.env.PORT}`);
})