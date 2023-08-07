import React from 'react';
import { FaStar } from 'react-icons/fa';
import { imageLink } from '../api/base';
import { Link } from 'react-router-dom';

const SliderCardItem = ({ movie }) => {
  const releaseYear = new Date(movie.release_date).getFullYear();

  return (
    <div className="col">
      <div className="card bg-black h-100">
        <img
          src={`${imageLink}${movie.poster_path}`}
          className="card-img-top rounded "
          alt="..."
        />
        <div
          className="card-body px-2 py-2"
          style={{ minHeight: '90px', height: '100%' }}
        >
          <div className="d-flex gap-2" style={{ height: '25px' }}>
            <FaStar style={{ color: '#ffc107' }} />
            <p className="text-grey">{movie.vote_average}</p>
          </div>
          <p className="card-text text-white">
            {movie.title.length > 30
              ? `${movie.title.slice(0, 30)}...`
              : movie.title}{' '}
            ({releaseYear})
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderCardItem;
