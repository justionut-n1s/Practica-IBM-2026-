import { useState } from "react";
import "./Pagination.css";

interface PaginationProps {
  totalPages: number;
  onPageChange?: (page: number) => void;
}

function Pagination({ totalPages, onPageChange }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange?.(page);
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button
        className="pagination__arrow"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`pagination__page ${page === currentPage ? "pagination__page--active" : ""}`}
          onClick={() => goToPage(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="pagination__arrow"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
