import PropTypes from 'prop-types';
import { useEffect, useMemo, Fragment, useState } from 'react';

// material-ui
import { alpha, useTheme } from '@mui/material/styles';
import {
  Button,
  Link,
  Chip,
  Stack,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useMediaQuery,
  MenuItem,
  Select
} from '@mui/material';

// third-party
import { useFilters, useExpanded, useGlobalFilter, useRowSelect, useSortBy, useTable, usePagination } from 'react-table';

// project import
import { renderFilterTypes, GlobalFilter } from 'utils/react-table';
import { HeaderSort, TablePagination, TableRowSelection } from 'components/third-party/ReactTable';
// ==============================|| REACT TABLE ||============================== //

export default function ReactTable({ tableName, columns, data, getHeaderProps, renderRowSubComponent, handleAdd }) {
  const theme = useTheme();
  const [typeFilter, setTypeFilter] = useState('Type');
  const [gendFilter, setGendFilter] = useState('Gender');
  const [langFilter, setLangFilter] = useState('Language');
  const [isActiveFilter, setIsActiveFilter] = useState('isActive');
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  const filterTypes = useMemo(() => renderFilterTypes, []);
  const sortBy = { id: 'fatherName', desc: false };

  const handleTypeFilter = (e) => {
    const { value } = e.target;
    setTypeFilter(value);
  };
  const handleGendFilter = (e) => {
    const { value } = e.target;
    setGendFilter(value);
  };
  const handleLangFilter = (e) => {
    const { value } = e.target;
    setLangFilter(value);
  };
  const handleIsActiveFilter = (e) => {
    const { value } = e.target;
    setIsActiveFilter(value);
  };
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setHiddenColumns,
    // allColumns,
    visibleColumns,
    rows,
    // @ts-ignore
    page,
    // @ts-ignore
    gotoPage,
    // @ts-ignore
    setPageSize,
    // @ts-ignore
    state: { globalFilter, selectedRowIds, pageIndex, pageSize },
    // @ts-ignore
    preGlobalFilteredRows,
    // @ts-ignore
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      // @ts-ignore
      filterTypes,
      // @ts-ignore
      initialState: { pageIndex: 0, pageSize: 10, hiddenColumns: ['avatar', 'email'], sortBy: [sortBy] }
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
  );
  useEffect(() => {
    if (matchDownSM) {
      setHiddenColumns(['age', 'contact', 'visits', 'email', 'status', 'avatar']);
    } else {
      setHiddenColumns(['avatar', 'email']);
    }
    // eslint-disable-next-line
  }, [matchDownSM]);

  return (
    <>
      <TableRowSelection selected={Object.keys(selectedRowIds).length} />
      <Stack spacing={3}>
        <Stack sx={{ px: 3, pt: 3 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
              <Stack spacing={0.5}>
                <GlobalFilter
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  globalFilter={globalFilter}
                  setGlobalFilter={setGlobalFilter}
                  size="normal"
                />
              </Stack>
            </Grid>
            <Grid item xs="auto">
              <Stack spacing={0.5}>
                <Button variant="contained" onClick={handleAdd}>
                  Add {tableName}
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
        <Stack
          direction={matchDownSM ? 'column' : 'row'}
          spacing={1}
          justifyContent="space-between"
          alignItems="center"
          sx={{ px: 3, pb: 0 }}
        >
          <Stack direction={matchDownSM ? 'column' : 'row'} alignItems="center" spacing={1}>
            <Select id="genFilter" value={typeFilter} placeholder="Filter By" onChange={handleTypeFilter} sx={{ width: '82px' }}>
              <MenuItem value="Type">Type</MenuItem>
              <MenuItem value="Type 1">Type 1</MenuItem>
              <MenuItem value="Type 2">Type 2</MenuItem>
            </Select>
            <Select id="genFilter" value={gendFilter} placeholder="Filter By" onChange={handleGendFilter} sx={{ width: '98px' }}>
              <MenuItem value="Gender">Gender</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
            <Select id="langFilter" value={langFilter} placeholder="Filter By" onChange={handleLangFilter} sx={{ width: '115px' }}>
              <MenuItem value="Language">Language</MenuItem>
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Arabic">Arabic</MenuItem>
            </Select>
            <Select id="isActive" value={isActiveFilter} placeholder="Filter By" onChange={handleIsActiveFilter} sx={{ width: '102px' }}>
              <MenuItem value="isActive">isActive</MenuItem>
              <MenuItem value="Offline">Offline</MenuItem>
              <MenuItem value="Online">Online</MenuItem>
            </Select>
            {/*<SortingSelect sortBy={sortBy.id} setSortBy={setSortBy} allColumns={allColumns} />*/}
          </Stack>
          <Link href="#" color="primary" underline="none">
            Reset filter <Chip label="2" color="primary" sx={{ '&': { borderRadius: '50px', ml: 1, height: 'auto' } }}></Chip>
          </Link>
        </Stack>

        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup, i) => (
              <TableRow key={i} {...headerGroup.getHeaderGroupProps()} sx={{ '& > th:first-of-type': { width: '58px' } }}>
                {headerGroup.headers.map((column, index) => (
                  <TableCell
                    sx={{ '&': { textTransform: 'capitalize' } }}
                    key={index}
                    {...column.getHeaderProps([{ className: column.className }, getHeaderProps(column)])}
                  >
                    <HeaderSort column={column} />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              const rowProps = row.getRowProps();

              return (
                <Fragment key={i}>
                  <TableRow
                    {...row.getRowProps()}
                    onClick={() => {
                      row.toggleRowSelected();
                    }}
                    sx={{ cursor: 'pointer', bgcolor: row.isSelected ? alpha(theme.palette.primary.lighter, 0.35) : 'inherit' }}
                  >
                    {row.cells.map((cell, index) => (
                      <TableCell key={index} {...cell.getCellProps([{ className: cell.column.className }])}>
                        {cell.render('Cell')}
                      </TableCell>
                    ))}
                  </TableRow>
                  {row.isExpanded && renderRowSubComponent({ row, rowProps, visibleColumns })}
                </Fragment>
              );
            })}
            <TableRow sx={{ '&:hover': { bgcolor: 'transparent !important' } }}>
              <TableCell sx={{ p: 2, py: 3 }} colSpan={9}>
                <TablePagination gotoPage={gotoPage} rows={rows} setPageSize={setPageSize} pageSize={pageSize} pageIndex={pageIndex} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Stack>
    </>
  );
}

ReactTable.propTypes = {
  tableName: PropTypes.string,
  columns: PropTypes.array,
  data: PropTypes.array,
  getHeaderProps: PropTypes.func,
  handleAdd: PropTypes.func,
  renderRowSubComponent: PropTypes.any
};
