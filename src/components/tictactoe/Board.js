import React from 'react';
import Cell from './Cell';
const Board = ({ onClick, cell, reset, win }) => {
    return (
        <div className="containe">
            <div className="main">
                {cell.map((value, index) => {
                    return (
                        <Cell
                            key={index}
                            onClick={() => onClick(index)}
                            value={value}
                            className={
                                value === 'X'
                                    ? 'is-X'
                                    : value === 'O'
                                    ? 'is-O'
                                    : ''
                            }
                        />
                    );
                })}
            </div>
            <div>
                {win ? (
                    <p className="win">{`nguoi chien thang la ${win} `}</p>
                ) : (
                    ''
                )}
                <button className="btn" onClick={() => reset()}>
                    reset
                </button>
            </div>
        </div>
    );
};
export default Board;
