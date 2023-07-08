import React, { useState } from 'react';

const Studens = () => {
    const [studen, setStuden] = useState([
        'ID   ',
        '   Tên học sinh ',
        'Tuổi',
        ' Email',
        '',
    ]);
    const [list, setList] = useState([
        {
            _id: 1,
            name: 'Thái',
            age: 26,
            email: 'thaiaren@gmail.com',
        },
        {
            _id: 2,
            name: 'Long',
            age: 26,
            email: 'thaiaren@gmail.com',
        },
        {
            _id: 3,
            name: 'Pháp',
            age: 26,
            email: 'thaiaren@gmail.com',
        },
        {
            _id: 4,
            name: 'Sinh',
            age: 26,
            email: 'thaiaren@gmail.com',
        },
    ]);
    const [newName, setNewName] = useState('');
    const [newAge, setNewAge] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newId, setNewId] = useState('');
    const [editingRow, setEditingRow] = useState('');
    const onclickAddStuden = () => {
        const setListCopy = [...list];
        setListCopy.push({
            _id: newId,
            name: newName,
            age: newAge,
            email: newEmail,
        });
        setList(setListCopy);
        setNewId('');
        setNewName('');
        setNewAge('');
        setNewEmail('');
    };
    const onclickEdit = (e) => {
        setNewId(e._id);
        setNewName(e.name);
        setNewAge(e.age);
        setNewEmail(e.email);
        setEditingRow(e._id);
    };
    const onChangeNewId = (e) => {
        setNewId(e.currentTarget.value);
    };
    const onChangeNewName = (e) => {
        setNewName(e.currentTarget.value);
    };
    const onChangeNewAge = (e) => {
        setNewAge(e.currentTarget.value);
    };
    const onChangeNewEmail = (e) => {
        setNewEmail(e.currentTarget.value);
    };

    return (
        <div>
            <input
                onChange={onChangeNewId}
                type="text"
                name="id"
                disabled={editingRow}
                value={newId}
                placeholder="id "
            />
            <input
                onChange={onChangeNewName}
                type="text"
                name="name"
                value={newName}
                placeholder="nhập tên "
            />
            <input
                onChange={onChangeNewAge}
                type="text"
                name="age"
                value={newAge}
                placeholder="nhập tuổi "
            />
            <input
                onChange={onChangeNewEmail}
                type="text"
                name="email"
                value={newEmail}
                placeholder="nhập email "
            />
            {/* nếu editingRow có giá trị thì  .... */}
            {editingRow ? (
                <button onClick={onclickAddStuden}>câp nhật</button>
            ) : (
                <button onClick={onclickAddStuden}>thêm</button>
            )}
            <table>
                <tr>
                    {studen.map((value) => {
                        return <td key={value}>{value}</td>;
                    })}
                </tr>
                {list.map((value) => {
                    return (
                        <tr key={value._id}>
                            <td key={value._id}>{value._id}</td>
                            <td key={value.name}>{value.name}</td>
                            <td key={value.age}>{value.age}</td>
                            <td key={value.email}>{value.email}</td>
                            <td>
                                <button onClick={() => onclickEdit(value)}>
                                    chỉnh sửa
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};
export default Studens;
