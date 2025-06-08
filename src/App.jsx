import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import FormPage from "./component/FormPage"
import SuccessPage from "./component/SuccessPage"
import "./index.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
