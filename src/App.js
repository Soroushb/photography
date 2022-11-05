import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ResponsiveAppBar from "./components/header/header";
import Home from "./components/Home/Home";


const App = () => {


    return(
        
       <>
            <ResponsiveAppBar/>
            <Navbar/>
            <Home/>
       
        </>

    )
}

export default App