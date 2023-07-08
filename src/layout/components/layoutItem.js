import React from 'react';
function LayoutItem(props) {
    return (
        <div className="layout">
            <div className="layout-img">
                <img src={props.img} alt="img" />
            </div>
            <div className="layout-content">
                <div className="layout-avatar">
                    <img src={props.avatar} alt="avatar" />
                </div>
                <h2 className="layout-title"> {props.title}</h2>
                <p className="layout-author">{props.author}</p>
            </div>
        </div>
    );
}
export default LayoutItem;
