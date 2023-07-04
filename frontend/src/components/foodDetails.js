import { useFoodsContext } from "../hooks/useFoodContext"

const FoodDetails = ({food}) =>{
    const {dispatch} = useFoodsContext()

    const handleClickDelete = async () => {
        //get the food through the api + the food id 
        const response = await fetch('/api/foods/' + food._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_FOOD', payload: json})
        }
    }
    
    return (
        <div className="food-details">
            <p><strong>Name: </strong>{food.name}</p>
            <p><strong>Calories: </strong>{food.calories}</p>
            <span className="material-symbols-outlined editF">edit</span>
            <span className="material-symbols-outlined deleteF" onClick={handleClickDelete}>delete</span>
        </div>
    )
}

export default FoodDetails