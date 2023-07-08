import React from 'react';
import './Layout.css';
import LayoutList from './layoutList';
// const Js = () => {
//     const element = <div id="roo">hello world</div>;
//     const elementR = React.createElement('div', { id: 'roo' }, ' hello world');
//     return <div></div>;
// };

function Layout() {
    const name = 'lorem10';
    return (
        <div>
            <LayoutList>{name}</LayoutList>
        </div>
    );
}
export default Layout;
