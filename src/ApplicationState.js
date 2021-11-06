import { createContext, useState, useContext, useReducer } from "react";

const AppContext = createContext(null)

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

export function AppState (props){


    const [state, dispatch] = useReducer(reducer, initialState)

    return <AppContext.Provider value={{state, dispatch}}>{props.children}</AppContext.Provider>
}

export function useAppState(){
    return useContext(AppContext)
}

