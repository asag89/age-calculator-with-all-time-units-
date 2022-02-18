
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CalculatorContext } from "../context/CalculatorContext"

const Result = () => {
    const { state } = useContext(CalculatorContext)

    const {
        year,
        month,
        week,
        day,
        hour,
        minute,
        second,
        millisecond,
    } = state

    return (
        <div className="result-container">
            <table>
                <tbody>
                <tr>
                    <td>Years</td>
                    <td>{year}</td>
                </tr>
                <tr>
                    <td>Months</td>
                    <td>{month}</td>
                </tr>
                <tr>
                    <td>Weeks</td>
                    <td>{week}</td>
                </tr>
                <tr>
                    <td>Days</td>
                    <td>{day}</td>
                </tr>
                <tr>
                    <td>Hours</td>
                    <td>{hour}</td>
                </tr>
                <tr>
                    <td>Minutes</td>
                    <td>{minute}</td>
                </tr>
                <tr>
                    <td>Seconds</td>
                    <td>{second}</td>
                </tr>
                <tr>
                    <td>Milliseconds</td>
                    <td>{millisecond}</td>
                </tr>
                </tbody>
            </table>
            <button className="btn-result"><Link to={"/"} className="link">Back</Link></button>
        </div>
    )
}
export default Result