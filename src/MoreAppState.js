import { createDataStore } from "merced-react-hooks"

const initialState = {
    font: "white",
    background: "crimson"
}

const reducer = (state, action) => {

    if (action.type === "green"){
        return {
            ...state,
            font: "white",
            background: "green"
        }
    }

    if (action.type === "pink"){
        return {
            ...state,
            font: "crimson",
            background: "pink"
        }
    }

    if (action.type === "blue"){
        return {
            ...state,
            font: "white",
            background: "blue"
        }
    }

    return state
}

export const [DataStore, useDataStore] = createDataStore(initialState, reducer)