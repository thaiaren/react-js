import { current } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import ListStuden from './ListStuden';

const Studen = () => {
    const [title, setTitle] = useState(['Id', 'Họ và tên', 'Tuổi', 'Email']);
    const [list, setList] = useState([
        {
            Id: 1,
            name: 'Hồ Văn Thái',
            age: 26,
            email: 'thaiaren@gmail.com',
        },
        {
            Id: 2,
            name: 'Nguyễn Văn A',
            age: 23,
            email: 'nguyenvana@gmail.com',
        },
        {
            Id: 3,
            name: 'Nguyễn Văn b',
            age: 23,
            email: 'nguyenvana@gmail.com',
        },
        {
            Id: 4,
            name: 'Nguyễn Văn c',
            age: 23,
            email: 'nguyenvana@gmail.com',
        },
    ]);
    const onChangId = (e) => {
        console.log(e.currentTarget.value);
    };
    return <ListStuden title={title} list={list} onChange={onChangId} />;
};
export default Studen;
