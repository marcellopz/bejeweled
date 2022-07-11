import {configureStore} from "@reduxjs/toolkit";
import gameReducer from "./gameStore";

const store = configureStore({
    reducer: {
        game: gameReducer
    }
})

export default store