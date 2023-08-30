import { useEffect, useState } from "react"
import { useFoodsContext } from '../hooks/useFoodContext'

//components
import FoodDetails from "../components/foodDetails"
import AddFood from "../components/addFood"

const Tracker = () => {
    const {foods, dispatch} : any = useFoodsContext()    


    /*
    This function re-renders the page based on the database currently. 
    Previously we used all these dispatch commands to manipulate a 
    state variable that sat in the browser memory, but this allowed the
    potential for the screen display to not match the database, which can 
    cause issues if what the user is seeing isn't what is in the database.
    Now we've created this function and we pass it into the other components 
    and simply call it inside those components whenever the user completes an 
    action, so what is displayed will always match what the database says
    */
    const refreshFromDatabase = async () => {
        const response = await fetch('https://milestone-project2-mern-app-c8267116782f.herokuapp.com/api/foods')
        const json = await response.json()


        /*
        Since we had already built this with these dispatch functions as described above
        we just left in this one SET_FOODS dispatch in order to demonstrate our ability 
        to use context and make actions out of the reducer, but technically we don't need 
        this anymore, we could simply set our foods variable directly here. This is the only 
        dispatch action in the reducer that we actually use.
        */
        if(response.ok){
            dispatch({type: 'SET_FOODS', payload: json})
        }
    }

    useEffect(() => {
        const fetchFoods = async () => {
            const response = await fetch('https://milestone-project2-mern-app-c8267116782f.herokuapp.com/api/foods')
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_FOODS', payload: json})
            }
        }

        fetchFoods()
    }, [dispatch])
    
    return (
        <div className="tracker">
            
            <div className="foods">
                {foods && foods.map((food:any) => (
                    <FoodDetails key={food._id} food={food} displaySetter={refreshFromDatabase} />
                ))}
            </div>
            <AddFood displaySetter={refreshFromDatabase}/>
        </div>
    )
}

export default Tracker