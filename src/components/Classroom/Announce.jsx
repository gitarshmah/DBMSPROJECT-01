import React from "react";
import classes from "./Classroom.module.css";


function Announce(props) {

    function handleClick() {
        props.onChecked(props.id);
    }
    return (
        <div className={classes["announce"]}>
        <p>{props.text}</p>
        <button onClick={handleClick} className={classes["del-button"]}>delete</button>
        </div>
    );

}

export default Announce;