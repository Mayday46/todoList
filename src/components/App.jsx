import React, { useState } from "react";
import TodoItem from "./toDoItem";

function App() {

    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]); // Array to store the items -> Task 2

    function handleChange(event) {
        setInputText(event.target.value);
        // console.log(event.target.value);
    }

    function addItem() {
        // console.log("Clicked");
        setItems((prevValue) => {
            return [...prevValue, inputText];
        });
        setInputText(""); // Clear the input field after adding the item -> Task 2
    }

    return (
        <div className="container">
        <div className="heading">
            <h1>To-Do List</h1>
        </div>
        <div className="form">
            <input onChange = {handleChange}type="text" value = {inputText}/>
            <button onClick = {addItem}>
            <span>Add</span>
            </button>
        </div>
        <div>
            <ul>
                {items.map((todoItem) => {
                    return <TodoItem text={todoItem} />;
                })}
            </ul>
        </div>
        </div>
    );
}

export default App;