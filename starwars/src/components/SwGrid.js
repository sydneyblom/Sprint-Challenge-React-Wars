import React, { useState, useEffect } from "react";
import SwCard from "./SwCard";
import axios from "axios";

export default function SwCharacters() {
    // NOTE: The value given to useState() must be of the same type as your value is expected to be
    const [char, setChar] = useState([]);
  
    useEffect(() => {
      axios
        .get(`https://swapi.co/api/people`)
        .then(response => {
          console.log(response);
          const char = response.data.results;
          console.log("Characters", char);
          setChar(char);
        })
        .catch(error => {
          console.log("The data was not returned", error);
        });
    }, []);
    return (
      <div className="charsw">
        {char.map(chars => {
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