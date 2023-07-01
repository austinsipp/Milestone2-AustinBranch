import { useEffect } from "react"
import { useFoodsContext } from '../hooks/useFoodContext'

//components
import FoodDetails from "../components/foodDetails"
import AddFood from "../components/addFood"

const Tracker = () => {
    const {foods, dispatch} = useFoodsContext()    

    useEffect(() => {
        const fetchFoods = async () => {
            const response = await fetch('/api/foods')
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
                {foods && foods.map((food) => (
                    <FoodDetails key={food._id} food={food}></FoodDetails>
                ))}
            </div>
            <AddFood/>
        </div>
    )
}

export default Tracker