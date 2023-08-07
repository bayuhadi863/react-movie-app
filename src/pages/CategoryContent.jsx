import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, API_KEY, fetchData } from '../api/base';
import MovieList from '../components/MovieList';

const CategoryContent = () => {
  let { category, page } = useParams();

  let path = ``;
  if (category === 'trending') {
    path = `/trending/movie/day`;
  } else {
    path = `/movie/${category}`;
  }

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    fetchData(
      `${BASE_URL}${path}?language=en-US&page=${page}&api_key=${API_KEY}`,
      'results'
    )
      .then((data) => {
        setMovies(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setFetchError(error.message);
        setIsLoading(false);
      });
  }, [page, path]);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100dvh' }}
    >
      {isLoading && <p className="text-light">Loading...</p>}
      {!isLoading && fetchError && <p className="text-danger">{fetchError}</p>}
      {!isLoading && !fetchError && <MovieList movies={movies} />}
    </div>
  );
};

export default CategoryContent;
