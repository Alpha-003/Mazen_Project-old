// material-ui
import { MoreOutlined } from '@ant-design/icons';
import {
  Card,
  CardHeader,
  Stack,
  Typography,
  useTheme,
  Button,
  Grid,
  Select,
  MenuItem,
  Box,
  Menu,
  IconButton,
  CardContent,
  CardMedia
} from '@mui/material';
import PaginationComp from 'components/custom/PaginationComp';
import React from 'react';

const TabOrganizations = () => {
  // theme
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event?.currentTarget);
  };

  // custom styles
  const mainCardHeaderDefault = {
    marginLeft: '10px',
    fontSize: '12px',
    fontWeight: 400,
    color: theme.palette.primary.main
  };
  const cardStyleFlex = {
    border: `1px solid ${theme.palette.grey.A800}`,
    // margin: 2,
    display: 'flex',
    padding: '5px',
    height: '170px',
    boxShadow: 0
  };
  const cardStyle = {
    border: `1px solid ${theme.palette.grey.A800}`,
    // margin: 2,
    padding: '5px',
    height: '170px',
    boxShadow: 0
  };
  const cardHeaderDefault = {
    marginLeft: '10px',
    fontSize: '12px',
    borderRadius: '10px',
    fontWeight: 500,
    color: theme.palette.primary.main,
    background: theme.palette.primary.lighter,
    p: '0 8px'
  };
  const cardText = {
    fontWeight: 500,
    fontSize: '14px'
  };
  const cardMediaStyle = {
    width: '160px',
    height: '160px'
  };
  const circleImage = require.context('assets/images/users/', true);
  const [role, newRole] = React.useState(1);
  const [changeType, newChangeType] = React.useState(1);
  const [changeStatus, newChangeStatus] = React.useState(1);
  // handlechange for select
  const handleChangeRole = (event) => {
    newRole(event.target.value);
  };
  const handleChangeType = (event) => {
    newChangeType(event.target.value);
  };
  const handleChangeStatus = (event) => {
    newChangeStatus(event.target.value);
  };
  // menu closing
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card sx={{ boxShadow: 'none', margin: '20px' }}>
      <CardHeader
        title={
          <Grid container alignItems="center">
            <Grid item md={2}>
              <Stack direction="row" alignItems="center">
                <Typography sx={{ fontWeight: 500 }}>Organizationss</Typography>
                <Typography sx={mainCardHeaderDefault}>3 Total</Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction={{ md: 'row' }} alignItems={{ md: 'center' }} columnGap={{ md: 2 }}>
                <Box>
                  <Select value={role} onChange={handleChangeRole}>
                    <MenuItem value={1}>Role</MenuItem>
                    <MenuItem value={2}>Val1</MenuItem>
                    <MenuItem value={3}>Vla2</MenuItem>
                  </Select>
                </Box>
                <Box>
                  <Select value={changeStatus} onChange={handleChangeStatus}>
                    <MenuItem value={1}>Status</MenuItem>
                    <MenuItem value={2}>Val1</MenuItem>
                    <MenuItem value={3}>Vla2</MenuItem>
                  </Select>
                </Box>
                <Box>
                  <Select value={changeType} onChange={handleChangeType}>
                    <MenuItem value={1}>Type</MenuItem>
                    <MenuItem value={2}>Val1</MenuItem>
                    <MenuItem value={3}>Vla2</MenuItem>
                  </Select>
                </Box>
                <Button variant="text">
                  <Typography sx={mainCardHeaderDefault}>Result filters</Typography>
                  <Typography
                    sx={{
                      background: theme.palette.primary.main,
                      lineHeight: '20px',
                      p: '0 8px',
                      borderRadius: '10px',
                      color: '#fff',
                      height: '20px',
                      ml: '10px',
                      fontSize: '12px'
                    }}
                  >
                    2
                  </Typography>
                </Button>
              </Stack>
            </Grid>
          </Grid>
        }
        action={
          <Button type="button" variant="contained">
            Add new organizations
          </Button>
        }
      />
      <Grid container spacing={1} justifyContent="center">
        <Grid item md={6}>
          <Card sx={cardStyleFlex}>
            <CardMedia sx={cardMediaStyle} component="img" image={circleImage(`./oneofone.png`)} />
            <Stack width="100%">
              <CardHeader
                title={
                  <Stack direction="row" alignItems="center">
                    <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>Two Dots</Typography>
                    <Typography sx={cardHeaderDefault}>Active</Typography>
                  </Stack>
                }
                subheader={
                  <Typography sx={{ color: theme.palette.grey[500] }}>
                    <span style={{ fontWeight: 700 }}>Joined:</span> 15/12/2022, 2:38 PM
                  </Typography>
                }
                action={
                  <IconButton
                    aria-label="settings"
                    aria-controls={open ? 'second-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    <MoreOutlined />
                  </IconButton>
                }
              />
              {/* menu for the above button in cardheader */}
              <Menu
                id="second-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button'
                }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                    setTimeout(() => {
                      focusInput();
                    });
                  }}
                >
                  Edit
                </MenuItem>
                <MenuItem onClick={handleClose} disabled>
                  Delete
                </MenuItem>
              </Menu>
              <CardContent>
                <Stack direction={{ md: 'row' }} columnGap={2}>
                  <CardHeader sx={{ pl: 0, pt: 0 }} title={<Typography sx={cardText}>Employee</Typography>} subheader="Member Role" />
                  <CardHeader sx={{ pl: 0, pt: 0 }} title={<Typography sx={cardText}>Agency</Typography>} subheader="Org. Type" />
                </Stack>
              </CardContent>
            </Stack>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card sx={cardStyleFlex}>
            <CardMedia sx={cardMediaStyle} component="img" image={circleImage(`./oneofone.png`)} />
            <Stack width="100%">
              <CardHeader
                title={
                  <Stack direction="row" alignItems="center">
                    <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>Two Dots</Typography>
                    <Typography sx={cardHeaderDefault}>Active</Typography>
                  </Stack>
                }
                subheader={
                  <Typography sx={{ color: theme.palette.grey[500] }}>
                    <span style={{ fontWeight: 700 }}>Joined:</span> 15/12/2022, 2:38 PM
                  </Typography>
                }
                action={
                  <IconButton
                    aria-label="settings"
                    aria-controls={open ? 'second-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    <MoreOutlined />
                  </IconButton>
                }
              />
              {/* menu for the above button in cardheader */}
              <Menu
                id="second-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button'
                }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                    setTimeout(() => {
                      focusInput();
                    });
                  }}
                >
                  Edit
                </MenuItem>
                <MenuItem onClick={handleClose} disabled>
                  Delete
                </MenuItem>
              </Menu>
              <CardContent>
                <Stack direction={{ md: 'row' }} columnGap={2}>
                  <CardHeader sx={{ pl: 0, pt: 0 }} title={<Typography sx={cardText}>Employee</Typography>} subheader="Member Role" />
                  <CardHeader sx={{ pl: 0, pt: 0 }} title={<Typography sx={cardText}>Agency</Typography>} subheader="Org. Type" />
                </Stack>
              </CardContent>
            </Stack>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={cardStyle}>
            <CardHeader
              title={
                <Stack direction="row" alignItems="center">
                  <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>Two Dots</Typography>
                  <Typography sx={cardHeaderDefault}>Active</Typography>
                </Stack>
              }
              subheader={
                <Typography sx={{ color: theme.palette.grey[500] }}>
                  <span style={{ fontWeight: 700 }}>Joined:</span> 15/12/2022, 2:38 PM
                </Typography>
              }
              action={
                <IconButton
                  aria-label="settings"
                  aria-controls={open ? 'second-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <MoreOutlined />
                </IconButton>
              }
            />
            {/* menu for the above button in cardheader */}
            <Menu
              id="second-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button'
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  setTimeout(() => {
                    focusInput();
                  });
                }}
              >
                Edit
              </MenuItem>
              <MenuItem onClick={handleClose} disabled>
                Delete
              </MenuItem>
            </Menu>
            <CardContent>
              <Stack direction={{ md: 'row' }} columnGap={2}>
                <CardHeader sx={{ pl: 0, pt: 0 }} title={<Typography sx={cardText}>Employee</Typography>} subheader="Member Role" />
                <CardHeader sx={{ pl: 0, pt: 0 }} title={<Typography sx={cardText}>Agency</Typography>} subheader="Org. Type" />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={cardStyle}>
            <CardHeader
              title={
                <Stack direction="row" alignItems="center">
                  <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>Two Dots</Typography>
                  <Typography sx={cardHeaderDefault}>Active</Typography>
                </Stack>
              }
              subheader={
                <Typography sx={{ color: theme.palette.grey[500] }}>
                  <span style={{ fontWeight: 700 }}>Joined:</span> 15/12/2022, 2:38 PM
                </Typography>
              }
              action={
                <IconButton
                  aria-label="settings"
                  aria-controls={open ? 'second-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <MoreOutlined />
                </IconButton>
              }
            />
            {/* menu for the above button in cardheader */}
            <Menu
              id="second-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button'
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  setTimeout(() => {
                    focusInput();
                  });
                }}
              >
                Edit
              </MenuItem>
              <MenuItem onClick={handleClose} disabled>
                Delete
              </MenuItem>
            </Menu>
            <CardContent>
              <Stack direction={{ md: 'row' }} columnGap={2}>
                <CardHeader sx={{ pl: 0, pt: 0 }} title={<Typography sx={cardText}>Employee</Typography>} subheader="Member Role" />
                <CardHeader sx={{ pl: 0, pt: 0 }} title={<Typography sx={cardText}>Agency</Typography>} subheader="Org. Type" />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={cardStyle}>
            <CardHeader
              title={
                <Stack direction="row" alignItems="center">
                  <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>Two Dots</Typography>
                  <Typography sx={cardHeaderDefault}>Active</Typography>
                </Stack>
              }
              subheader={
                <Typography sx={{ color: theme.palette.grey[500] }}>
                  <span style={{ fontWeight: 700 }}>Joined:</span> 15/12/2022, 2:38 PM
                </Typography>
              }
              action={
                <IconButton
                  aria-label="settings"
                  aria-controls={open ? 'second-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <MoreOutlined />
                </IconButton>
              }
            />
            {/* menu for the above button in cardheader */}
            <Menu
              id="second-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button'
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  setTimeout(() => {
                    focusInput();
                  });
                }}
              >
                Edit
              </MenuItem>
              <MenuItem onClick={handleClose} disabled>
                Delete
              </MenuItem>
            </Menu>
            <CardContent>
              <Stack direction={{ md: 'row' }} columnGap={2}>
                <CardHeader sx={{ pl: 0, pt: 0 }} title={<Typography sx={cardText}>Employee</Typography>} subheader="Member Role" />
                <CardHeader sx={{ pl: 0, pt: 0 }} title={<Typography sx={cardText}>Agency</Typography>} subheader="Org. Type" />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={cardStyle}>
            <CardHeader
              title={
                <Stack direction="row" alignItems="center">
                  <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>Two Dots</Typography>
                  <Typography sx={cardHeaderDefault}>Active</Typography>
                </Stack>
              }
              subheader={
                <Typography sx={{ color: theme.palette.grey[500] }}>
                  <span style={{ fontWeight: 700 }}>Joined:</span> 15/12/2022, 2:38 PM
                </Typography>
              }
              action={
                <IconButton
                  aria-label="settings"
                  aria-controls={open ? 'second-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <MoreOutlined />
                </IconButton>
              }
            />
            {/* menu for the above button in cardheader */}
            <Menu
              id="second-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button'
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  setTimeout(() => {
                    focusInput();
                  });
                }}
              >
                Edit
              </MenuItem>
              <MenuItem onClick={handleClose} disabled>
                Delete
              </MenuItem>
            </Menu>
            <CardContent>
              <Stack direction={{ md: 'row' }} columnGap={2}>
                <CardHeader sx={{ pl: 0, pt: 0 }} title={<Typography sx={cardText}>Employee</Typography>} subheader="Member Role" />
                <CardHeader sx={{ pl: 0, pt: 0 }} title={<Typography sx={cardText}>Agency</Typography>} subheader="Org. Type" />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={cardStyle}>
            <CardHeader
              title={
                <Stack direction="row" alignItems="center">
                  <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>Two Dots</Typography>
                  <Typography sx={cardHeaderDefault}>Active</Typography>
                </Stack>
              }
              subheader={
                <Typography sx={{ color: theme.palette.grey[500] }}>
                  <span style={{ fontWeight: 700 }}>Joined:</span> 15/12/2022, 2:38 PM
                </Typography>
              }
              action={
                <IconButton
                  aria-label="settings"
                  aria-controls={open ? 'second-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <MoreOutlined />
                </IconButton>
              }
            />
            {/* menu for the above button in cardheader */}
            <Menu
              id="second-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button'
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  setTimeout(() => {
                    focusInput();
                  });
                }}
              >
                Edit
              </MenuItem>
              <MenuItem onClick={handleClose} disabled>
                Delete
              </MenuItem>
            </Menu>
            <CardContent>
              <Stack direction={{ md: 'row' }} columnGap={2}>
                <CardHeader sx={{ pl: 0, pt: 0 }} title={<Typography sx={cardText}>Employee</Typography>} subheader="Member Role" />
                <CardHeader sx={{ pl: 0, pt: 0 }} title={<Typography sx={cardText}>Agency</Typography>} subheader="Org. Type" />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={cardStyle}>
            <CardHeader
              title={
                <Stack direction="row" alignItems="center">
                  <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>Two Dots</Typography>
                  <Typography sx={cardHeaderDefault}>Active</Typography>
                </Stack>
              }
              subheader={
                <Typography sx={{ color: theme.palette.grey[500] }}>
                  <span style={{ fontWeight: 700 }}>Joined:</span> 15/12/2022, 2:38 PM
                </Typography>
              }
              action={
                <IconButton
                  aria-label="settings"
                  aria-controls={open ? 'second-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <MoreOutlined />
                </IconButton>
              }
            />
            {/* menu for the above button in cardheader */}
            <Menu
              id="second-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button'
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  setTimeout(() => {
                    focusInput();
                  });
                }}
              >
                Edit
              </MenuItem>
              <MenuItem onClick={handleClose} disabled>
                Delete
              </MenuItem>
            </Menu>
            <CardContent>
              <Stack direction={{ md: 'row' }} columnGap={2}>
                <CardHeader sx={{ pl: 0, pt: 0 }} title={<Typography sx={cardText}>Employee</Typography>} subheader="Member Role" />
                <CardHeader sx={{ pl: 0, pt: 0 }} title={<Typography sx={cardText}>Agency</Typography>} subheader="Org. Type" />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <PaginationComp pageNum={6} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default TabOrganizations;
