import React, { useState } from "react";

function InputArea(props) {
    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function enterPressed(event) {
        if (event.key === "Enter") {
            props.onAdd(inputText);
            setInputText("");
        }
    }

    return (
        <div className="form">
        <input
            onChange = {handleChange}
            type = "text"
            value = {inputText}
            onKeyDown = {enterPressed}
        />
        <button
            onClick={() => {
            props.onAdd(inputText);
            setInputText("");
            }}
        >
            <span>Add</span>
        </button>

        <button onClick = {props.onClear}>
            <span> Clear All </span>
        </button>
        
        </div>
    );
}

export default InputArea;