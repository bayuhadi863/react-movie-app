import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="container-fluid py-5 bg-black">
      <div className="row">
        <div className="d-flex flex-wrap justify-content-center gap-4">
          <Link className="custom-link" style={{ textDecoration: 'none' }}>
            Home
          </Link>
          <Link className="custom-link" style={{ textDecoration: 'none' }}>
            Trending
          </Link>
          <Link className="custom-link" style={{ textDecoration: 'none' }}>
            Popular
          </Link>
          <Link className="custom-link" style={{ textDecoration: 'none' }}>
            Now Playing
          </Link>
          <Link className="custom-link" style={{ textDecoration: 'none' }}>
            Top Rated
          </Link>
          <Link className="custom-link" style={{ textDecoration: 'none' }}>
            Upcoming
          </Link>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col text-center">
          <p className="text-grey" style={{ fontSize: '14px' }}>
            &copy; {year} MovieZone.net. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
