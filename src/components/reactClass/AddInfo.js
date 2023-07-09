import React from 'react';

class AddInfo extends React.Component {
    state = {
        name: 'thái',
        age: 23,
    };
    onChangeName = (even) => {
        this.setState({ name: even.target.value });
    };
    onChangeAge = (even) => {
        console.log(even.target.value);
        this.setState({ age: even.target.value });
    };
    onClickSummit = (even) => {
        even.preventDefault();
        console.log(even);
        this.props.handleAddNewUser({
            id: Math.floor(Math.random() * 100 + 1) + '-random',
            name: this.state.name,
            age: this.state.age,
        });
        this.setState({
            name: '',
            age: '',
        });
    };
    render() {
        return (
            <div>
                <form onSubmit={this.onClickSummit}>
                    <p>
                        tên {this.state.name} tuổi : {this.state.age}
                    </p>
                    <label htmlFor="">name</label>
                    <input
                        type="text"
                        onChange={this.onChangeName}
                        placeholder="tên"
                        value={this.state.name}
                    />
                    <label htmlFor="">age</label>
                    <input
                        type="text"
                        onChange={this.onChangeAge}
                        placeholder=" tuổi"
                        value={this.state.age}
                    />
                    <button>thay đổi</button>
                </form>
            </div>
        );
    }
}

export default AddInfo;
