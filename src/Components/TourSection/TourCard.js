import React from 'react';
import {Grid, Paper, Rating, Typography, createTheme, ThemeProvider} from "@mui/material";
import Box from "@mui/material/Box";
import {AccessTime} from "@mui/icons-material";

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {fontSize: 11}
                },
                {
                    props: {
                        variant: "body3"
                    },
                    style: {fontSize: 9}
                }
            ]
        }
    }
})

const TourCard = ({tour}) => {
    return (
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
                <Paper elevation={10}>
                    <img className="w-full h-24" src={tour.image} alt='xd'/>
                    <Box paddingX={1}>
                        <Typography variant="subtitle1" component="h2">
                            {tour.name}
                        </Typography>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <AccessTime sx={{width: 12.5}}/>
                            <Typography variant="body2" component="p" marginLeft={0.5}>
                                {tour.duration} Hours
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center"
                        }}
                             marginTop={3}>
                            <Rating name="read-only" value={tour.rating} readOnly precision={0.5}/>
                            <Typography variant="body2" component="p" marginLeft={0.5}>
                                {tour.rating}
                            </Typography>
                            <Typography variant="body3" component="p" marginLeft={0.5}>
                                ({tour.numberOfReviews} reviews)
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" component="h3" marginTop={0.5}>
                                From C ${tour.price}
                            </Typography>
                        </Box>
                    </Box>


                </Paper>
            </ThemeProvider>
        </Grid>
    );
};

export default TourCard;