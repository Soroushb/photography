import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ResponsiveAppBar from "./components/header/header";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";


const App = () => {


    return(
        
        <BrowserRouter>
          <ResponsiveAppBar/>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/auth" exact element={<Auth />}/>
            </Routes>
       
        </BrowserRouter>  

    )
}

export default App