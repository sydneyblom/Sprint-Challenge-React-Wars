import React from "react";

const Swcard = props => {
    return (
      <div className="char-list" key={props.id}>
        <h2> {props.name}</h2>
        <p>Gender: {props.gender}</p>
        <p>Birth Year: {props.birth_year}</p>
        <p>Homeworld: {props.homeworld}</p>
        <p>Species: {props.species}</p>
        <p>Films: {props.films}</p>

        
        
      </div>
    );
  };
  
  export default Swcard;
  