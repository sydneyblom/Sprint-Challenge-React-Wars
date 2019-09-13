import React from "react";
import styled from "styled-components";


const Pulse = styled.div`
  transition: transform 0.2s ease-in;
  background: #E0FFFF;
  color: black;
  width: 200px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: 0px 1px 6px -2px grey;

  &:hover {
    transform: translateY(-5px) scale(1.05);
  }
`;
const SwCard = props => {
    return (
      <Pulse className="char-list" key={props.id}>
        <h2> {props.name}</h2>
        <p>Gender: {props.gender}</p>
        <p>Mass: {props.mass}</p>
        <p>BirthYear:{props.birth_year}</p>

      </Pulse>
    );
  };
  
  export default SwCard;
  