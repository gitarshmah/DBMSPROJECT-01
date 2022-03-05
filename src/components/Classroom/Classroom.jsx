import React from "react";
import { useParams } from "react-router";
import classes from "./Classroom.module.css";


const Classroom = () => {
  const { id } = useParams();

  return (
    <>
      <div className={classes["section"]}>
        <div className={classes["aboutclass"]}>
          <h5>{id}</h5>
          <img src="../assets/studying.png" width="150px" height="150px" />
        </div>
      </div>
      <div className={classes["section2"]}>
        <div className={classes["sidebar"]}>
          <h3>upcoming</h3>
          <p>Woohoo, no work due in soon!</p>
          <a href="#">view all</a>
        </div>
        <div className={classes["announcement"]}>
          <form action="submit">
            <textarea
              rows="7"
              cols="122"
              placeholder="Announce something to your class">
              </textarea>
            <br />
          </form>
        </div>
      </div>
    </>
  );
};

export default Classroom;
