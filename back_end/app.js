const express = require('express');
const cors = require('cors');
const path = require("path");
var aws = require('aws-sdk');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('Dotenv/config');

//Creating our application and firing the function
const app = express();

const accessKeyId = process.env.accessKeyId;
const secretAccessKey = process.env.secretAccessKey;

const s3 = new aws.S3({
  accessKeyId,
  secretAccessKey,
});

//Declaring out evironment variable for port
const port = process.env.port;
const connecter = process.env.dbconnection;

//middleware
app.use(cors());


// Setting up basic middleware for all Express requests
// app.use(bodyParser.urlencoded({ extended: true })); // Parses urlencoded bodies
// app.use(bodyParser.json()); // Send JSON responses
app.use(express.json());


//Connection string to the database

mongoose.connect(connecter,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false

    }
).then( ()=> {
    console.log('Database connected')
});



//requiring the files
const categoryRoutes = require("./routes/category");
const cartRoutes = require("./routes/cart");
const productRoutes = require('./routes/product');
const authentify = require('./routes/auth');
const initialDataRoutes = require("./routes/admin/initialData");

//using the files
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use('/api', authentify);
app.use("/api", productRoutes);
app.use("/api", categoryRoutes);
app.use("/api", cartRoutes);
app.use("/api", initialDataRoutes)


app.listen(port, ()=>{
    console.log(`Connected to port ${port}`)
});



