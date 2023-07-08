import React, { useState } from 'react';
import './App.css';
import ProductList from './components/product/productList.js';
import Main from './components/tictactoe/Main';
import UppDown from './components/useReducer/UppDown';
import ListStuden from './components/LitsStuden/ListStuden';

// components
const array = [200, 500];
function App() {
    const [count, setCount] = useState(() => {
        const total = array.reduce((sum, value) => sum + value);
        return total;
    });
    const handle = () => {
        setCount((prve) => prve + 1);
    };
    // const [on, setOn] = useState(true);
    // console.log(on);
    // const onoff = () => {
    //     setOn(on === false ? true : false);
    // };
    const [on, setBtn] = useState(false);
    const btn = () => {
        setBtn((on) => !on); // !on  : ngược lại
    };

    return (
        <div>
            <ListStuden />
            <UppDown />
            <Main />
            <ProductList></ProductList>

            <h1> {count} </h1>
            <button onClick={handle}>count</button>
            <div onClick={btn}>sd {on ? 'on' : 'off'}</div>
            <div>
                <div className={`toggle ${on ? 'active' : ''}`} onClick={btn}>
                    <div className={`spiner ${on ? 'active' : ''}`}></div>
                </div>
                {/* <div className="btn">
                    <div className="btn-on" onClick={btn}>
                        on
                    </div>
                    <div className="btn-off" onClick={btn}>
                        off
                    </div>
                </div> */}
            </div>
            {/* <div>
                <div className={`toggle ${on ? 'active' : ''}`}>
                    <div className={`spiner ${on ? 'ac' : ''}`}></div>
                </div>
                <div className="btn">
                    <div className="btn-on" onClick={() => setBtn(true)}>
                        on
                    </div>
                    <div className="btn-off" onClick={() => setBtn(false)}>
                        off
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default App;
