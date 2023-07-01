const Food = require('../models/food_model')
const mongoose = require('mongoose')

//get all foods
const getFoods = async (req, res) => {
    const foods = await Food.find({})
    res.status(200).json(foods)
}

//get a single food
const getFood = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Food not found'})
    }

    const food = await Food.findById(id)
    
    if(!food) {
        return res.status(404).json({error: 'Food not found'})
    }

    res.status(200).json(food)
} 

//create a new food 
const createFood = async (req, res) => {
    const {name, calories} = req.body

    try {
        const food = await Food.create({name, calories})
        res.status(200).json(food)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    res.json({mssg: 'post a food'})
}

//delete a food
const deleteFood = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Food not found'})
    }

    const food = await Food.findByIdAndDelete({_id: id})
    
    if(!food) {
        return res.status(404).json({error: 'Food not found'})
    }

    res.status(200).json(food)
}

//update a food
const updateFood = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Food not found'})
    }

    const food = await Food.findByIdAndUpdate({_id: id}, {
        ...req.body
    })
    
    if(!food) {
        return res.status(404).json({error: 'Food not found'})
    }

    res.status(200).json(food)
}

module.exports = {
    createFood,
    getFood,
    getFoods,
    deleteFood,
    updateFood
}
