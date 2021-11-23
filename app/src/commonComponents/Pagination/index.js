import React from 'react';
import PropTypes from "prop-types";
import MaterialPagination from '@material-ui/lab/Pagination';

const Pagination = ({pageCount, onPageChange, currentPage}) => {
   return (
   <MaterialPagination
   page={currentPage}
   count={pageCount}
   onChange={onPageChange}
   />
   );
};

Pagination.propTypes = {
   pageCount: PropTypes.number.isRequired,
   onPageChange: PropTypes.func.isRequired,
   currentPage: PropTypes.number.isRequired,
}

export default Pagination;