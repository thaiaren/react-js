import React, { useState } from 'react';
import Board from './Board';
import { winner } from './Help';
import './style.css';

const Main = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [next, setNext] = useState(false);
    const win = winner(board);

    const handel = (index) => {
        const boardCopy = [...board];
        if (win || boardCopy[index]) return;
        boardCopy[index] = next ? 'X' : 'O';
        setBoard(boardCopy);
        setNext(!next);
    };
    const handelReset = () => {
        setBoard(Array(9).fill(null));
        setNext(true);
    };
    return (
        <div>
            <Board
                cell={board}
                onClick={handel}
                reset={handelReset}
                win={win}
            />
        </div>
    );
};
export default Main;
