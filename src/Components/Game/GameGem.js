import React from 'react';
import SquareSharpIcon from '@mui/icons-material/SquareSharp';
import DiamondSharpIcon from '@mui/icons-material/DiamondSharp';
import SportsVolleyballSharpIcon from '@mui/icons-material/SportsVolleyballSharp';
import ChangeHistorySharpIcon from '@mui/icons-material/ChangeHistorySharp';
import BrightnessHighSharpIcon from '@mui/icons-material/BrightnessHighSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import PhoneAndroidSharpIcon from '@mui/icons-material/PhoneAndroidSharp';

const GameGem = ({id, x, y}) => {
    const sty = {fontSize: 80}
    const clickHandler = () => {
        console.log(x, y)
    }
    switch (id) {
        case 0:
            return <SquareSharpIcon sx={sty} onClick={clickHandler}/>;
        case 1:
            return <DiamondSharpIcon sx={sty} onClick={clickHandler}/>;
        case 2:
            return <SportsVolleyballSharpIcon sx={sty} onClick={clickHandler}/>;
        case 3:
            return <ChangeHistorySharpIcon sx={sty} onClick={clickHandler}/>;
        case 4:
            return <BrightnessHighSharpIcon sx={sty} onClick={clickHandler}/>;
        case 5:
            return <HomeSharpIcon sx={sty} onClick={clickHandler}/>;
        case 6:
            return <PhoneAndroidSharpIcon sx={sty} onClick={clickHandler}/>;
    }
    return <p>{id}</p>
};

export default GameGem;