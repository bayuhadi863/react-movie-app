import React, { useState, useEffect } from 'react';
import { BASE_URL, API_KEY, imageLink, fetchData } from '../api/base';
import { FaStar, FaRegPlayCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeTrending = ({ movies }) => {
  return (
    <>
      {movies.map(
        (movie, index) =>
          index < 3 && (
            <div
              className='row mb-2'
              key={movie.id}
            >
              <div className='col-4 '>
                <img
                  src={`${imageLink}${movie.poster_path}`}
                  alt='image'
                  style={{ height: '150px', aspectRatio: '4/6' }}
                />
              </div>
              <div className='col-8'>
                <Link
                  to='/'
                  style={{ textDecoration: 'none' }}
                >
                  <FaRegPlayCircle
                    className='text-light mb-1'
                    style={{ fontSize: '35px' }}
                  />
                  <p className='text-grey'>Watch Trailer</p>
                </Link>

                <div
                  className='d-flex gap-2'
                  style={{ height: '25px' }}
                >
                  <FaStar style={{ color: '#ffc107' }} />
                  <p className='text-grey'>{movie.vote_average.toFixed(1)}</p>
                </div>
                <p className='text-light'>
                  {movie.title} ({new Date(movie.release_date).getFullYear()})
                </p>
              </div>
            </div>
          )
      )}
    </>
  );
};

export default HomeTrending;
