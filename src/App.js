import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

// import ProductList from './components/product/productList.js';
// import Main from './components/tictactoe/Main';
// import UppDown from './components/useReducer/UppDown';
// import ListStuden from './components/LitsStuden/ListStuden';

// components
const App = () => {
    return (
        <div className="app-container">
            <div className="header-container">
                <Header />
            </div>
            <div className="main-contianer">
                <div className="sidenav-content"></div>
                <div className="app-content">
                    <Outlet />
                    <p>dsds</p>
                </div>
            </div>
            {/* <div>test link</div> */}
        </div>
    );
};

export default App;
