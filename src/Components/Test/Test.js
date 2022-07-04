import React from 'react';
import Button from "@mui/material/Button";
import {ThemeProvider, createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#68a6ea'
        },
        secondary: {
            main: '#68ea6a'
        }
    }
})

const Test = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                xd
            </div>
            <Button variant='contained' color='primary'>Hello world</Button>
        </ThemeProvider>
    );
};

export default Test;