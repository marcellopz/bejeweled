import React, {useEffect, useRef, useState} from 'react';
import {Card, Grid} from "@mui/material";
import GameGem from "./GameGem";
import {useSelector} from "react-redux";

const GameGrid = () => {
    let movement_timer = null;
    const RESET_TIMEOUT = 300;
    const refContainer = useRef();
    const [dimensions, setDimensions] =
        useState({});

    const adjust_grid = () => {
        if (refContainer.current) {
            const lower = refContainer.current.offsetHeight < refContainer.current.offsetWidth ? refContainer.current.offsetHeight : refContainer.current.offsetWidth
            setDimensions({width: lower * 0.95, height: lower * 0.95})
        }
    }

    useEffect(adjust_grid, [])

    const resize = () => {
        clearInterval(movement_timer)
        movement_timer = setTimeout(adjust_grid, RESET_TIMEOUT)
    }

    window.onload = resize

    window.addEventListener('resize', resize)

    const gemGrid = useSelector(state => state.game.gemGrid)

    return (
        <Grid container justifyContent="center" alignItems="center" width="100%" height="100%" ref={refContainer}>
            <Grid item>
                <Card sx={{width: dimensions.width, height: dimensions.height, backgroundColor: '#b2b1b1'}}>
                    <Grid container justifyContent="center" alignItems="center" width="100%"
                          height="100%" direction='column'>
                        <div className="grid grid-cols-8">
                            {gemGrid.map((gemLine, i) => <React.Fragment key={i}>
                                {gemLine.map((gemId, j) =>
                                    <GameGem id={gemId} position={{x: i, y: j}} key={j}/>
                                )}
                            </React.Fragment>)}
                        </div>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    );
};

export default GameGrid;