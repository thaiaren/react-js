import React, { useState } from 'react';
import './listStuden.css';

const ListStuden = () => {
    const [title, setTitle] = useState(['iD', 'Họ Và Tên', 'Tuổi', 'Email']);
    const [list, setList] = useState([
        {
            _id: 1,
            name: 'Nguyễn Văn A',
            age: 25,
            email: 'nguyenvana@gmail.com',
        },
        {
            _id: 2,
            name: ' Nguyễn Văn B ',
            age: 13,
            email: 'nguyenvanb@gamil.com',
        },
        {
            _id: 3,
            name: 'Nguyễn Văn C',
            age: 42,
            email: 'Nguyenvanc@gmail.com',
        },
        {
            _id: 4,
            name: 'Nguyễn Văn D',
            age: 23,
            email: 'nguyenvand@gmail.com',
        },
    ]);
    const [newId, setNewId] = useState('');
    const [newName, setNewName] = useState('');
    const [newAge, setNewAge] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [edit, setNewEdit] = useState('');
    const onClickAdd = () => {
        const listCopy = [...list];
        console.log(listCopy);
        listCopy.push({
            _id: newId,
            name: newName,
            age: newAge,
            email: newEmail,
        });
        setList(listCopy);
        setNewId('');
        setNewName('');
        setNewAge('');
        setNewEmail('');
    };
    const onClickEdit = (item) => {
        setNewId(item._id);
        setNewName(item.name);
        setNewAge(item.age);
        setNewEmail(item.email);
        setNewEdit(item._id);
    };
    const onClickUp = () =>{
        const listCopy = [...list];
        listCopy.
    }
    const onChangeId = (e) => {
        setNewId(e.currentTarget.value);
    };
    const onChangeName = (e) => {
        setNewName(e.currentTarget.value);
    };
    const onChangeAge = (e) => {
        setNewAge(e.currentTarget.value);
    };
    const onChangeEmail = (e) => {
        setNewEmail(e.currentTarget.value);
    };

    return (
        <div className="listStuden">
            <div className="input">
                <input
                    type="text"
                    placeholder="nhập id"
                    onChange={onChangeId}
                    value={newId}
                />
                <input
                    type="text"
                    placeholder="nhập họ và tên"
                    onChange={onChangeName}
                    value={newName}
                />
                <input
                    type="text"
                    placeholder="nhập tuổi"
                    onChange={onChangeAge}
                    value={newAge}
                />
                <input
                    type="text"
                    placeholder="nhập email"
                    onChange={onChangeEmail}
                    value={newEmail}
                />
                {edit ? (
                    <button onClick={onClickUp}> cập nhật</button>
                ) : (
                    <button onClick={onClickAdd}> thêm</button>
                )}
            </div>
            <table className="table">
                <tr className="title">
                    {title.map((item) => {
                        return <td key={item}>{item}</td>;
                    })}
                </tr>
                {list.map((item) => {
                    return (
                        <tr className="list">
                            <td key={item._id}>{item._id}</td>
                            <td key={item.name}>{item.name}</td>
                            <td key={item.age}> {item.age} </td>
                            <td key={item.email}> {item.email} </td>
                            <td>
                                <button onClick={() => onClickEdit(item)}>
                                    {' '}
                                    chỉnh sửa
                                </button>
                            </td>
                            <td>
                                <button>xoá</button>
                            </td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};

export default ListStuden;
