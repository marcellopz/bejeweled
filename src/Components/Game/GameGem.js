import React from 'react';

import {useDispatch, useSelector} from "react-redux";
import {selectGem, updateGrid} from "../store/gameStore";
import gem1 from './img/1.png'
import gem2 from './img/2.png'
import gem3 from './img/3.png'
import gem4 from './img/4.png'
import gem5 from './img/5.png'
import gem6 from './img/6.png'
import gem7 from './img/7.png'
import nothing from './img/nothing.png'
import selected from './img/selected.png'

const GameGem = ({id, position}) => {
    const dispatch = useDispatch();
    const isSelected = useSelector(state => (state.game.selectedGem.x === position.x) && state.game.selectedGem.y === position.y)
    const clickHandler = () => {
        dispatch(selectGem({x: position.x, y: position.y}))
        dispatch(updateGrid())
    }
    let path
    switch (id) {
        case 0:
            path = gem1;
            break;
        case 1:
            path = gem2;
            break;
        case 2:
            path = gem3;
            break;
        case 3:
            path = gem4;
            break;
        case 4:
            path = gem5;
            break;
        case 5:
            path = gem6;
            break;
        case 6:
            path = gem7;
            break;
        default:
            path = nothing;
            break;
    }
    return <div className="relative top-0 left-0">
        <img src={path} onClick={clickHandler} className="drop-shadow-md relative top-0 left-0" alt="gem"/>
        {isSelected && <img src={selected} className="absolute top-0 left-0" alt="selected"/>}
    </div>
};

export default GameGem;