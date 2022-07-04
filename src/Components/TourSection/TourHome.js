import React from 'react';
import {Container, Grid, Typography} from '@mui/material'
import TourCard from "./TourCard";
import AppBar from "./AppBar";
import cities from "../../data.json"

const TourHome = () => {
    return (
        <>
            <AppBar/>
            <Container sx={{marginY: 5}}>
                {cities.map((city, i) => {
                    return (<div key={i}>
                        <Typography
                            variant='h4'
                            component='h2'
                            marginTop={5}
                            marginBottom={3}
                        >
                            Top {city.name} tours
                        </Typography>
                        <Grid container spacing={5}>
                            {city.tours.map((tour, j) => <TourCard tour={tour} key={j}/>)}
                        </Grid>
                    </div>)
                })}
            </Container>
        </>
    );
};

export default TourHome;

