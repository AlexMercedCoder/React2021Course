import {useCounter} from "./hooks"





function CustomHooks(){

    const [counter1, add1, minus1] = useCounter()

    const [counter2, add2, minus2] = useCounter()

    return <main>
        <div>
            <h1>{counter1}</h1>
            <button onClick={add1}>Add</button>
            <button onClick={minus1}>Minus</button>
        </div>
        <div>
            <h1>{counter2}</h1>
            <button onClick={add2}>Add</button>
            <button onClick={minus2}>Minus</button>
        </div>

    </main>
}

export default CustomHooks