"use client";
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        Previous
      </button>
      <span style={{ margin: "0 15px" }}>
        Page {currentPage} of {totalPages}
      </span>
      <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
