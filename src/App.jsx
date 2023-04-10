import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./styles/header.css";
import Container from "./Components/Container";
import { HashRouter} from "react-router-dom"

const App = () => {
  
  return (
  <div className="app h-screen bg-gray-600">
  <Container>
    <div className="bg-green-600 h-screen">
    </div>
  </Container>
  </div>
)};
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>
, document.getElementById("app"));
