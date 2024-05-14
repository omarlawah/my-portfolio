const mongoose = require('mongoose');

const DB_Connection = async ()=>{
    try{
        await mongoose.connect(process.env.DB_CON_STR);
        console.log(`Connection successful to the Database ${process.env.DB_CON_STR}`);
    }catch(err){
        console.log("couldnt connect to DB: ",err.message);
    }
   
}


module.exports = DB_Connection;