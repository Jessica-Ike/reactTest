import { BrowserRouter, Routes, Route } from "react-router-dom";
import Front from "./Front_Page/Front";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Front/>} />
      </Routes>
    </BrowserRouter>
  );
}
