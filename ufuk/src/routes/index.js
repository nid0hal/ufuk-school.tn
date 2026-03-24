import { Routes, Route } from "react-router-dom";
import Home from "../home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}