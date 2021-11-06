import {useState} from "react"
import {useFormState} from "merced-react-hooks"

function ControlledTodoList(){

  

    const [todos, setTodos] = useState(["Eat Breakfast"])

    const [form, handleChange, resetForm] = useFormState({
        thetodo: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        // copy of the todo state
        const newState = [...todos]
        // push new todo
        newState.push(form.thetodo)
        // update the todo state
        setTodos(newState)
        // clear out form
        resetForm()
    }

    

    return <main>
        <form onSubmit={handleSubmit}>
        <input type="text" name="thetodo" value={form.thetodo} onChange={handleChange}/>
        <input type="submit" value="new todo"/>
        </form>

        <ul>
            {todos.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
    </main>
}

export default ControlledTodoList