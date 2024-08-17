import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import EditItem from "./Components/EditItem";
import ListingItem from "./Components/ListingItem";
import CreateItem from "./Components/CreateItem";
import { ToastContainer } from "react-toastify";
import Layout from "./Components/Layout";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored" position="top-center"></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/listing"
            element={
              <Layout>
                <ListingItem />
              </Layout>
            }
          />
          <Route
            path="/create"
            element={
              <Layout>
                <CreateItem />
              </Layout>
            }
          />
          <Route
            path="/edit/:itemid"
            element={
              <Layout>
                <EditItem />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
