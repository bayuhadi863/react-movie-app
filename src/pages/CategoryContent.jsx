import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, API_KEY, fetchData } from '../api/base';
import MovieList from '../components/MovieList';
import useFetch from '../hooks/useFetch';

const CategoryContent = () => {
  let { category, page } = useParams();

  let path = ``;
  if (category === 'trending') {
    path = `/trending/movie/day`;
  } else {
    path = `/movie/${category}`;
  }

  const { movies, isLoading, fetchError } = useFetch(`${path}?language=en-US&page=${page}&api_key=${API_KEY}`);

  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{ minHeight: '100dvh' }}
    >
      {isLoading && <p className='text-light'>Loading...</p>}
      {!isLoading && fetchError && <p className='text-danger'>{fetchError}</p>}
      {!isLoading && !fetchError && <MovieList movies={movies} />}
    </div>
  );
};

export default CategoryContent;
