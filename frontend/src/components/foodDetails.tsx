//import { useFoodsContext } from "../hooks/useFoodContext"
import React, { useState } from 'react'

const FoodDetails = ( {key, food, displaySetter }: any)  => {
    //const { dispatch } = useFoodsContext()
    const [rowBeingEdited, setRowBeingEdited] = useState('')/*when suer clicks on a row, this will change to the id of the record the user clicked, then causing that record to re-render as a form the user can change the values of*/
    var [editedRecord, setEditedRecord] = useState({ name: '', calories: 0 })/*when user edits the form after clicking edit, this stores the values the user wants in the edited record*/

    const handleClickDelete = async () => {
        //get the food through the api + the food id 
        const response = await fetch('https://milestone-project2-mern-app-c8267116782f.herokuapp.com/api/foods/' + food._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            //dispatch({ type: 'DELETE_FOOD', payload: json })
            displaySetter()/*see comments in foodContext.js and tracker.js for explanation of why we have the page re-render, instead of using the dispatch action here*/
        }
    }

    const onEditPress = (e:any) => {
        e.preventDefault()
        setRowBeingEdited(String(food._id))
    }

    const onEditConfirmClick = async (e:any) => {
        e.preventDefault()
        console.log("editedRecord",editedRecord)
        const response = await fetch('https://milestone-project2-mern-app-c8267116782f.herokuapp.com/api/foods/' + food._id, {
            method: 'PATCH',
            body: JSON.stringify(editedRecord),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (response.ok) {
            //dispatch({ type: 'UPDATE_FOOD', payload: {editedRecord, recordId: food._id} })
            displaySetter()/*see comments in foodContext.js and tracker.js for explanation of why we have the page re-render, instead of using the dispatch action here*/
        }
        setRowBeingEdited('')
    }

    const onCancelClick = (e:any) => {
        e.preventDefault()
        setRowBeingEdited('')
    }
    

    return (
        
        <div className="food-details">
            {!(String(rowBeingEdited) === String(food._id)) ? /*ternary operator, if user clicks on a row, then rowBeingEdited changes and matches the food._id, thus changing this display to a form instead of the list item*/
                <>
                    <p><strong>Name: </strong>{food.name}</p>
                    <p><strong>Calories: </strong>{food.calories}</p>
                    <span className="material-symbols-outlined editF" onClick={onEditPress}>edit</span>
                    <span className="material-symbols-outlined deleteF" onClick={handleClickDelete}>delete</span>
                </>
                :
                <>
                    <p><label>Name:</label><input type="text"
                        onChange={(e) => {
                            setEditedRecord({ ...editedRecord, name: String(e.target.value) })
                        }
                        }
                    ></input></p>
                    <p><label>Calories:</label><input type="number" 
                        onChange={(e) => {
                            //setEditedRecord({ ...editedRecord, calories: String(e.target.value) })
                            editedRecord = { ...editedRecord, calories: Number(e.target.value)}
                            setEditedRecord(editedRecord)
                        }
                        }
                    ></input></p>
                    <span className="material-symbols-outlined confirmF" onClick={onEditConfirmClick}>done</span>
                    <span className="material-symbols-outlined cancelF" onClick={onCancelClick}>cancel</span>
                </>
            }


        </div>
        
    )
}

export default FoodDetails