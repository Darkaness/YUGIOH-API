import React from "react";
import './App.css';
import SearchComponent from "./components/SearchComponent";
import logo from'./images/yugioh-logo.png';
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return(
    <div className="header">
      <img className="logo" src={logo} alt="logo"/>
    </div>
  );
}

function Footer() {
  return(
    <div className="footer">
      todos los derechos reservados © DARKANESS
    </div>
  );
}


function App() {
  return (
    <div>
      <Header/>
      <SearchComponent/>
      <Footer/>
    </div>
  );
}


export default App;
