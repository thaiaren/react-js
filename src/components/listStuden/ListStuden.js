import React, { useState } from 'react';

const ListStuden = () => {
    const [title, setTitle] = useState(['Id', 'Tên', 'Tuổi ', 'Email']);
    const [list, setList] = useState([
        {
            _id: 1,
            name: 'Thái',
            age: 18,
            email: 'thaiaren@gmail.com',
        },
        {
            _id: 2,
            name: 'Long',
            age: 18,
            email: 'thaiaren@gmail.com',
        },
        {
            _id: 3,
            name: 'Sinh',
            age: 18,
            email: 'thaiaren@gmail.com',
        },
        {
            _id: 4,
            name: 'Pháp',
            age: 18,
            email: 'thaiaren@gmail.com',
        },
    ]);

    const [newId, setNewId] = useState('');
    const [newName, setNewName] = useState('');
    const [newAge, setNewAge] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [edit, setEdit] = useState('');

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
    const onClickAdd = () => {
        const ListCopy = [...list];
        ListCopy.push({
            _id: newId,
            name: newName,
            age: newAge,
            email: newEmail,
        });
        setList(ListCopy);
        setNewId('');
        setNewName('');
        setNewAge('');
        setNewEmail('');
    };
    const onClickUpdate = () => {
        const ListCopy = [...list];
        let i = list.findIndex((index) => index._id == edit);

        ListCopy[i] = {
            _id: newId,
            name: newName,
            age: newAge,
            email: newEmail,
        };
        setList(ListCopy);
        setNewId('');
        setNewName('');
        setNewAge('');
        setNewEmail('');
        setEdit('');
    };
    const onClickRemove = (_id) => {
        console.log(_id);
        const ListCopy = [...list];
        let i = ListCopy.findIndex((index) => index._id === _id);

        ListCopy.splice(i, 1);
        setList(ListCopy);
    };

    const onClickEdit = (e) => {
        console.log(e);
        setNewId(e._id);
        setNewName(e.name);
        setNewAge(e.age);
        setNewEmail(e.email);
        setEdit(e._id);
    };
    return (
        <div>
            <input
                value={newId}
                type="number"
                disabled={edit}
                placeholder="nhập ID"
                onChange={onChangeId}
            />
            <input
                value={newName}
                type="text"
                placeholder="Nhập Tên"
                onChange={onChangeName}
            />
            <input
                value={newAge}
                type="text"
                placeholder="Nhập Tuổi"
                onChange={onChangeAge}
            />
            <input
                value={newEmail}
                type="text"
                placeholder="Nhập Email"
                onChange={onChangeEmail}
            />
            {edit ? (
                <button onClick={onClickUpdate}>cập nhật</button>
            ) : (
                <button onClick={onClickAdd}>thêm</button>
            )}
            <table>
                <tr>
                    {title.map((value) => {
                        return <th key={value}>{value}</th>;
                    })}
                </tr>
                {list.map((item) => {
                    return (
                        <tr key={item._id}>
                            <td key={item._id}>{item._id}</td>
                            <td key={item.name}>{item.name}</td>
                            <td key={item.age}>{item.age}</td>
                            <td key={item.email}>{item.email}</td>
                            <td>
                                <button onClick={() => onClickEdit(item)}>
                                    Chỉnh sửa
                                </button>
                            </td>
                            <td>
                                <button onClick={() => onClickRemove(item._id)}>
                                    xoá
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};
export default ListStuden;
