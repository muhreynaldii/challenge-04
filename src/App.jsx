import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home.jsx";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
  );
}

export default App;
