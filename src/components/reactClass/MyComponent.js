import React from 'react';
import AddInfo from './AddInfo';
import Children from './Children';

class MyComponent extends React.Component {
    state = {
        listUser: [
            {
                name: 'Nguyễn Văn A',
                age: 16,
            },
            {
                name: 'Nguyễn Văn V',
                age: 33,
            },
            {
                name: 'Nguyễn Văn C',
                age: 33,
            },
        ],
    };
    handleAddNewUser = (a) => {
        console.log(a);
        this.setState({
            listUser: [a, ...this.state.listUser],
        });
    };
    render() {
        return (
            <div>
                <AddInfo handleAddNewUser={this.handleAddNewUser} />
                <Children listUser={this.state.listUser} />
            </div>
        );
    }
}
export default MyComponent;
