// material-ui
import { CardContent, CardHeader, Typography, Card, Box, Button, Grid, Stack, IconButton } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Card from 'sections/charts/org-chart/Card';

// ==============================|| TAB - PAYMENT ||============================== //

const TabPayment = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <MainCard title="Addresses" content={false} sx={{ '& .MuiInputLabel-root': { fontSize: '0.875rem' } }}>
          <Box>
            <Card>
              <CardHeader
                title="Office New Giza"
                action={
                  <IconButton aria-label="settings">
                    {' '}
                    <MoreVertIcon />
                  </IconButton>
                }
              />
              <CardContent>
                <Stack>
                  <Typography>Actions</Typography>
                </Stack>
              </CardContent>
            </Card>
          </Box>
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
