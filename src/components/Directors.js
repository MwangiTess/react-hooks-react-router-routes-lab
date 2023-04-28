import React from "react";
import { directors } from "../data";

function Directors() {

  const directorsName = directors.map((director, index) => {
    return (
      <div key={index}>
        <h3>{director.name}</h3>
        <ul>
          {director.movies.map((movie, index) => {
            return <li key={index}>{movie}</li>
          })}
        </ul>

      </div>
    )
  })
  return (
  <div>
    <h1>Directors Page</h1>
    {directorsName}
  </div>)
};

export default Directors;
