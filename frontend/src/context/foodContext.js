import {createContext, useReducer} from 'react'

export const FoodsContext = createContext() //create context

export const foodsReducer = (state, action) => {
    //switch funtion to look for all the cases of the action.type
    switch(action.type) {
        case 'SET_FOODS':
            return {
                foods: action.payload
            }
        case 'CREATE_FOODS':
            return {
                foods: [action.payload, ...state.foods]
            }
        case 'DELETE_FOOD':
            return {
                foods: state.foods.filter((f) => f._id !== action.payload._id) //filter the array and keep all the foods where the id is defferent to the f._id 
            }
        case 'UPDATE_FOOD':
            return {
                foods: state.foods.map((f) => {
                    console.log(f._id)
                    console.log(action.payload.recordId)
                    console.log("f",f)
                    console.log("action.payload",action.payload)
                    if (f._id === action.payload.recordId) {
                        f.name = action.payload.editedRecord.name
                        f.calories = action.payload.editedRecord.calories
                    }
                    return f
                }) //filter the array and keep all the foods where the id is defferent to the f._id 
            }
        default:
            return state
    }
}

//export provider to use in index.js
export const FoodContextProvider = ({children}) => {
    //reducer
    const [state, dispatch] = useReducer(foodsReducer, {
        foods: null
    })

    return (
        <FoodsContext.Provider value={{...state, dispatch}}>
            {children}
        </FoodsContext.Provider>
    )
}