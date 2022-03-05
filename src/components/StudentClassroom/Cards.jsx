import React from "react";
import classes from './StudentClassroom.module.css';
import { NavLink } from "react-router-dom";

const Cards = (props) => {
  return (
    <div className={classes["cards"]}>
      <div className={classes["sub-card"]} style= {{backgroundColor:props.color}}>
      <NavLink to={`/${props.subject}`} style= {{textDecorations:"none", color:"inherit"}} >
      <p className={classes["sub-card-heading"]}  >{props.subject}</p>
        </NavLink>
        <p className={classes["sub-card-tchr"]}>Taught By : {props.tchrName}</p>
      </div>
      <div className={classes["rem-card"]}>
        <p>Lorem Ipsum is simply dummy text of the printing. </p>
      </div>
    </div>
  );
};

export default Cards;
