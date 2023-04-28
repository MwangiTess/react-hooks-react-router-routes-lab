import React from "react";
import { movies } from "../data";

function Movies() {
  console.log(movies);

  const moviesList = movies.map((movie, index) => {
    return (
      <div key={index}>
        <h2>{movie.title}</h2>
        <h3>{movie.time} minutes</h3>
        <ul>
          {movie.genres.map((genre, index) => {
            return <li key={index}>{genre}</li>;
          })}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Movies Page</h1>
      {moviesList}
    </div>
  );
}

export default Movies;
