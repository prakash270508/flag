import Flag from "./Flag";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flag" element={<Flag />} />
      </Routes>
    </Router>
  );
}

export default App;
