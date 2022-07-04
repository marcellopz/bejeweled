import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Paper} from "@mui/material";
import {useNavigate} from "react-router-dom"


const theme = createTheme({});

export default function SignIn() {
    let navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('User name'),
            password: data.get('password'),
        });
        navigate("/game")
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={0} direction="column" alignItems='center' justifyContent='center'
                  style={{minHeight: '100vh'}}>
                <Paper component="main" elevation={5} sx={{
                    height: 400,
                    width: 400,
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: '#e7f2ff',
                    borderRadius: 3
                }}>
                    <Box sx={{marginTop: 8, display: 'flex', flexDirection: "column", alignItems: 'center', margin: 5}}>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="User name"
                                label="User Name"
                                name="User name"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="src/Components/SignIn/SignIn#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="src/Components/SignIn/SignIn#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </ThemeProvider>
    );
}