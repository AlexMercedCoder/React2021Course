import { useState } from "react"

export const useCounter = () =>  {

    const [counter, setCounter] = useState(0)
    
    const addOne = () => setCounter(counter + 1)
    const minusOne = () => setCounter(counter - 1)
    
    return [counter, addOne, minusOne]
}