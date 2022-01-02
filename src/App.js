import logo from "./logo.svg";
import "./App.css";
import HomePage from "./HomePage";
import { BrowserRouter, Router, Route, Switch, Routes } from "react-router-dom";
import RoutesData from "./routes";
import AddUser from "./AddUser";
import RemoveUser from "./RemoveUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<HomePage/>} />
        <Route path="/adduser" exact element={<AddUser/>} />
        <Route path="/remove user" exact element={<RemoveUser/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
