import React from "react";
import ReactPaginate from "react-paginate";

const Next = (props) => {
  return <button className="btn-secondary">Next {">"}</button>;
};
const Prev = (props) => {
  return <button className="btn-secondary">{"<"} Prev</button>;
};
const Paginate = () => {
  let pageCount = 10;
  const handlePageClick = () => {};

  return (
    <div className="w-full ">
      <ReactPaginate
        className="flex items-center justify-evenly"
        breakLabel="..."
        nextLabel={<Next />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={<Prev />}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Paginate;
