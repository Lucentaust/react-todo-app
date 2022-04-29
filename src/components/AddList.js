import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './AddList.css'

const AddList = ({array, setArray}) => array.map((element) => {
    return (
        <div className="list" key={uuidv4}>
            <i className="fa-solid fa-xmark" onClick={element => {
                const emp = [...array];
                emp.splice(element, 1);
                setArray(emp);
            }}></i>
            <div className='format-text'>
                <p>Name: {element.Name}</p>
                <p>{element.Quantity}</p>
            </div>
        </div>
    )
});

export default AddList;