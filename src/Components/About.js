import React from 'react';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';

function About() {
    return (
        <>
            <main>
                <h2 className="underline">Who are we?</h2>
                <p>
                    That feels like an existential question, don't you
                    think?
                </p>
                <Button variant="contained">test</Button>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default About;