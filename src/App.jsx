import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Ver1Page from "./pages/Ver1Page";
import Ver2Page from "./pages/Ver2Page";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ver1Page />} />
        <Route path="/ver2" element={<Ver2Page />} />
      </Routes>
    </Router>
  );
}

export default App;
