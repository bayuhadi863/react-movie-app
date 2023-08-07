import React from 'react';
import { FaStar, FaPlay, FaPlus } from 'react-icons/fa';
import { imageLink } from '../api/base';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const releaseYear = new Date(movie.release_date).getFullYear();

  return (
    <div className="col">
      <div className="card bg-dark h-100">
        <img
          src={`${imageLink}${movie.poster_path}`}
          className="card-img-top rounded "
          alt="..."
          // style={{ minHeight: '360px' }}
        />
        <div className="card-body px-1 px-md-2 py-2">
          <div className="d-flex gap-2" style={{ height: '25px' }}>
            <FaStar style={{ color: '#ffc107' }} />
            <p className="text-grey">{movie.vote_average.toFixed(1)}</p>
          </div>
          <p className="card-text text-white">
            {movie.title.length > 40
              ? `${movie.title.slice(0, 40)}...`
              : movie.title}{' '}
            ({releaseYear})
          </p>
        </div>
        <div className="card-footer d-flex flex-column py-0 px-1 px-md-2">
          <Link
            className="text-center mb-2 py-1 text-primary"
            style={{
              textDecoration: 'none',
              background: '#424242',
              fontWeight: 'bold',
            }}
          >
            <FaPlus className="me-2" /> Watchlist
          </Link>
          <Link
            className="text-center mb-2 p-1 text-light"
            style={{ textDecoration: 'none', fontWeight: 'bold' }}
          >
            <FaPlay className="me-2" /> Trailer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
