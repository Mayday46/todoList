import React from "react";

function ToDoItem(props) {

    const [isClicked, setIsClicked] = React.useState(false);

    function handleClicked() {
        setIsClicked((prevValue) => {
            return !prevValue;
        });
    }

    return (
        <div
        // onClick={() => {
        //     props.onChecked(props.id); // This is used to delete the item from the list
        // }}
        onClick = {handleClicked}
        >
        <li
            style = {{
                textDecoration: isClicked ? "line-through" : "none",
                cursor: "pointer" // Shows pointer cursor on hover.
            }}
        >{props.text}</li>
        </div>
    );
}

export default ToDoItem;