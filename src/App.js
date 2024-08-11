import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { ToastContainer } from "react-toastify";
import Appheader from "./Components/Navbar";
import EditItem from "./Components/EditItem";
import ListingItem from "./Components/ListingItem";
import CreateItem from "./Components/CreateItem";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored" position="top-center"></ToastContainer>
      <BrowserRouter>
        <Appheader></Appheader>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/listing" element={<ListingItem />}></Route>
          <Route path="/create" element={<CreateItem />}></Route>
          <Route path="/edit/:itemid" element={<EditItem />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
