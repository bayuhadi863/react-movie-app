import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="container my-4 pb-5">
      <div className="row row-cols-2 row-cols-lg-5 row-cols-md-3 g-2 g-md-3 g-lg-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
