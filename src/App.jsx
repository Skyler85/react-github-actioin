import { useState } from 'react';
import './App.css';

export function sum (a, b) {
    return a + b;
}

function App() {
    const [count, setCount] = useState(0);
    // const [disabled, setDisabled] = useState(false);
    
    const refresh = () => {
        window.location.reload()
    }
    return (
        <div className='container'>
                <h1 data-testid='counter'>{count}</h1>
            <div className='gap'>
                <button data-testid='minus-button' onClick={() => setCount((prev) => prev - 1)}>
                    -
                </button>
                <button data-testid='plus-button' onClick={() => setCount((prev) => prev + 1)}>
                    +
                </button>
            </div>
            <div className='disable__box'>
                <button style={{backgroundColor: 'white'}}
                data-testid='on/off-button'
                onClick={() => refresh()}>on/off</button>
            </div>
        </div>
    );
}

export default App;
