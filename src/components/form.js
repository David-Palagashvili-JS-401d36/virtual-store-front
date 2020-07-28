//bring in the hook
import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';

const TodoForm = (props) => {
    const [formItem, changeItem] = useState({});
    // handel submit holds context
    const handleInputChange = (e) => {
        changeItem( {...formItem, [e.target.name]: e.target.value} );
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();

        props.handleSubmit(formItem);
        changeItem({});
    };

    return ( // react button from bootstrap appears here
        <>
            <h3>Add Item</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>To Do Item</span>
                    <input
                        name="text"
                        placeholder="Add To Do List Item"
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    <span>Difficulty Rating</span>
                    <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
                </label>
                <label>
                    <span>Assigned To</span>
                    <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
                </label>
                <Button type="submit">Add Item</Button>
            </form>
        </>
    );
};

export default TodoForm;