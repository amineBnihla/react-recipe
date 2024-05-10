import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
 import Navbar from "./components/Navbar";
import Detail from "./pages/Details";
import Favourites from "./pages/Favorites";

function App() {
  return (
    <>
    <Navbar/>
    <div className="py-20 px-10">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/details/:id" element={<Detail/>} />
      <Route path="/favourites" element={<Favourites/>} />
    </Routes>
    </div>
    </>
  )
}

export default App
