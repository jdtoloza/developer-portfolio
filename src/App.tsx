import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Engineer from "./pages/Engineer";
import Educator from "./pages/Educator";
import Learner from "./pages/Learner";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Engineer />} />
        <Route path="/educator" element={<Educator />} />
        <Route path="/learner" element={<Learner />} />
      </Routes>
    </>
  );
}

export default App;