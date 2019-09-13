import React, { useState, useEffect } from "react";
import SwCard from "./SwCard";
import axios from "axios";

export default function SwCharcters() {
    // NOTE: The value given to useState() must be of the same type as your value is expected to be
    const [char, setChar] = useState([]);
  
    useEffect(() => {
      axios
        .get(`https://swapi.co/api/people/`)
        .then(response => {
          const char = response.data;
          console.log("Characters", char);
          setChar(char);
        })
        .catch(error => {
          console.log("The data was not returned", error);
        });
    }, []);
    return (
      <div className="charsw">
        {char.map(charsw => {
          return (
            <SwCard
              key={char.name}
              name={char.name}
              gender={char.gender}
              birthday={char.birth_year}
              homeworld={char.homeworld}
              species={char.species}
              films={char.films}
            
            />
          );
        })}
      </div>
    );
  }