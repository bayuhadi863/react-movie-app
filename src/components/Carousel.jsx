import React, { useState, useEffect } from 'react';
import { BASE_URL, API_KEY, imageLink, fetchPromise } from '../api/base';
import loadingImage from '../images/loadingImage.jpg';
import errorImage from '../images/errorImage.png';
import { FaRegPlayCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    const carouselEndpoints = [
      `${BASE_URL}/movie/346698?api_key=${API_KEY}`,
      `${BASE_URL}/movie/298618?api_key=${API_KEY}`,
      `${BASE_URL}/movie/447277?api_key=${API_KEY}`,
    ];
    fetchPromise(carouselEndpoints)
      .then((combinedCarouselData) => {
        setCarouselImages(combinedCarouselData);
        setIsLoading(false);
      })
      .catch((error) => {
        setFetchError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide mb-3"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div
        className="carousel-inner"
        style={{
          height: '100%',
          width: '55dvw',
          minWidth: '300px',
        }}
      >
        {carouselImages.map((image, index) => (
          <div
            key={image.backdrop_path}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            {isLoading && (
              <img src={loadingImage} className="d-block w-100" alt="image" />
            )}
            {!isLoading && fetchError && (
              <img src={errorImage} className="d-block w-100" alt="image" />
            )}
            {!isLoading && !fetchError && (
              <img
                src={`${imageLink}${image.backdrop_path}`}
                className="d-block w-100"
                alt="image"
              />
            )}
            <div
              className="overlay"
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '80%', // Sesuaikan tinggi overlay sesuai kebutuhan
                background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.9)', // Warna gelap untuk overlay
              }}
            ></div>

            <div className="carousel-caption d-none d-lg-block">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-4 ">
                    <img
                      src={`${imageLink}${image.poster_path}`}
                      alt="image"
                      style={{
                        height: '150px',
                        aspectRatio: '4/6',
                      }}
                    />
                  </div>
                  <div className="col-8 ">
                    <Link
                      to="/"
                      style={{ textDecoration: 'none', textAlign: 'start' }}
                    >
                      <FaRegPlayCircle
                        className="text-light mb-1 d-flex mt-4"
                        style={{ fontSize: '35px' }}
                      />
                      <p className="text-grey">Watch Trailer</p>
                    </Link>
                    <h3 className="text-light" style={{ textAlign: 'start' }}>
                      {image.title} (
                      {new Date(image.release_date).getFullYear()})
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
