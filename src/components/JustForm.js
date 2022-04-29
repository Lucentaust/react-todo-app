import React from 'react';
import './JustForm.css'

const Form = ({content, setContent, setArray, array}) => {
    //When text has changed
    const handleChange = (event) => {
        const {name, value} = event.target;
        
        //Store text from input to content object
        setContent(prevContent => {
            return {...prevContent,[name]: value}
        });
    }
    
    //When submit
    const handleSubmit = (event) => {
        event.preventDefault();

       if (content.Name == '' || content.Quantity == '') {
            return alert('Khuy');
       }else{
            return setArray(prevArray => [...prevArray, content]);
       }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='inputBox'>
                <p>Name</p>
                <input
                    type='text'
                    placeholder='Write Something...'
                    maxLength = "10"
                    name="Name"
                    value={content.Name}
                    onChange={handleChange}
                />
            </div>

            <div className='inputBox'>
                <p>Content</p>
                <input
                    type='text'
                    placeholder='Write Something...'
                    maxLength = "100"
                    name="Quantity"
                    value={content.Quantity}
                    onChange={handleChange}
                />
            </div>
        
        <button type='submit' value='Submit'>Add</button>
    </form>
    )
}

export default Form;