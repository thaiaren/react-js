import React from 'react';
import { Data } from './data';
import ProductItems from './productItem';
import '../../App.css';
const ProductList = (props) => {
    return (
        <div className="product-container">
            {props.children}
            {Data.map((item, index) => {
                return (
                    <ProductItems
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        avatar={item.avatar}
                        author={item.author}
                        classNam={index === 1 ? 'abc' : ''}
                    ></ProductItems>
                );
            })}
        </div>
    );
};

export default ProductList;
