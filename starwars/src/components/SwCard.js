import React from "react";
import styled from "styled-components";



const SwCard = props => {
    return (
      <div className="char-list" key={props.id}>
        <h2> {props.name}</h2>
        <p>Gender: {props.gender}</p>
        <p>Mass: {props.mass}</p>
        <p>BirthYear:{props.birth_year}</p>

      </div>
    );
  };
  
  export default SwCard;
  