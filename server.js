// requiring the needed dependencies
const express = require("express") ;
const mongoose = require("mongoose") ;
const path = require('path');
require("dotenv").config();
//requiring local files
const postsRoutes = require('./routes/posts')

// creating an instance of the app
const app = express() ;


// defining the port in which we will connect
const PORT = process.env.PORT || 5000 ;



//connecting the app to the database
mongoose.connect(process.env.URL, {useUnifiedTopology: true, useNewUrlParser: true , useFindAndModify: false})
        .catch((error)=>console.log(error.msg))

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HTTP request
app.use('/api', postsRoutes);


// connecting the app to the port
app.listen(PORT, () => {
    console.log(`server is running on port : ${PORT}`)
})