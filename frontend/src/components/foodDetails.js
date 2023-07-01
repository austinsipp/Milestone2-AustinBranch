const FoodDetails = ({food}) =>{
    return (
        <div className="food-details">
            <p><strong>Name: </strong>{food.name}</p>
            <p><strong>Calories: </strong>{food.calories}</p>
        </div>
    )
}

export default FoodDetails