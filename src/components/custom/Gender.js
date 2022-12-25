const { ToggleButtonGroup, ToggleButton } = require('@mui/material');
import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
const Genders = ({ gendVal }) => {
  // borders
  const [gend, setGend] = React.useState(gendVal);
  const setChange = (event, newAlignment) => {
    setGend(newAlignment);
  };
  const GenderToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
      border: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.divider : theme.palette.grey.A800}`,
      '&.Mui-disabled': {
        border: 0
      },
      '&.Mui-selected': {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light
      }
    }
  }));
  return (
    <GenderToggleButtonGroup color="primary" value={gend} exclusive onChange={setChange} aria-label="Platform">
      <ToggleButtonGroup color="primary" value={gend} exclusive onChange={setChange} aria-label="Platform">
        <ToggleButton sx={{ width: '93px' }} value="male">
          Male
        </ToggleButton>
        <ToggleButton sx={{ width: '93px' }} value="female">
          Female
        </ToggleButton>
      </ToggleButtonGroup>
    </GenderToggleButtonGroup>
  );
};
Genders.propTypes = {
  gendVal: PropTypes.string
};
export default Genders;
