import React from 'react';
import {Card, Container, Grid} from "@mui/material";
import GameGem from "./GameGem";

const GameGrid = () => {
    const makeArray = (ARRAY_LENGTH) => {
        return Array.from(Array(ARRAY_LENGTH)).map(_ => Math.random())
    }

    // const gemGrid = Array.from(Array(8)).map(() => makeArray(8))
    const gemGrid = [
        [0, 2, 3, 4, 5, 6, 2, 0],
        [1, 2, 3, 4, 5, 6, 2, 0],
        [1, 2, 3, 4, 5, 6, 2, 0],
        [1, 2, 3, 4, 5, 6, 2, 0],
        [1, 2, 3, 4, 5, 6, 2, 0],
        [1, 2, 3, 4, 5, 6, 2, 0],
        [1, 2, 3, 4, 5, 6, 2, 0],
        [1, 2, 3, 4, 5, 6, 2, 0]
    ]


    return (
        <Grid container justifyContent="center" alignItems="center" width="100%" height="100%">
            <Grid item>
                <Card sx={{height: '700px', width: '700px', backgroundColor: 'lightGray'}}>
                    <Grid container justifyContent="center" alignItems="center" width="100%"
                          height="100%" direction='column'>
                        <div className="grid grid-cols-8">
                            {gemGrid.map((gemLine, i) => <>{gemLine.map((gemId, j) =>
                                <GameGem id={gemId} x={i} y={j}/>
                            )}</>)}
                        </div>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    );
};

export default GameGrid;