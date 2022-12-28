import PropTypes from 'prop-types';

// material-ui
import { CameraOutlined, InboxOutlined } from '@ant-design/icons';
import { Typography, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// ==============================|| UPLOAD - PLACEHOLDER ||============================== //
export default function PlaceholderContent({ type }) {
  const theme = useTheme();
  return (
    <>
      {type !== 'STANDARD' && (
        <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ width: 1, textAlign: { xs: 'center', md: 'left' } }}>
          <InboxOutlined style={{ fontSize: 40, color: theme.palette.primary.dark }} />
          <Typography variant="p" sx={{ mt: 0 }}>
            Click or drag file to this area to upload
          </Typography>
        </Stack>
      )}
      {type === 'STANDARD' && (
        <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
          <CameraOutlined style={{ fontSize: '32px' }} />
        </Stack>
      )}
    </>
  );
}
PlaceholderContent.propTypes = {
  type: PropTypes.string
};
