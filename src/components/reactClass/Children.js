import React from 'react';

class Children extends React.Component {
    state = {
        show: true,
    };
    onClickHidden = () => {
        this.setState({ show: !this.state.show });
    };

    render() {
        const { listUser } = this.props;

        return (
            <div>
                <div>
                    {/* {this.state.show ? (
                        <span onClick={this.onClickHidden}> hidden</span>
                    ) : (
                        <span onClick={this.onClickHidden}> show</span>
                    )} */}
                    <span onClick={this.onClickHidden}>
                        {' '}
                        {this.state.show ? 'hidden' : 'show'}
                    </span>
                </div>
                {this.state.show && (
                    <div>
                        {listUser.map((item) => {
                            return (
                                <div
                                    key={item.name}
                                    className={
                                        item.age > 18 ? 'red' : 'blueviolet'
                                    }
                                >
                                    <p>my name {item.name}</p>
                                    <p> age {item.age}</p>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }
}
export default Children;
