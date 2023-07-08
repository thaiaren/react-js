import React from 'react';
import InputList from './InputList';

const ListStuden = ({ title, list, onChange }) => {
    return (
        <div>
            <InputList onChange={() => onChange()} />
            <table>
                <tr>
                    {title.map((item) => {
                        return <th key={item}>{item}</th>;
                    })}
                </tr>
                {list.map((item) => {
                    return (
                        <tr key={item.Id}>
                            <td key={item.Id}>{item.Id}</td>
                            <td key={item.name}>{item.name}</td>
                            <td key={item.age}> {item.age}</td>
                            <td key={item.email}>{item.email}</td>
                            <td>
                                <button>chỉnh sửa</button>
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
