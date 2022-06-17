import nothing from "./img/not.png";
import x from "./img/x.png"
import o from "./img/o.png"

const Square = ({switchTurn, id, value, gameOver}) => {

    let mark = nothing

    if (value === 'x') {
        mark = x
    } else if (value === 'o') {
        mark = o
    }

    const onClickHandler = () => {
        if (mark === nothing && !gameOver) {
            switchTurn(id)
        }
    }

    return <img
        className="inline-block bg-gray-100 m-2 rounded shadow-lg hover:bg-sky-300 active:bg-red-300"
        src={mark}
        width="200"
        height="200"
        onClick={onClickHandler}
        alt="bad"/>
};

export default Square;