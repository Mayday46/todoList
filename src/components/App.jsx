import React, { useState } from "react";

function App() {

    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        setInputText(event.target.value);
        // console.log(event.target.value);
    }

    function onClick() {
        console.log("Clicked");
    }

    return (
        <div className="container">
        <div className="heading">
            <h1>To-Do List</h1>
        </div>
        <div className="form">
            <input onChange = {handleChange}type="text" value = {inputText}/>
            <button onClick = {onClick}>
            <span>Add</span>
            </button>
        </div>
        <div>
            <ul>
            <li>A Item</li>
            </ul>
        </div>
        </div>
    );
}

export default App;