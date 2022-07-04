import * as React from "react";
import {Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import SignIn from "./Components/SignIn/SignIn";
import Test from "./Components/Test/Test";
import TourGrid from "./Components/TourSection/TourApp";
import Tour from "./Components/TourSection/Tour";
import GameApp from "./Components/Game/GameApp";
import {Box} from "@mui/material";

function App() {
    return (
        <Box>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="test" element={<Test/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="sign-in" element={<SignIn/>}/>
                <Route path="tour" element={<TourGrid/>}/>
                <Route path="tour/:id" element={<Tour/>}/>
                <Route path="game" element={<GameApp/>}/>
            </Routes>
        </Box>
    );
}

export default App;
