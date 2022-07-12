import * as React from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {memo, useState} from "react";
import Typography from "@mui/material/Typography";

function LeaderboardDialog(props) {
    const {onClose, open, leaderboard} = props;

    const handleClose = () => {
        onClose();
    };


    return (
        <Dialog onClose={handleClose} open={open} maxWidth="xs" fullWidth={true}>
            <DialogTitle>Leaderboard:</DialogTitle>
            <List sx={{pt: 0}}>
                {
                    leaderboard.length &&
                    leaderboard.map((entry, i) => (
                        <ListItem key={i} secondaryAction={entry.points} sx={{paddingX: 2}}>
                            <Typography margin={2} sx={{fontWeight: 'bold'}}>
                                {(i + 1).toString() + '.'}
                            </Typography>
                            <ListItemText primary={entry.player} secondary={entry.date}/>
                        </ListItem>
                    ))
                }
            </List>
        </Dialog>
    );
}

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

export default memo(Leaderboard)