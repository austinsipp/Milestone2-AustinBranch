import { useEffect, useState } from "react"

//components
import FoodDetails from "../components/foodDetails"

const Tracker = () => {
    const [foods, setFoods] = useState(null)

    useEffect(() => {
        const fetchFoods = async () => {
            const response = await fetch('/api/foods')
            const json = await response.json()

            if(response.ok){
                setFoods(json)
            }
        }

        fetchFoods()
    }, [])
    
    return (
        <div className="tracker">
            <div className="foods">
                {foods && foods.map((food) => (
                    <FoodDetails key={food._id} food={food}></FoodDetails>
                ))}
            </div>
        </div>
    )
}

export default Tracker