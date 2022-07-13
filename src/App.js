import * as React from "react";
import {Routes, Route} from "react-router-dom";
import "./App.css";
import GameApp from "./Components/Game/GameApp";
import {Box} from "@mui/material";

function App() {
    return (
        <Box>
            <Routes>
                <Route path="/" element={<GameApp/>}/>
            </Routes>
        </Box>
    );
}

export default App;
