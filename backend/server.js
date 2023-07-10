require('dotenv').config();

const express = require('express');
const cors = require('cors');
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
app.use(cors({
 origin: "*"   
}))

//routes
app.use('/api/foods', Foods)

//connect to db
mongoose.connect("mongodb+srv://the_ACE_team:3JDjDzrarqJWKPKF@milestoneproject2.5b61vwy.mongodb.net/", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })

//listen for requests
app.listen(process.env.PORT || 3005, () => {
    console.log('connected to mongo and listening on port ', process.env.PORT);
})