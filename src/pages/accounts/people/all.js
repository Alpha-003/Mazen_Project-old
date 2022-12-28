import { useCallback, useMemo, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Chip, Dialog, Grid, Stack, Tooltip, Typography } from '@mui/material';

// project import
import UserView from 'sections/apps/profiles/user-list/UserView';
import AddUser from 'sections/apps/profiles/user-list/AddUser';
import Avatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import makeData from 'data/react-table';
import { IndeterminateCheckbox } from 'components/third-party/ReactTable';
import Breadcrumbs from 'components/@extended/Breadcrumbs';
import navigation from 'menu-items';

// assets
import { CloseOutlined, EyeTwoTone, EditTwoTone, DeleteTwoTone } from '@ant-design/icons';
import ReactTable from '../table';

const avatarImage = require.context('assets/images/users', true);

// ==============================|| PROFILE - USER LIST ||============================== //

const AllUserList = () => {
  const theme = useTheme();

  const data = useMemo(() => makeData(200), []);
  const [user, setUser] = useState(null);
  const [add, setAdd] = useState(false);
  // const [filterGender, setFilterGender] = useState(null)

  const handleAdd = () => {
    setAdd(!add);
    if (user && !add) setUser(null);
  };
  const handleGenderFilter = () => {
    console.log('test');
    // data = data.filter(el => el.gender == filterGender)
  };

  const columns = useMemo(
    () => [
      {
        title: 'Row Selection',
        // eslint-disable-next-line
        Header: ({ getToggleAllPageRowsSelectedProps }) => <IndeterminateCheckbox indeterminate {...getToggleAllPageRowsSelectedProps()} />,
        accessor: 'selection',
        // eslint-disable-next-line
        Cell: ({ row }) => <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />,
        disableSortBy: true
      },
      {
        Header: 'Id',
        accessor: 'id',
        className: 'cell-center'
      },
      {
        Header: 'Customer Name',
        accessor: 'fatherName',
        // eslint-disable-next-line
        Cell: ({ row }) => {
          // eslint-disable-next-line
          const { values } = row;
          return (
            <Stack direction="row" spacing={1.5} alignItems="center">
              {/* eslint-disable-next-line */}
              <Avatar variant="circle" alt="Avatar 1" size="sm" src={avatarImage(`./avatar-${!values.avatar ? 1 : values.avatar}.png`)} />
              <Stack spacing={0}>
                {/* eslint-disable-next-line */}
                <Typography variant="subtitle1">{values.fatherName}</Typography>
                <Typography variant="caption" color="textSecondary">
                  {/* eslint-disable-next-line */}
                  {values.email}
                </Typography>
              </Stack>
            </Stack>
          );
        }
      },
      {
        Header: 'Avatar',
        accessor: 'avatar',
        disableSortBy: true
      },
      {
        Header: 'Email',
        accessor: 'email'
      },
      {
        Header: 'Location',
        accessor: 'address'
      },
      {
        Header: 'Order',
        accessor: 'age',
        className: 'cell-right'
      },
      {
        Header: 'Spent',
        accessor: 'amount',
        className: 'cell-right',
        Cell: ({ value }) => {
          return `$${value.toFixed(2)}`;
        }
      },
      {
        Header: 'Status',
        accessor: 'status',
        // eslint-disable-next-line
        Cell: ({ value }) => {
          switch (value) {
            case 'Complicated':
              return <Chip color="error" label="Canceled" size="small" variant="light" />;
            case 'Relationship':
              return <Chip color="success" label="Complete" size="small" variant="light" />;
            case 'Single':
            default:
              return <Chip color="info" label="Pending" size="small" variant="light" />;
          }
        }
      },
      {
        Header: 'Actions',
        className: 'cell-center',
        disableSortBy: true,
        // eslint-disable-next-line
        Cell: ({ row }) => {
          // eslint-disable-next-line
          const collapseIcon = row.isExpanded ? (
            <CloseOutlined style={{ color: theme.palette.error.main }} />
          ) : (
            <EyeTwoTone twoToneColor={theme.palette.secondary.main} />
          );
          return (
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={0}>
              <Tooltip title="View">
                <IconButton
                  color="secondary"
                  onClick={(e) => {
                    e.stopPropagation();
                    // eslint-disable-next-line
                    row.toggleRowExpanded();
                  }}
                >
                  {collapseIcon}
                </IconButton>
              </Tooltip>
              <Tooltip title="Edit">
                <IconButton
                  color="primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    // eslint-disable-next-line
                    setUser(row.values);
                    handleAdd();
                  }}
                >
                  <EditTwoTone twoToneColor={theme.palette.primary.main} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton
                  color="error"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <DeleteTwoTone twoToneColor={theme.palette.error.main} />
                </IconButton>
              </Tooltip>
            </Stack>
          );
        }
      }
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme]
  );

  const renderRowSubComponent = useCallback(({ row }) => <UserView data={data[row.id]} />, [data]);

  return (
    <Grid>
      <Breadcrumbs navigation={navigation} title card={false} divider={false} />
      <MainCard content={false}>
        <ScrollX>
          <ReactTable
            tableName="User"
            columns={columns}
            data={data}
            handleAdd={handleAdd}
            handleGenderFilter={handleGenderFilter}
            getHeaderProps={(column) => column.getSortByToggleProps()}
            renderRowSubComponent={renderRowSubComponent}
          />
        </ScrollX>

        {/* add user dialog */}
        <Dialog maxWidth="sm" fullWidth onClose={handleAdd} open={add} sx={{ '& .MuiDialog-paper': { p: 0 } }}>
          {add && <AddUser user={user} onCancel={handleAdd} />}
        </Dialog>
      </MainCard>
    </Grid>
  );
};

export default AllUserList;
