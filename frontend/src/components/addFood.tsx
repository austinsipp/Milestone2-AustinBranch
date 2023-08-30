import {useState} from 'react'
//import { useFoodsContext } from '../hooks/useFoodContext'

interface emptyFieldsType {
    emptyFields: [];
    setEmptyFields: Function;
}

const AddFood = (displaySetter:any) =>{
    //const {dispatch} = useFoodsContext()
    const [name, setName] = useState('')
    const [calories, setCalories] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState<any>([])

    //Handle submit method
    const handleSubmit = async (e:any) => {
        e.preventDefault()

        //define the object
        const food = {name, calories}

        //fetch to the api to make a post request
        const response = await fetch('https://milestone-project2-mern-app-c8267116782f.herokuapp.com/api/foods',{
            method: 'POST',
            body: JSON.stringify(food), //make the object json 
            headers: {
                'Content-Type': 'application/json'
            }
        })

        //get the json response
        const json = await response.json()

        //Check of the response was ok 
        if(!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            //set all the values to default
            setName('')
            setCalories('')
            setError(null)
            setEmptyFields([])
            console.log('new food added', json)
            //dispatch({type: 'CREATE_FOODS', payload: json})
            displaySetter()/*see comments in foodContext.js and tracker.js for explanation of why we have the page re-render, instead of using the dispatch action here*/
        }
    }

    return (
        //crate food from 
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add Food</h3>

            <label>Name:</label>
            <input 
                type="text" 
                onChange={ (e) => setName(e.target.value) }
                value={name}    
                className={emptyFields.includes('name') ? 'error' : ''}
            />
            <label>calories:</label>
            <input 
                type="number" 
                onChange={ (e) => setCalories(e.target.value) }
                value={calories}  
                className={emptyFields.includes('calories') ? 'error' : ''}   
            />
            <button>Add Food</button>
            {error && <div className="error">{error}</div>}
        </form>
    )

}

export default AddFood