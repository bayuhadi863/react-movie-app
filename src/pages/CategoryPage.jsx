import React, { useState, useEffect } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';

const CategoryPage = () => {
  let { category, page } = useParams();
  let navigate = useNavigate();

  let categoryTitle = '';
  if (category === 'trending') {
    categoryTitle = 'Trending';
  } else if (category === 'popular') {
    categoryTitle = 'Popular';
  } else if (category === 'now_playing') {
    categoryTitle = 'Now Playing';
  } else if (category === 'top_rated') {
    categoryTitle = 'Top Rated';
  } else {
    categoryTitle = 'Upcoming';
  }

  useEffect(() => {
    if (!page) {
      navigate(`/${category}/1`);
    }
  }, [category, navigate, page]);

  return (
    <main className="bg-black py-5">
      <div className="container mt-5">
        <h2 className="text-warning">{categoryTitle} Movies</h2>
      </div>
      <Outlet />
      <Pagination category={category} page={page} />
    </main>
  );
};

export default CategoryPage;
