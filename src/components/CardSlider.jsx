import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SliderCardItem from './SliderCardItem';
import { BASE_URL, API_KEY, fetchData } from '../api/base';

const CardSlider = ({ movies }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 1023, min: 800 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 799, min: 464 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 463, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };

  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      removeArrowOnDeviceType={['tablet', 'mobile']}
    >
      {movies.map((movie) => (
        <div key={movie.id} className="mx-1 mx-lg-2">
          <SliderCardItem movie={movie} />
        </div>
      ))}
    </Carousel>
  );
};

export default CardSlider;
