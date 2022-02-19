import React from "react";

const Cards = (props) => {
  return (
    <div className="cards">
      <div className="sub-card" style= {{backgroundColor:props.color}}>
        <p className="sub-card-heading">{props.subject}</p>
        <p className="sub-card-tchr">Taught By : {props.tchrName}</p>
      </div>
      <div class="rem-card">
        <p>Lorem Ipsum is simply dummy text of the printing. </p>
      </div>
    </div>
  );
};

export default Cards;
