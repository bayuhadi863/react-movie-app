import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ category, page }) => {
  const totalPages = 10; // Total jumlah halaman yang ingin ditampilkan
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  let pageInt = parseInt(page);

  return (
    <nav aria-label="Page navigation example" className="bg-black pb-5">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${pageInt === 1 ? 'disabled' : ''}`}>
          <Link
            to={`/${category}/${pageInt - 1}`}
            className="page-link bg-black border-dark text-grey"
            href="#"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </Link>
        </li>
        {pages.map((pageNumber) => (
          <li className="page-item" key={pageNumber}>
            <Link
              to={`/${category}/${pageNumber}`}
              className="page-link bg-black border-dark text-grey"
              href="#"
            >
              {pageNumber}
            </Link>
          </li>
        ))}
        <li className={`page-item ${pageInt === 10 ? 'disabled' : ''}`}>
          <Link
            to={`/${category}/${pageInt + 1}`}
            className="page-link bg-black border-dark text-grey"
            href="#"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
