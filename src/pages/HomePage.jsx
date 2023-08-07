import React, { useContext, useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import HomeTrending from '../components/HomeTrending';
import CardSlider from '../components/CardSlider';
import { API_KEY } from '../api/base';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const HomePage = () => {
  const popularMovies = useFetch(`/movie/popular?language=en-US&page=1&api_key=${API_KEY}`);
  const nowPlayingMovies = useFetch(`/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`);
  const topRatedMovies = useFetch(`/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`);
  const upcomingMovies = useFetch(`/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`);
  const trendingMovies = useFetch(`/trending/movie/day?language=en-US&page=1&api_key=${API_KEY}`);

  return (
    <main className='bg-black py-5'>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-lg-8 d-flex justify-content-center align-items-center'>
            <Carousel />
          </div>
          <div className='col-12 col-lg-4'>
            <Link
              to='/trending'
              className='category-title-link'
              style={{ textDecoration: 'none' }}
            >
              <h2>{'Trending Now >'}</h2>
            </Link>
            {trendingMovies.isLoading && (
              <div className='py-5'>
                <p className='text-light'>Loading...</p>
              </div>
            )}
            {!trendingMovies.isLoading && trendingMovies.fetchError && (
              <div className='py-5'>
                <p className='text-danger'>{trendingMovies.fetchError}</p>
              </div>
            )}
            {!trendingMovies.isLoading && !trendingMovies.fetchError && <HomeTrending movies={trendingMovies.movies} />}
          </div>
        </div>

        <Link
          to='/popular'
          className='category-title-link'
          style={{ textDecoration: 'none' }}
        >
          <h2>{'Popular Movies >'}</h2>
        </Link>
        <div className='row'>
          <div className='col'>
            {popularMovies.isLoading && (
              <div className='py-5 d-flex justify-content-center align-items-center'>
                <p className='text-light'>Loading...</p>
              </div>
            )}
            {!popularMovies.isLoading && popularMovies.fetchError && (
              <div className='py-5 d-flex justify-content-center align-items-center'>
                <p className='text-danger'>{popularMovies.fetchError}</p>
              </div>
            )}
            {!popularMovies.isLoading && !popularMovies.fetchError && <CardSlider movies={popularMovies.movies} />}
          </div>
        </div>

        <Link
          to='/now_playing'
          className='category-title-link'
          style={{ textDecoration: 'none' }}
        >
          <h2>{'Now Playing Movies >'}</h2>
        </Link>
        <div className='row'>
          <div className='col'>
            {nowPlayingMovies.isLoading && (
              <div className='py-5 d-flex justify-content-center align-items-center'>
                <p className='text-light'>Loading...</p>
              </div>
            )}
            {!nowPlayingMovies.isLoading && nowPlayingMovies.fetchError && (
              <div className='py-5 d-flex justify-content-center align-items-center'>
                <p className='text-danger'>{nowPlayingMovies.fetchError}</p>
              </div>
            )}
            {!nowPlayingMovies.isLoading && !nowPlayingMovies.fetchError && <CardSlider movies={nowPlayingMovies.movies} />}
          </div>
        </div>

        <Link
          to='/top_rated'
          className='category-title-link'
          style={{ textDecoration: 'none' }}
        >
          <h2>{'Top Rated Movies >'}</h2>
        </Link>
        <div className='row'>
          <div className='col'>
            {topRatedMovies.isLoading && (
              <div className='py-5 d-flex justify-content-center align-items-center'>
                <p className='text-light'>Loading...</p>
              </div>
            )}
            {!topRatedMovies.isLoading && topRatedMovies.fetchError && (
              <div className='py-5 d-flex justify-content-center align-items-center'>
                <p className='text-danger'>{topRatedMovies.fetchError}</p>
              </div>
            )}
            {!topRatedMovies.isLoading && !topRatedMovies.fetchError && <CardSlider movies={topRatedMovies.movies} />}
          </div>
        </div>

        <Link
          to='/upcoming'
          className='category-title-link'
          style={{ textDecoration: 'none' }}
        >
          <h2>{'Upcoming Movies >'}</h2>
        </Link>
        <div className='row'>
          <div className='col'>
            {upcomingMovies.isLoading && (
              <div className='py-5 d-flex justify-content-center align-items-center'>
                <p className='text-light'>Loading...</p>
              </div>
            )}
            {!upcomingMovies.isLoading && upcomingMovies.fetchError && (
              <div className='py-5 d-flex justify-content-center align-items-center'>
                <p className='text-danger'>{upcomingMovies.fetchError}</p>
              </div>
            )}
            {!upcomingMovies.isLoading && !upcomingMovies.fetchError && <CardSlider movies={upcomingMovies.movies} />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
