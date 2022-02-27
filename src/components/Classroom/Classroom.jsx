import React from "react";
import classes from "./Classroom.module.css";


const Classroom = () => {
  return (
    <>
      <div className={classes["section"]}>
        <div className={classes["aboutclass"]}>
          <h5>DBMS 2022</h5>
          <img src="studying.png" width="150px" height="150px" />
        </div>
      </div>
      <div className={classes["section2"]}>
        <div className={classes["sidebar"]}>
          <h3>upcoming</h3>
          <p>Woohoo, no work due in soon!</p>
          <a href="#">view all</a>
        </div>
        <div className={classes["announcement"]}>
          <form action="#">
            <textarea
              rows="10"
              cols="100"
              placeholder="Announce something to your class">
              </textarea>
            <br />
            <input className={classes["submit"]} type="submit" value="post" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Classroom;
