import {useState, useRef} from "react"

function UncontrolledTodoList(){

    const inputRef = useRef(null)

    console.log("REF", inputRef)

    const [todos, setTodos] = useState(["Eat Breakfast"])

    const addTodo = () => {
        // copy of original array
        const newState = [...todos]
        // push the value
        newState.push(inputRef.current.value)
        // update state
        setTodos(newState)
        // clear the form
        inputRef.current.value = ""
    }

    return <main>
        <input type="text" ref={inputRef}/>
        <button onClick={addTodo}>New Todo</button>

        <ul>
            {todos.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
    </main>
}

export default UncontrolledTodoList