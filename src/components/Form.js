
import { useContext, useState } from "react"
import { CalculatorContext } from "../context/CalculatorContext"
import { Link } from "react-router-dom"

const Form = () => {
    const { dispatch } = useContext(CalculatorContext)
    const currentDate = new Date()

    const [selectedYear, setSelectedYear] = useState(0)
    const [selectedMonth, setSelectedMonth] = useState(0)
    const [selectedDate, setSelectedDate] = useState(0)
    const [queue, setQueue] = useState("month")

    // options
    const months = ["January ", "February", "March", "April", "May", "June ", "July", "August", "September", "October", "November", "December"]
    const days = new Array(31).fill(0)
    const years = []

    for (let i = 1920; i <= currentDate.getFullYear(); i++) {
        years.push(i)
    }

    const handleMonth = (e) => {
        e.preventDefault()
        setQueue("day")
    }

    const handleDay = (e) => {
        e.preventDefault()
        setQueue("year")
    }

    const handleYear = (e) => {
        e.preventDefault()
        calculateDifference()
    }

    const calculateDifference = () => {
        const birthDate = new Date(selectedYear, selectedMonth, selectedDate)
        const difference = Math.trunc(currentDate - birthDate)
        dispatch({ type: "calculete", payload: difference})
    }
    return (
        <div className="form-container">
            <h2 className="form-h2">Enter your date of birth</h2>
            <form className="form">

                {queue === "month" &&
                    <>
                        <select onChange={(e) => setSelectedMonth(+e.target.value)}>
                            {months.map((month, i) => (
                                <option key={i} value={i}>{month}</option>
                            ))}
                        </select>
                        <button className="form-btn" onClick={handleMonth}>Next</button>
                    </>}

                {queue === "day" &&
                    <>
                        <select onChange={(e) => setSelectedDate(+e.target.value)}>
                            {days.map((dayi, i) => (
                                <option key={i} value={i}>{i + 1}</option>
                            ))}
                        </select>
                        <button className="form-btn" onClick={handleDay}>Next</button>
                    </>}

                {queue === "year" &&
                    <>
                        <select onChange={(e) => setSelectedYear(+e.target.value)}>
                            {years.map((year, i) => (
                                <option key={i} value={year}>{year}</option>
                            ))}
                        </select>
                        <button className="form-btn" onClick={handleYear}><Link className="link" to={"/result"}>Calculate</Link></button>
                    </>}
            </form>
        </div>
    )
}
export default Form