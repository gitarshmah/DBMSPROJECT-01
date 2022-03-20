import React from "react";
import {useState} from 'react';
import InputArea from "./InputArea";
import { useParams } from "react-router";
import classes from "./Classroom.module.css";
import Announce from "./Announce";


const Classroom = () => {

  const {id} = useParams();
  const [items,setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id){
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <div className={classes["section"]}>
        <div className={classes["aboutclass"]}>
          <h5>{id}</h5>
          <img src="../assets/studying.png" width="150px" height="150px" alt="study_img"/>
        </div>
      </div>
      <div className={classes["section2"]}>
        <div className={classes["sidebar"]}>
          <h3>upcoming</h3>
          <p>Woohoo, no work due in soon!</p>
          <a href="#new">view all</a>
        </div>
        <div className={classes["announce-component"]}>
        <InputArea onAdd={addItem}/>
        {items.map((announce,index) => (
          <Announce 
            key={index}
            id={index}
            text={announce}
            onChecked={deleteItem}
          />
          ))}
        </div>
      </div>
    </>
  );
};

export default Classroom;
