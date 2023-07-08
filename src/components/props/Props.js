import React from 'react';
import PropsChill from './PropsChill';
import Chillren from './Chillren';
import Children from './Childen1';

const Props = () => {
    return (
        <div>
            <h1>đây là cha</h1>
            <PropsChill value="Đây là con">
                <Chillren item="thái" />
                <Children it="cháu 2" />
            </PropsChill>
        </div>
    );
};
export default Props;
