// material-ui
import { useTheme } from '@mui/material/styles';

import logoIconDark from 'assets/images/mini-logo.png';
import logoIcon from 'assets/images/mini-logo.png';

// ==============================|| LOGO ICON SVG ||============================== //

const LogoIcon = () => {
  const theme = useTheme();

  return <img src={theme.palette.mode === 'dark' ? logoIconDark : logoIcon} alt="Freshprint" />;
};

export default LogoIcon;
