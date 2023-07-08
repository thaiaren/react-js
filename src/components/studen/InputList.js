import React from 'react';

const InputList = ({ onChange }) => {
    return (
        <div>
            <input type="number" placeholder="nhập ID" onChange={onChange} />
            <input type="text" placeholder="nhập tên" />
            <input type="text" placeholder="nhập tuổi" />
            <input type="text" placeholder="nhập email" />
        </div>
    );
};
export default InputList;
