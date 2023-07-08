import React from 'react';

const Cell = ({ onClick, value, className }) => {
    return (
        <div className={`cell ${className}`} onClick={onClick}>
            {value}
        </div>
    );
};
export default Cell;
