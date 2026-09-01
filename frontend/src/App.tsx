import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Exercises from "./pages/Exercises";
import Workouts from "./pages/Workouts";
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
