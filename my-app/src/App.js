import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home"
import Navbar from "./layout/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
