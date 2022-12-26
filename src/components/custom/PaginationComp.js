// react
import { MenuItem, Pagination, Select, Stack } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
const PaginationComp = ({ pageNum }) => {
  // change page indexes
  const [pageIndex, newPageIndex] = React.useState(pageNum);
  const handlePageChange = (event, value) => {
    newPageIndex(value);
  };

  //   handle perpage
  const [perPage, newPerPages] = React.useState(10);
  const handleChangePerPage = (event) => {
    newPerPages(event.target.value);
  };
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Pagination count={50} variant="outlined" page={pageIndex} onChange={handlePageChange} shape="rounded" color="primary" />
      <Select onChange={handleChangePerPage} value={perPage}>
        <MenuItem value={10}>10/Pages</MenuItem>
        <MenuItem value={20}>20/Pages</MenuItem>
        <MenuItem value={30}>30/Pages</MenuItem>
        <MenuItem value={40}>40/Pages</MenuItem>
        <MenuItem value={50}>50/Pages</MenuItem>
      </Select>
    </Stack>
  );
};
PaginationComp.propTypes = {
  pageNum: PropTypes.number
};
export default PaginationComp;
