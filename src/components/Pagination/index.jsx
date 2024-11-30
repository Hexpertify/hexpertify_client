/* eslint-disable react/prop-types */

import {
  FaAngleLeft,
  FaAngleRight,
  FaEllipsisH,
  FaFastBackward,
  FaFastForward,
  FaDotCircle,
} from "react-icons/fa";

const Pagination = ({
  currentPage = 1,
  totalPages = 0,
  onPageChange,
  className,
}) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const generatePageNumbers = () => {
    let pages = [];
    if (totalPages <= 5) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      if (currentPage <= 3) {
        pages = [1, 2, 3, 4, 5, "..."];
      } else if (currentPage >= totalPages - 2) {
        pages = [
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      } else {
        pages = ["...", currentPage - 1, currentPage, currentPage + 1, "..."];
      }
    }
    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div
      className={`mt-4 flex items-center justify-center space-x-2 ${className}`}
    >
      {/* First Page Button */}
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className="dark:bg-primary-dark flex h-8 w-8 items-center justify-center rounded-full border border-transparent bg-primary-active text-white disabled:bg-gray-400 dark:text-gray-300 dark:disabled:bg-gray-600"
        aria-label="First Page"
      >
        <FaFastBackward />
      </button>

      {/* Previous Page Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="dark:bg-primary-dark flex h-8 w-8 items-center justify-center rounded-full border border-transparent bg-primary-active text-white disabled:bg-gray-400 dark:text-gray-300 dark:disabled:bg-gray-600"
        aria-label="Previous Page"
      >
        <FaAngleLeft />
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page, index) =>
        page === "..." ? (
          <span
            key={index}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
          >
            <FaEllipsisH />
          </span>
        ) : (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              currentPage === page
                ? "dark:bg-primary-dark bg-primary-active text-white dark:text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500"
            }`}
          >
            {currentPage === page ? <FaDotCircle /> : page}
          </button>
        ),
      )}

      {/* Next Page Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="dark:bg-primary-dark flex h-8 w-8 items-center justify-center rounded-full border border-transparent bg-primary-active text-white disabled:bg-gray-400 dark:text-gray-300 dark:disabled:bg-gray-600"
        aria-label="Next Page"
      >
        <FaAngleRight />
      </button>

      {/* Last Page Button */}
      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="dark:bg-primary-dark flex h-8 w-8 items-center justify-center rounded-full border border-transparent bg-primary-active text-white disabled:bg-gray-400 dark:text-gray-300 dark:disabled:bg-gray-600"
        aria-label="Last Page"
      >
        <FaFastForward />
      </button>
    </div>
  );
};

export default Pagination;
