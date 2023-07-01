require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const Foods = require('./routes/foods')

//express app
const app = express();

//Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/foods', Foods)

//connect to db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('connected to mongo and listening on port ', process.env.PORT);
})