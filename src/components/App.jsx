import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./toDoItem";

function App() {
    const [items, setItems] = useState([]);

    function addItem(inputText) {
        if (inputText !== "") {
            setItems((prevItems) => [...prevItems, inputText]);
        } else {
            alert("Please enter a task.");
        }
    }

    function deleteItem(id) {
        setItems(prevItems => {
        return prevItems.filter((item, index) => {
            return index !== id;
        });
        });
    }

    function clearAll() {
        setItems([]);
    }

    return (
        <div className="container">
        <div className="heading">
            <h1>To-Do List</h1>
        </div>
        <InputArea onAdd={addItem} onClear = {clearAll}/>
        <div>
            <ul>
            {items.map((todoItem, index) => (
                <ToDoItem
                key={index}
                id={index}
                text={todoItem}
                // onChecked={deleteItem}
                />
            ))}
            </ul>
        </div>
        </div>
    );
}

export default App;