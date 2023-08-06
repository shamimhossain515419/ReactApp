import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import Admin from "./components/Admin/Admin";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
        <Route path="/admin" element={<Admin></Admin>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
