import React from 'react';
import AppBar from "./AppBar";
import {Container, Typography, Box} from "@mui/material";

const Tour = () => {
    return (
        <><AppBar/>
            123
            <Container sx={{width: 900}}>
                <Typography variant='h3' component="h1" marginTop={3}>
                    Explore the World in Vegas
                </Typography>
                <Box marginTop={3} sx={{display: "flex"}}>
                    xd
                </Box>
            </Container>
        </>

    );
};

export default Tour;