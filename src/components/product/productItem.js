import React from 'react';
const ProductItems = (Props) => {
    return (
        <div className="product-items">
            <div className="product">
                <img src={Props.img} alt="img" />
            </div>
            <div className="info">
                <img src={Props.avatar} alt="" className="avatar" />
                <div className={Props.classNam}>
                    <h2 className="title">{Props.title}</h2>
                    <p className="author">{Props.author}</p>
                </div>
            </div>
        </div>
    );
};
export default ProductItems;
