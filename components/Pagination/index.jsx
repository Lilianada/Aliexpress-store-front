import React from "react";

export default function Pagination({
    handleNextClick,
    handlePreviousClick,
    handleClick,
    currentPage,
    pageNumbers,
}) {
  
  return (
    <div className="pagination">
      <button
        className="pagination__button"
        onClick={handlePreviousClick}
        disabled={currentPage === 1}
      >
        Show Less
      </button>

      {Array.from({ length: pageNumbers }, (_, index) => index + 1).map(
        (pageNumber) => (
          <button
            className={`pagination__button ${
              currentPage === pageNumber ? "pagination__active" : ""
            }`}
            key={pageNumber}
            onClick={() => handleClick(pageNumber)}
          >
            {pageNumber}
          </button>
        )
      )}

      <button
        className="pagination__button"
        onClick={handleNextClick}
        disabled={currentPage === pageNumbers}
      >
        Show More
      </button>
    </div>
  );
}
