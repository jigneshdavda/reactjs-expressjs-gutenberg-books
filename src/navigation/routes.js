import { BrowserRouter, Routes, Route } from "react-router-dom";
import Genre from "../pages/genre";
import Home from "../pages/home";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/genre/:category" element={<Genre/>} />
        <Route path="/genre" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}
