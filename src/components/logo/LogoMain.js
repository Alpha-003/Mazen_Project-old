import PropTypes from 'prop-types';
import logo from 'assets/images/logo.png';
import logoDark from 'assets/images/logo.png';

// material-ui
import { useTheme } from '@mui/material/styles';

// ==============================|| LOGO SVG ||============================== //

const LogoMain = ({ reverse }) => {
  const theme = useTheme();
  return (
    <>
      <img src={theme.palette.mode === 'dark' || reverse ? logoDark : logo} alt="Freshprint" />
    </>
  );
};

LogoMain.propTypes = {
  reverse: PropTypes.bool
};

export default LogoMain;
