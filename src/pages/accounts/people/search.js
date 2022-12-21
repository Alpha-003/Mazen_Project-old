import { Grid, Stack, TextField, InputLabel, Box, Typography, Button } from '@mui/material';

import AnimateButton from 'components/@extended/AnimateButton';
// project import
import MainCard from 'components/MainCard';

// assets
import { SearchOutlined } from '@ant-design/icons';
// ==============================|| PROFILE - USER LIST ||============================== //

const PeopleSearch = () => {
  return (
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
            <Stack direction="row" alignItems="center" spacing={1} sx={{ color: '#FAAD14' }}>
              <Box sx={{ width: '100px', background: '#FAAD14', height: '16px', borderRadius: '10px' }}></Box>
              <Typography>Organization was not found</Typography>
            </Stack>
            <Stack direction="row" columnGap={2}>
              <Button variant="text" type="button" sx={{width:"150px",padding:"9px 16px 9px 16px"}} color="error">
                Clear
              </Button>

              <AnimateButton>
                <Button variant="contained" sx={{width:"150px",padding:"9px 16px 9px 16px"}} type="button">
                  <SearchOutlined />
                  <Typography sx={{ml:1}}>Search</Typography>
                </Button>
              </AnimateButton>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default PeopleSearch;
