import React, { useState } from "react";
import TodoItem from "./toDoItem";

function App() {

    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]); // Array to store the items -> Task 2

    function handleChange(event) {
        setInputText(event.target.value);
        // console.log(event.target.value);
    }

    // function addItem() {
    //     // console.log("Clicked");
    //     setItems((prevValue) => {
    //         return [...prevValue, inputText];
    //     });
    //     setInputText(""); // Clear the input field after adding the item -> Task 2
    // }

    function addItem() {
        if (inputText !== "") { // This prevents users from entering empty tasks.
            setItems((prevValue) => {
                return [...prevValue, inputText]; // Spread operator to add the new task to the array
            });
            setInputText("");
        } else {
            alert("Please enter a valid task");
        }
    }

    // Handle keypress in the input field
    function handleKeyDown(event) {
        if (event.key === "Enter") {
            addItem();
        }
    }

    // Handle clear all items
    function clearAll() {
        setItems([]);
    }

    return (
        <div className="container">
        <div className="heading">
            <h1>To-Do List</h1>
        </div>
        <div className="form">
            <input onKeyDown = {handleKeyDown} onChange = {handleChange} type="text" value = {inputText}/>
            <button onClick = {addItem}>
            <span>Add</span>
            </button>
            
            <button onClick = {clearAll}>
            <span>Clear All</span>
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