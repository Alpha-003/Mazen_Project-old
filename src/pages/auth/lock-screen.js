// import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Box } from '@mui/material';

// project import
// import useAuth from 'hooks/useAuth';
import AuthWrapper from 'sections/auth/AuthWrapper';
import Avatar from '@mui/material/Avatar';
import avatarImg from '../../assets/images/avatar/avatar_LockScreen.png';
import AuthLock from 'sections/auth/auth-forms/AuthLock';

// ================================|| LOGIN ||================================ //

const LockScreen = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="column" alignItems="Center" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Avatar alt="avatar" src={avatarImg} sx={{ width: 76, height: 76 }} />
            <Box sx={{ fontWeight: '700', fontSize: '20px' }}>Stebin Ben</Box>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthLock />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default LockScreen;
