import React from "react";

// Create a new component called TodoItem
// This component will be used to display the list items
// This component will receive the text of the item as a prop
function TodoItem(props) {
    return (
        <li>{props.text}</li>
    );
}

export default TodoItem;