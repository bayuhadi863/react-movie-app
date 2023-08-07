import React, { useEffect, useState } from 'react';
import { BASE_URL, fetchData } from '../api/base';

const useFetch = (endpoint) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    fetchData(`${BASE_URL}${endpoint}`, 'results')
      .then((data) => {
        setMovies(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setFetchError(error.message);
        setIsLoading(false);
      });
  }, [endpoint]);

  return { movies, isLoading, fetchError };
};

export default useFetch;
