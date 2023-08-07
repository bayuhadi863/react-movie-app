import React, { useContext, useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import HomeTrending from '../components/HomeTrending';
import CardSlider from '../components/CardSlider';
import { BASE_URL, API_KEY, fetchData } from '../api/base';
import { Link } from 'react-router-dom';

const HomePage = () => {
  //Popular Movies State
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularIsLoading, setPopularIsLoading] = useState(true);
  const [popularFetchError, setPopularFetchError] = useState('');

  //Now Playing Movies State
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [nowPlayingIsLoading, setNowPlayingIsLoading] = useState(true);
  const [nowPlayingFetchError, setNowPlayingFetchError] = useState('');

  //Now Playing Movies State
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [topRatedIsLoading, setTopRatedIsLoading] = useState(true);
  const [topRatedFetchError, setTopRatedFetchError] = useState('');

  //Now Playing Movies State
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [upcomingIsLoading, setUpcomingIsLoading] = useState(true);
  const [upcomingFetchError, setUpcomingFetchError] = useState('');

  //Fetch Popular Movies
  useEffect(() => {
    fetchData(
      `${BASE_URL}/movie/popular?language=en-US&page=1&api_key=${API_KEY}`,
      'results'
    )
      .then((data) => {
        setPopularMovies(data);
        setPopularIsLoading(false);
      })
      .catch((error) => {
        setPopularFetchError(error.message);
        setPopularIsLoading(false);
      });
  }, []);

  //Fetch Now Playing Movies
  useEffect(() => {
    fetchData(
      `${BASE_URL}/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`,
      'results'
    )
      .then((data) => {
        setNowPlayingMovies(data);
        setNowPlayingIsLoading(false);
      })
      .catch((error) => {
        setNowPlayingFetchError(error.message);
        setNowPlayingIsLoading(false);
      });
  }, []);

  //Fetch Top Rated Movies
  useEffect(() => {
    fetchData(
      `${BASE_URL}/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`,
      'results'
    )
      .then((data) => {
        setTopRatedMovies(data);
        setTopRatedIsLoading(false);
      })
      .catch((error) => {
        setTopRatedFetchError(error.message);
        setTopRatedIsLoading(false);
      });
  }, []);

  //Fetch Upcoming Movies
  useEffect(() => {
    fetchData(
      `${BASE_URL}/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`,
      'results'
    )
      .then((data) => {
        setUpcomingMovies(data);
        setUpcomingIsLoading(false);
      })
      .catch((error) => {
        setUpcomingFetchError(error.message);
        setUpcomingIsLoading(false);
      });
  }, []);

  return (
    <main className="bg-black py-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-lg-8 d-flex justify-content-center align-items-center">
            <Carousel />
          </div>
          <div className="col-12 col-lg-4">
            <Link
              to="/trending"
              className="category-title-link"
              style={{ textDecoration: 'none' }}
            >
              <h2>{'Trending Now >'}</h2>
            </Link>
            <HomeTrending />
          </div>
        </div>

        <Link
          to="/popular"
          className="category-title-link"
          style={{ textDecoration: 'none' }}
        >
          <h2>{'Popular Movies >'}</h2>
        </Link>
        <div className="row">
          <div className="col">
            {popularIsLoading && (
              <div className="py-5 d-flex justify-content-center align-items-center">
                <p className="text-light">Loading...</p>
              </div>
            )}
            {!popularIsLoading && popularFetchError && (
              <div className="py-5 d-flex justify-content-center align-items-center">
                <p className="text-danger">{popularFetchError}</p>
              </div>
            )}
            {!popularIsLoading && !popularFetchError && (
              <CardSlider movies={popularMovies} />
            )}
          </div>
        </div>

        <Link
          to="/now_playing"
          className="category-title-link"
          style={{ textDecoration: 'none' }}
        >
          <h2>{'Now Playing Movies >'}</h2>
        </Link>
        <div className="row">
          <div className="col">
            {nowPlayingIsLoading && (
              <div className="py-5 d-flex justify-content-center align-items-center">
                <p className="text-light">Loading...</p>
              </div>
            )}
            {!nowPlayingIsLoading && nowPlayingFetchError && (
              <div className="py-5 d-flex justify-content-center align-items-center">
                <p className="text-danger">{nowPlayingFetchError}</p>
              </div>
            )}
            {!nowPlayingIsLoading && !nowPlayingFetchError && (
              <CardSlider movies={nowPlayingMovies} />
            )}
          </div>
        </div>

        <Link
          to="/top_rated"
          className="category-title-link"
          style={{ textDecoration: 'none' }}
        >
          <h2>{'Top Rated Movies >'}</h2>
        </Link>
        <div className="row">
          <div className="col">
            {topRatedIsLoading && (
              <div className="py-5 d-flex justify-content-center align-items-center">
                <p className="text-light">Loading...</p>
              </div>
            )}
            {!topRatedIsLoading && topRatedFetchError && (
              <div className="py-5 d-flex justify-content-center align-items-center">
                <p className="text-danger">{topRatedFetchError}</p>
              </div>
            )}
            {!topRatedIsLoading && !topRatedFetchError && (
              <CardSlider movies={topRatedMovies} />
            )}
          </div>
        </div>

        <Link
          to="/upcoming"
          className="category-title-link"
          style={{ textDecoration: 'none' }}
        >
          <h2>{'Upcoming Movies >'}</h2>
        </Link>
        <div className="row">
          <div className="col">
            {upcomingIsLoading && (
              <div className="py-5 d-flex justify-content-center align-items-center">
                <p className="text-light">Loading...</p>
              </div>
            )}
            {!upcomingIsLoading && upcomingFetchError && (
              <div className="py-5 d-flex justify-content-center align-items-center">
                <p className="text-danger">{upcomingFetchError}</p>
              </div>
            )}
            {!upcomingIsLoading && !upcomingFetchError && (
              <CardSlider movies={upcomingMovies} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
