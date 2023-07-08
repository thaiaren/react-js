import React from 'react';
import { dataLayout } from './data';
import LayoutItem from './layoutItem';
function LayoutList(props) {
    return (
        <div className="container">
            {props.children}
            {dataLayout.map((item) => {
                return (
                    <LayoutItem
                        key={item.id}
                        img={item.image}
                        avatar={item.avatar}
                        title={item.title}
                        author={item.author}
                    ></LayoutItem>
                );
            })}
        </div>
    );
}
export default LayoutList;
