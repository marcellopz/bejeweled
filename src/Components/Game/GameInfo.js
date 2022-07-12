import React, {memo, useEffect, useState} from 'react';
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {useSelector} from "react-redux";
import Leaderboard from "./GameLeaderboard";
import instance from "../AxiosInstance";
import EndGame from "./EndGame";

const GameInfo = () => {

    const {points} = useSelector(state => state.game)
    const [leaderboard, setLeaderboard] = useState([])

    const getLeaderboard = async () => {
        let fetchedResults = []
        instance.get('/logs.json').then(r => {
            for (let key in r.data) {
                fetchedResults.push({
                    player: r.data[key].player,
                    points: r.data[key].points,
                    date: r.data[key].date,
                    id: key
                })
            }
            fetchedResults.sort((a, b) => (a.points < b.points) ? 1 : -1)
            setLeaderboard(fetchedResults.slice(0, 10))
        })
    }

    useEffect(() => {
        getLeaderboard()
    }, [])

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            margin: 1
        }}>
            <Typography component="h1" sx={{margin: {xs: 1, md: 2}, fontSize: {xs: 20, md: 30}}}>
                Points
            </Typography>
            <TextField value={points} InputProps={{readOnly: true, inputProps: {style: {textAlign: 'center'}}}}
                       sx={{marginBottom: {xs: 1, md: 5}, justifyContent: 'center'}}/>
            <EndGame/>
            <Leaderboard leaderboard={leaderboard}/>
        </Box>
    );
};

export default memo(GameInfo);