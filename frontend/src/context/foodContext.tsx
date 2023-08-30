import {createContext, useReducer} from 'react'

export const FoodsContext = createContext(null) //create context

export const foodsReducer = (state: any, action: any) => {
    //switch funtion to look for all the cases of the action.type
    /*
    This reducer defines a bunch of CRUD operations on the state.foods variable that is
    local to the browser. Previously we had to do this to make the what is displayed in 
    the browser, i.e. the state.foods variable match what is in the database. We would 
    send the fetch request to the databse and then in parallel do the same change to
    our local state.foods variable. Instead of doing this we now simply run only the
    SET_FOODS function, basically re-rendering from the database every time an action is 
    completed. This keeps us from having issues where the state.foods variable doesn't
    match the database exactly. Only the SET_FOODs action gets used anymore.
    */
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
                foods: state.foods.filter((f:any) => f._id !== action.payload._id) //filter the array and keep all the foods where the id is defferent to the f._id 
            }
        case 'UPDATE_FOOD':
            return {
                foods: state.foods.map((f:any) => {
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
export const FoodContextProvider = (children:any) => {
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