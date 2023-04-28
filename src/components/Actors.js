import React from "react";
import { actors } from "../data";

function Actors() {

  const ActorsList = actors.map((actor, index) => {
    return (
      <div key={index}>
        <h2>{actor.name}</h2>
        <ul>
          {actor.movies.map((movie, index) => {
            return <li key={index}>{movie}</li>
          }
          )}
        </ul>
         </div>
    )
  })
  return (
  <div>
    <h1>Actors Page</h1>
      {ActorsList}
  </div>
  )
}

export default Actors;
