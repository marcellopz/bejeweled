import React, {memo, useEffect, useState} from 'react';
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {useSelector} from "react-redux";
import Button from "@mui/material/Button";
import Leaderboard from "./GameLeaderboard";
import instance from "../AxiosInstance";

const GameInfo = () => {

    const {points, player, time} = useSelector(state => state.game)
    const [leaderboard, setLeaderboard] = useState([])

    const endGameHandler = () => {
        instance.post('/logs.json', {player: player, points: points}).then(response => {
            console.log(response)
            window.location.reload()
        })
    }

    const getLeaderboard = async () => {
        let fetchedResults = []
        instance.get('/logs.json').then(r => {
            for (let key in r.data) {
                fetchedResults.push({
                    player: r.data[key].player,
                    points: r.data[key].points,
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
                Player name
            </Typography>
            <TextField value={player} InputProps={{readOnly: true, inputProps: {style: {textAlign: 'center'}}}}
                       sx={{marginBottom: 5, justifyContent: 'center'}}/>
            <Typography component="h1" variant="h5" margin={2}>
                Points
            </Typography>
            <TextField value={points} InputProps={{readOnly: true, inputProps: {style: {textAlign: 'center'}}}}
                       sx={{marginBottom: 5, justifyContent: 'center'}}/>
            <Typography component="h1" variant="h5" margin={2}>
                Time remaining
            </Typography>
            <TextField value={time} InputProps={{readOnly: true, inputProps: {style: {textAlign: 'center'}}}}
                       sx={{marginBottom: 5, justifyContent: 'center'}}/>
            <Button onClick={endGameHandler}>
                End Game
            </Button>
            <Leaderboard leaderboard={leaderboard}/>
        </Box>
    );
};

export default memo(GameInfo);