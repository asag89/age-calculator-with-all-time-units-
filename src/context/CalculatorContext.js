
import { createContext, useReducer } from "react"

export const CalculatorContext = createContext()

const CalculatorContextProvider = ({ children }) => {

    const initialState = {
        year: 0,
        month: 0,
        week: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case "calculete":
                return state = {
                    year: (action.payload/1000/60/60/24/365).toFixed(2),
                    month: (action.payload/1000/60/60/24/30.41).toFixed(2),
                    week: (action.payload/1000/60/60/24/7).toFixed(2),
                    day: (action.payload/1000/60/60/24).toFixed(2),
                    hour: (action.payload/1000/60/60).toFixed(2),
                    minute: (action.payload/1000/60).toFixed(2),
                    second: (action.payload/1000).toFixed(2),
                    millisecond: action.payload,
                }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <CalculatorContext.Provider value={{ state, dispatch }}>
            {children}
        </CalculatorContext.Provider>
    )
}
export default CalculatorContextProvider