import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";

import Login from "./pages/account/login"
import Register from "./pages/account/register"

function App() {
    return (
        <Routes>
            <Route path="/" element={<><Header /> <Home /> <Footer /> </>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default App;