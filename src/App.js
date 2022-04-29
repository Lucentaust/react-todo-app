import React, { useState } from 'react';
import './App.css';
import Form from './components/JustForm';
import AddList from './components/AddList';

const App = () => {
    let [content, setContent] = useState({Name: '', Quantity: ''});
    let [array, setArray] = useState([]);

    return (
        <div className="bg" id='bg'>
            <div className="container">
                <div className="card">
                    <div className='title'>
                        <h1>TODO LIST</h1>
                    </div>
                    <Form content={content} setContent={setContent} setArray={setArray} array={array}/>
                </div>

                <div className='output'>
                    <span>Output</span>
                    <ul>
                        <AddList array={array} setArray={setArray}/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
