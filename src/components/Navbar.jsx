import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';

const Navbar = () => {
  const { searchTyping, setSearchTyping, setSearchSubmit } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchSubmit(e.target.search.value);
  };

  return (
    <header>
      <nav className='navbar navbar-expand-lg bg-black navbar-dark fixed-top py-3'>
        <div className='container'>
          <Link
            to='/'
            className='navbar-brand text-warning'
            style={{ fontWeight: 'bold', fontSize: '20px' }}
          >
            TheMovieDB
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse'
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link
                  to='/'
                  className='nav-link'
                >
                  Home
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Categories
                </a>
                <ul className='dropdown-menu bg-dark'>
                  <li>
                    <Link
                      to='/trending'
                      className='dropdown-item text-light'
                    >
                      Trending
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/popular'
                      className='dropdown-item text-light'
                    >
                      Popular
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/now_playing'
                      className='dropdown-item text-light'
                    >
                      Now Playing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/top_rated'
                      className='dropdown-item text-light'
                    >
                      Top Rated
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/upcoming'
                      className='dropdown-item text-light'
                    >
                      Upcoming
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Genre
                </a>
                <ul className='dropdown-menu bg-dark'>
                  <li>
                    <Link
                      to='/trending/1'
                      className='dropdown-item text-light'
                    >
                      Trending
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/popular/1'
                      className='dropdown-item text-light'
                    >
                      Popular
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/now_playing/1'
                      className='dropdown-item text-light'
                    >
                      Now Playing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/top_rated/1'
                      className='dropdown-item text-light'
                    >
                      Top Rated
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/upcoming/1'
                      className='dropdown-item text-light'
                    >
                      Upcoming
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form
              className='d-flex'
              role='search'
              onSubmit={handleSubmit}
            >
              <input
                className='form-control me-2 text-light search-input'
                type='search'
                placeholder='Search'
                aria-label='Search'
                name='search'
                value={searchTyping}
                onChange={(e) => setSearchTyping(e.target.value)}
              />
              <button
                className='btn btn-outline-warning'
                type='submit'
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
