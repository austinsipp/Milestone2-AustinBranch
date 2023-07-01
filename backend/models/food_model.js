const mongoose = require('mongoose')

const Schema = mongoose.Schema

const foodSchema = new Schema({
    name:{
        type: 'string',
        required: true
    },
    calories:{
        type: 'number',
        required: true
    }
})

module.exports = mongoose.model('Food', foodSchema)