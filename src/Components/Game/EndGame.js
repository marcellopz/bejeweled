import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react";
import instance from "../AxiosInstance";
import {useSelector} from "react-redux";

const EndGame = () => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('')
    const {points} = useSelector(state => state.game)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const padTo2Digits = (num) => {
        return num.toString().padStart(2, '0');
    }

    const formatDate = (date) => {
        return [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
        ].join('/');
    }

    const handleSubmit = () => {
        instance.post('/logs.json', {player: name, points: points, date: formatDate(new Date())}).then(response => {
            console.log(response)
            window.location.reload()
        })
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen} sx={{margin: 5}}>
                End Game
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>End game</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To end the game and send your score to the leaderboard, type your name bellow:
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Finish</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EndGame


