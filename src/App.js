
import Form from "./components/Form"
import Header from "./components/Header"
import Result from "./components/Result"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import CalculatorContextProvider from "./context/CalculatorContext"

const App = () => {
    return (
        <CalculatorContextProvider>
            <Router>
                <div className="container">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Form />} />
                        <Route path="/result" element={<Result />} />
                    </Routes>
                </div>
            </Router>
        </CalculatorContextProvider>
    )
}
export default App