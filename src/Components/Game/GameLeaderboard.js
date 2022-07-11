import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {useState} from "react";

function LeaderboardDialog(props) {
    const {onClose, open, leaderboard} = props;

    console.log(leaderboard)

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open} maxWidth="sm" fullWidth={true}>
            <DialogTitle>Leaderboard:</DialogTitle>
            <List sx={{pt: 0}}>
                {leaderboard.map((entry, i) => (
                    <ListItem key={i}>
                        <ListItemText primary={entry.player}/>
                        <ListItemText secondary={entry.points}/>
                    </ListItem>
                ))}
            </List>
        </Dialog>
    );
}

LeaderboardDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
};

function Leaderboard({leaderboard}) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Leaderboard
            </Button>
            <LeaderboardDialog
                open={open}
                onClose={handleClose}
                leaderboard={leaderboard}
            />
        </div>
    );
}


export default Leaderboard