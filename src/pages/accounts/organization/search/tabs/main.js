import { useState } from 'react';
import { useLocation, Link, Outlet } from 'react-router-dom';

// material-ui
import { Box, Tab, Tabs } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| PROFILE - ACCOUNT ||============================== //

const SearchTabs = () => {
  const { pathname } = useLocation();

  let selectedTab = 0;
  switch (pathname) {
    case '/organization/search/addresses':
      selectedTab = 1;
      break;
    case '/organization/search/quotations':
      selectedTab = 2;
      break;
    case '/organization/search/orders':
      selectedTab = 3;
      break;
    case '/organization/search/projects':
      selectedTab = 4;
      break;
    case '/organization/search/tickets':
      selectedTab = 5;
      break;
    case '/organization/search/members':
      selectedTab = 6;
      break;
    case '/organization/search/payments':
      selectedTab = 7;
      break;
    case '/organization/search/details':
    default:
      selectedTab = 0;
  }

  const [value, setValue] = useState(selectedTab);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MainCard border={false} boxShadow>
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="account profile tab">
          <Tab label="Details" component={Link} to="/organization/search/details" />
          <Tab label="Adresses" component={Link} to="/organization/search/addresses" />
          <Tab label="Quotations" component={Link} to="/organization/search/quotations" />
          <Tab label="Orders" component={Link} to="/organization/search/orders" />
          <Tab label="Projects" component={Link} to="/organization/search/projects" />
          <Tab label="Tickets" component={Link} to="/organization/search/tickets" />
          <Tab label="Members" component={Link} to="/organization/search/members" />
          <Tab label="Payments" component={Link} to="/organization/search/payments" />
        </Tabs>
      </Box>
      <Box sx={{ mt: 2.5 }}>
        <Outlet />
      </Box>
    </MainCard>
  );
};

export default SearchTabs;
