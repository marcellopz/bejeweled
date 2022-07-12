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
            setLeaderboard(fetchedResults)
        })
    }

    useEffect(() => {
        getLeaderboard()
    }, [])

    return (
        <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            margin: 5,
        }}>
            <Typography component="h1" variant="h5" margin={2}>
                Points
            </Typography>
            <TextField value={points} InputProps={{readOnly: true, inputProps: {style: {textAlign: 'center'}}}}
                       sx={{marginBottom: 5, justifyContent: 'center'}}/>
            <EndGame/>
            <Leaderboard leaderboard={leaderboard}/>
        </Box>
    );
};

export default memo(GameInfo);