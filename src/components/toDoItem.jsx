import React, { useState } from "react";

// Create a new component called TodoItem
// This component will be used to display the list items
// This component will receive the text of the item as a prop
function TodoItem(props) { // Props is read-only
    
    const [isClicked, setisClicked] = useState(false);

    function handleClick() {
        // console.log("Clicked");
        setisClicked((prevValue) => {
            // if (prevValue === false) {
            //     return true;
            // } else {
            //     return false;
            // }
            return !prevValue; // This is the same as the above if-else statement
        });
    }
    
    return (
        <li onClick = {handleClick} style = {{textDecoration: isClicked ? "line-through" : "none", cursor: "pointer"}}>
            {props.text}
        </li>
    );
}

export default TodoItem;