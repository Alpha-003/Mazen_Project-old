import { useState } from 'react';
// material-ui
import { CardContent, CardHeader, IconButton, Typography, Card, Box, Button, Grid, Stack, Menu, MenuItem } from '@mui/material';
//  @ant-design/icon
import { MoreOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
// project import
import MainCard from 'components/MainCard';
// import Card from 'sections/charts/org-chart/Card';

// ==============================|| TAB - PAYMENT ||============================== //

const TabPayment = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event?.currentTarget);
  };
  const cardHeaderDefault = {
    marginLeft: '10px',
    fontSize: '12px',
    borderRadius: '10px',
    fontWeight: 500,
    color: '#1890FF',
    background: '#E6F7FF',
    p: '0 8px'
  };
  const cardContentDefault = {
    fontWeight: 400,
    fontSize: '6',
    lineHeight: '22px'
  };
  const cardStyle = {
    border: '1px solid #e6ebf1',
    margin: 2,
    padding: 0,
    boxShadow: 0
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <MainCard title="Addresses" content={false} sx={{ '& .MuiInputLabel-root': { fontSize: '0.875rem' } }}>
          <Stack spacing={1}>
            <Box>
              <Card sx={cardStyle}>
                <CardHeader
                  sx={{ borderBottom: 1, borderColor: '#e6ebf1' }}
                  title={
                    <Stack direction="row" alignItems="center">
                      <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>Office New Giza</Typography>
                      <Typography sx={cardHeaderDefault}>Default</Typography>
                    </Stack>
                  }
                  action={
                    <IconButton
                      aria-label="settings"
                      aria-controls={open ? 'firstMenu' : undefined}
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
                  id="firstMenu"
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
                <CardContent sx={cardContentDefault}>
                  <Box>
                    <Stack spacing={1}>
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
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            </Box>
            <Box>
              <Card sx={cardStyle}>
                <CardHeader
                  sx={{ borderBottom: 1, borderColor: '#e6ebf1' }}
                  title={
                    <Stack direction="row" alignItems="center">
                      <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>Office New Giza</Typography>
                      <Typography sx={cardHeaderDefault}>Default</Typography>
                    </Stack>
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
                <CardContent sx={cardContentDefault}>
                  <Box>
                    <Stack spacing={1}>
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
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Stack>
        </MainCard>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} sx={{ mt: 2 }}>
          <Button variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button type="submit" variant="contained">
            Add address
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default TabPayment;
