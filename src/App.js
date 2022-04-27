import React from "react";
import './style/App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Naxbar/Navbar";
import Profile from "./components/Profile/Profile";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    )
};

export default App;
