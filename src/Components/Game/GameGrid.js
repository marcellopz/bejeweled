import React, {useEffect, useRef, useState} from 'react';
import {Card, Grid} from "@mui/material";
import GameGem from "./GameGem";
import {useDispatch, useSelector} from "react-redux";
import {updateGrid} from "../store/gameStore";

const GameGrid = () => {
    let movement_timer = null;
    const RESET_TIMEOUT = 300;
    const refContainer = useRef();
    const [dimensions, setDimensions] =
        useState({});
    const dispatch = useDispatch()

    const adjust_grid = () => {
        if (refContainer.current) {
            const lower = refContainer.current.offsetHeight < refContainer.current.offsetWidth ? refContainer.current.offsetHeight : refContainer.current.offsetWidth
            setDimensions({width: lower - 50, height: lower - 50})
        }
    }

    useEffect(adjust_grid, [RESET_TIMEOUT])

    window.addEventListener('resize', () => {
        clearInterval(movement_timer)
        movement_timer = setTimeout(adjust_grid, RESET_TIMEOUT)
    })

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