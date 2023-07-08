import React from 'react';

const PropsChill = (props) => {
    return (
        <React.Fragment>
            <p>{props.value}</p>
            {/* <Chillren item={props.item}></Chillren> */}
            {props.children}
        </React.Fragment>
    );
};
export default PropsChill;
