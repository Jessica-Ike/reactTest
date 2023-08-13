import { BrowserRouter, Routes, Route } from "react-router-dom";
import Front from "./Front_Page/Front";
import Cars from "./Front_Page/Cars";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Front/>} />
        <Route path="/cars" element={<Cars/>} />
      </Routes>
    </BrowserRouter>
  );
}
