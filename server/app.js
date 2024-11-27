const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.options('*', cors())

//middleware
app.use(bodyParser.json());

//router
const categoryRoutes = require('./routes/categories');
const productRoutes = require('./routes/products');


app.use(`/api/category`, categoryRoutes);
app.use(`/api/products`, productRoutes);


//database
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
    //useFindAndModify: false
})
    .then(() => {
        console.log("Database Connection is ready..");
        //server start
        app.listen(process.env.PORT, () => {
            console.log(`server is running http://localhost:${process.env.PORT}`)
        });
    })
    .catch((err) => {
        console.log(err);
    })





