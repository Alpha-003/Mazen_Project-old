import { Grid, Stack, TextField, InputLabel, Box, Typography, Button, Divider, useTheme } from '@mui/material';

import AnimateButton from 'components/@extended/AnimateButton';
// project import
import MainCard from 'components/MainCard';

// assets
import { SearchOutlined } from '@ant-design/icons';

// image
import Avatar from 'components/@extended/Avatar';
import SearchTabs from './tabs/main';
const circleImage = require.context('assets/images/organization', true);
// ==============================|| PROFILE - USER LIST ||============================== //
const PeopleSearch = () => {
  // theme
  const theme = useTheme();
  const btnStyle = {
    width: '150px',
    padding: '9px 16px 9px 16px'
  };
  const borderRight = {
    borderRight: '1px solid #F0F0F0',
    px: '20px'
  };
  return (
    <Grid>
      <MainCard>
        <Grid container columnSpacing={2} rowSpacing={3}>
          <Grid item xs={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="name">Name</InputLabel>
              <TextField
                fullWidth
                id="name"
                name="name"
                placeholder="Enter full name"
              // value={formik.values.email}
              // onChange={formik.handleChange}
              // error={formik.touched.email && Boolean(formik.errors.email)}
              // helperText={formik.touched.email && formik.errors.email}
              />
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="uId">Id</InputLabel>
              <TextField
                fullWidth
                id="uId"
                name="uId"
                placeholder="Enter full name"
              // value={formik.values.email}
              // onChange={formik.handleChange}
              // error={formik.touched.email && Boolean(formik.errors.email)}
              // helperText={formik.touched.email && formik.errors.email}
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" alignItems="center" spacing={1} sx={{ color: theme.palette.warning }}>
                <Box sx={{ width: '100px', background: theme.palette.warning, height: '16px', borderRadius: '10px' }}></Box>
                <Typography>Organization was not found</Typography>
              </Stack>
              <Stack direction="row" columnGap={2}>
                <Button variant="text" type="button" sx={btnStyle} color="error">
                  Clear
                </Button>

                <AnimateButton>
                  <Button variant="contained" sx={btnStyle} type="button">
                    <SearchOutlined />
                    <Typography sx={{ ml: 1 }}>Search</Typography>
                  </Button>
                </AnimateButton>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </MainCard>
      <Divider sx={{ my: '20px' }} />
      <MainCard>
        <Grid container>
          <Grid item xs={4} sx={borderRight}>
            <Stack rowGap={5}>
              <Stack direction="row" alignItems="top" justifyContent="space-between">
                <Avatar alt="Avatar 1" sx={{ borderRadius: '50%' }} size="xl" src={circleImage(`./default.png`)} />
                <Typography
                  sx={{
                    background: theme.palette.primary.main,
                    lineHeight: '20px',
                    p: '0 8px',
                    borderRadius: '10px',
                    color: '#fff',
                    height: '20px',
                    fontSize: '12px'
                  }}
                >
                  Tier 1
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="end" justifyContent="space-between">
                <Box>
                  <Typography variant="h5">Two Dots</Typography>
                  <Typography color={theme.palette.text.secondary} sx={{ fontWeight: 400 }}>
                    @twodots
                  </Typography>
                </Box>
                <Typography color={theme.palette.text.secondary} variant="h5" sx={{ fontWeight: 400 }}>
                  Omar Hassan
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={4} sx={borderRight}>
            <Stack direction="row" sx={{ height: '100%' }} rowspacing={5} alignItems="stretch" justifyContent="space-between">
              <Stack alignItems="" justifyContent="space-between">
                <Box>
                  <Typography variant="h5">1</Typography>
                  <Typography color={theme.palette.text.secondary} sx={{ fontWeight: 400 }}>
                    Active Quotations
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h5">1</Typography>
                  <Typography color={theme.palette.text.secondary} sx={{ fontWeight: 400 }}>
                    Active Orders
                  </Typography>
                </Box>
              </Stack>
              <Stack alignItems="" justifyContent="space-between">
                <Box>
                  <Typography variant="h5">1</Typography>
                  <Typography color={theme.palette.text.secondary} sx={{ fontWeight: 400 }}>
                    Active Tickets
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h5">1</Typography>
                  <Typography color={theme.palette.text.secondary} sx={{ fontWeight: 400 }}>
                    Members
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', pl: '20px' }}>
            <Stack direction="row" alignItems="end" justifyContent="space-between">
              <Typography variant="h5">Org Id</Typography>
              <Typography color={theme.palette.text.secondary} variant="h5" sx={{ fontWeight: 400 }}>
                #900-13-1819
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="end" justifyContent="space-between">
              <Typography variant="h5">Org Type</Typography>
              <Typography color={theme.palette.text.secondary} variant="h5" sx={{ fontWeight: 400 }}>
                Agency
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="end" justifyContent="space-between">
              <Typography variant="h5">Created</Typography>
              <Typography color={theme.palette.text.secondary} variant="h5" sx={{ fontWeight: 400 }}>
                15/12/2015
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </MainCard>
      <Box sx={{ height: '20px' }}></Box>
      <SearchTabs />
    </Grid>
  );
};

export default PeopleSearch;
