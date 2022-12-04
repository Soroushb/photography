import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ResponsiveAppBar from "./components/header/header";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Footer from "./components/Footer/Footer";
import PostDetails from "./components/PostDetails/PostDetails";


const App = () => {

    const user = JSON.parse(localStorage.getItem('profile'))

    return(
        
        <BrowserRouter>
          <ResponsiveAppBar/>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/posts" exact element={<Home />}/>
                <Route path="/posts/search" exact element={<Home />}/>
                <Route path="/posts/:id"  element={<PostDetails />}/>
                <Route path="/auth" exact element={(!user ? <Auth/> : <Navigate to="/"/>)}/>
            </Routes>
            <Footer/>
        </BrowserRouter>  

    )
}

export default App