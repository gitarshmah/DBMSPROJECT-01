import React from "react";
import classes from "./Classroom.module.css";
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function InputArea(props) {
    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        const newvalue = event.target.value;
        setInputText(newvalue);
    }

    return (
        <div className={classes["announcement"]}>
          <textarea rows="6" cols="121"
           placeholder="Announce something to your class"
              value={inputText}
              onChange={handleChange}>
              </textarea>
              <button className={classes["add-button"]}
              onClick={() => {
                  props.onAdd(inputText);
                  setInputText("");
              }}>
              <span>Add</span>
              </button>
            <br />
        </div>
    );
}

export default InputArea;



