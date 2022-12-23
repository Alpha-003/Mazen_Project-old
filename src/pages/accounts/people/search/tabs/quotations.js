// material-ui
import { EnvironmentOutlined, MoreOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
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
  CardContent
} from '@mui/material';
import React from 'react';

const TabQuotations = () => {
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
  const cardStyle = {
    border: `1px solid ${theme.palette.grey.A800}`,
    // margin: 2,
    padding: 0,
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

  const [state, newState] = React.useState(1);
  const [changeDate, newChangeDate] = React.useState(1);
  // handlechange for select
  const handleChangeState = (event) => {
    newState(event.target.value);
  };
  const handleChangeDate = (event) => {
    newChangeDate(event.target.value);
  };
  // menu closing
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card sx={{boxShadow:"none",margin:"20px"}}>
      <CardHeader
        title={
          <Grid container alignItems="center">
            <Grid item md={2}>
              <Stack direction="row" alignItems="center">
                <Typography sx={{ fontWeight: 500 }}>Quotations History</Typography>
                <Typography sx={mainCardHeaderDefault}>3 Total</Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction={{ md: 'row' }} alignItems={{ md: 'center' }} columnGap={{ md: 2 }}>
                <Box>
                  <Select value={state} onChange={handleChangeState}>
                    <MenuItem value={1}>Staus</MenuItem>
                    <MenuItem value={2}>Val1</MenuItem>
                    <MenuItem value={3}>Vla2</MenuItem>
                  </Select>
                </Box>
                <Box>
                  <Select value={changeDate} onChange={handleChangeDate}>
                    <MenuItem value={1}>Past 3 Months</MenuItem>
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
            Add new quotations
          </Button>
        }
      />
      <Grid container spacing={1}>
        <Grid item md={12}>
          <Card sx={cardStyle}>
            <CardHeader
              sx={{ borderBottom: 1, borderColor: '#e6ebf1' }}
              title={
                <Stack direction="row" alignItems="center">
                  <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>Office New Giza</Typography>
                  <Typography sx={cardHeaderDefault}>Default</Typography>
                </Stack>
              }
              subheader={
                <Typography sx={{ color: theme.palette.grey[500] }}>
                  <span style={{ fontWeight: 700 }}>Created:</span> 15/12/2022, 2:38 PM <span style={{ fontWeight: 700 }}>By:</span> Mazen
                  Elnemr
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
              <Stack direction={{ md: 'row' }} justifyContent="space-between">
                <Stack direction="row">
                  <CardHeader title={<Typography sx={cardText}>3</Typography>} subheader="Items" />
                  <CardHeader title={<Typography sx={cardText}>3 Days</Typography>} subheader="Tile Limit" />
                  <CardHeader title={<Typography sx={cardText}>2nd</Typography>} subheader="Version" />
                  <CardHeader title={<Typography sx={cardText}>750,000 EGP</Typography>} subheader="Total" />
                </Stack>
                <Stack justifyContent="space-around">
                  <Typography sx={{ color: theme.palette.grey[400] }}>Contact details</Typography>
                  <Stack direction="row" columnGap={2}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <UserOutlined />
                      <Typography sx={cardText}>Omar Hassan</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <PhoneOutlined />
                      <Typography sx={cardText}>+201097977924</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <EnvironmentOutlined />
                      <Typography sx={cardText}>Office New Giza</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              {/* <Stack spacing={1}>
                  <Typography>101,5z Mubarak Street, Ard Elgolf, Cairo</Typography>
                  <Stack direction="row" spacing={2}>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <PhoneOutlined />
                      <Typography>+201097977924</Typography>
                    </Stack>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <EnvironmentOutlined />

                      <Typography>+201097977924</Typography>
                    </Stack>
                  </Stack>
                </Stack> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card sx={cardStyle}>
            <CardHeader
              sx={{ borderBottom: 1, borderColor: '#e6ebf1' }}
              title={
                <Stack direction="row" alignItems="center">
                  <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>Office New Giza</Typography>
                  <Typography sx={cardHeaderDefault}>Default</Typography>
                </Stack>
              }
              subheader={
                <Typography sx={{ color: theme.palette.grey[500] }}>
                  <span style={{ fontWeight: 700 }}>Created:</span> 15/12/2022, 2:38 PM <span style={{ fontWeight: 700 }}>By:</span> Mazen
                  Elnemr
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
                <Stack direction="row">
                  <CardHeader title={<Typography sx={cardText}>3</Typography>} subheader="Items" />
                  <CardHeader title={<Typography sx={cardText}>3 Days</Typography>} subheader="Tile Limit" />
                  <CardHeader title={<Typography sx={cardText}>2nd</Typography>} subheader="Version" />
                  <CardHeader title={<Typography sx={cardText}>750,000 EGP</Typography>} subheader="Total" />
                </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card sx={cardStyle}>
            <CardHeader
              sx={{ borderBottom: 1, borderColor: '#e6ebf1' }}
              title={
                <Stack direction="row" alignItems="center">
                  <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>Office New Giza</Typography>
                  <Typography sx={cardHeaderDefault}>Default</Typography>
                </Stack>
              }
              subheader={
                <Typography sx={{ color: theme.palette.grey[500] }}>
                  <span style={{ fontWeight: 700 }}>Created:</span> 15/12/2022, 2:38 PM <span style={{ fontWeight: 700 }}>By:</span> Mazen
                  Elnemr
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
                <Stack direction="row">
                  <CardHeader title={<Typography sx={cardText}>3</Typography>} subheader="Items" />
                  <CardHeader title={<Typography sx={cardText}>3 Days</Typography>} subheader="Tile Limit" />
                  <CardHeader title={<Typography sx={cardText}>2nd</Typography>} subheader="Version" />
                  <CardHeader title={<Typography sx={cardText}>750,000 EGP</Typography>} subheader="Total" />
                </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={cardStyle}>
            <CardHeader
              sx={{ borderBottom: 1, borderColor: '#e6ebf1' }}
              title={
                <Stack direction="row" alignItems="center">
                  <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>Office New Giza</Typography>
                  <Typography sx={cardHeaderDefault}>Default</Typography>
                </Stack>
              }
              subheader={
                <Typography sx={{ color: theme.palette.grey[500] }}>
                  <span style={{ fontWeight: 700 }}>Created:</span> 15/12/2022, 2:38 PM <span style={{ fontWeight: 700 }}>By:</span> Mazen
                  Elnemr
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
                <Stack direction="row">
                  <CardHeader title={<Typography sx={cardText}>3</Typography>} subheader="Items" />
                  <CardHeader title={<Typography sx={cardText}>3 Days</Typography>} subheader="Tile Limit" />
                  <CardHeader title={<Typography sx={cardText}>2nd</Typography>} subheader="Version" />
                  <CardHeader title={<Typography sx={cardText}>750,000 EGP</Typography>} subheader="Total" />
                </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={cardStyle}>
            <CardHeader
              sx={{ borderBottom: 1, borderColor: '#e6ebf1' }}
              title={
                <Stack direction="row" alignItems="center">
                  <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>Office New Giza</Typography>
                  <Typography sx={cardHeaderDefault}>Default</Typography>
                </Stack>
              }
              subheader={
                <Typography sx={{ color: theme.palette.grey[500] }}>
                  <span style={{ fontWeight: 700 }}>Created:</span> 15/12/2022, 2:38 PM <span style={{ fontWeight: 700 }}>By:</span> Mazen
                  Elnemr
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
                <Stack direction="row">
                  <CardHeader title={<Typography sx={cardText}>3</Typography>} subheader="Items" />
                  <CardHeader title={<Typography sx={cardText}>3 Days</Typography>} subheader="Tile Limit" />
                  <CardHeader title={<Typography sx={cardText}>2nd</Typography>} subheader="Version" />
                  <CardHeader title={<Typography sx={cardText}>750,000 EGP</Typography>} subheader="Total" />
                </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={cardStyle}>
            <CardHeader
              sx={{ borderBottom: 1, borderColor: '#e6ebf1' }}
              title={
                <Stack direction="row" alignItems="center">
                  <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>Office New Giza</Typography>
                  <Typography sx={cardHeaderDefault}>Default</Typography>
                </Stack>
              }
              subheader={
                <Typography sx={{ color: theme.palette.grey[500] }}>
                  <span style={{ fontWeight: 700 }}>Created:</span> 15/12/2022, 2:38 PM <span style={{ fontWeight: 700 }}>By:</span> Mazen
                  Elnemr
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
                <Stack direction="row">
                  <CardHeader title={<Typography sx={cardText}>3</Typography>} subheader="Items" />
                  <CardHeader title={<Typography sx={cardText}>3 Days</Typography>} subheader="Tile Limit" />
                  <CardHeader title={<Typography sx={cardText}>2nd</Typography>} subheader="Version" />
                  <CardHeader title={<Typography sx={cardText}>750,000 EGP</Typography>} subheader="Total" />
                </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
};

export default TabQuotations;
