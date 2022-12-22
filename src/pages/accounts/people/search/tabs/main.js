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
    case '/people/search/addresses':
      selectedTab = 1;
      break;
    case '/people/search/quotations':
      selectedTab = 2;
      break;
    case '/people/search/orders':
      selectedTab = 3;
      break;
    case '/people/search/projects':
      selectedTab = 4;
      break;
    case '/people/search/tickets':
      selectedTab = 5;
      break;
    case '/people/search/members':
      selectedTab = 6;
      break;
    case '/people/search/payments':
      selectedTab = 7;
      break;
    case '/people/search/details':
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
          <Tab label="Details" component={Link} to="/people/search/details" />
          <Tab label="Adresses" component={Link} to="/people/search/addresses" />
          <Tab label="Quotations" component={Link} to="/people/search/quotations" />
          <Tab label="Orders" component={Link} to="/people/search/orders" />
          <Tab label="Projects" component={Link} to="/people/search/projects" />
          <Tab label="Tickets" component={Link} to="/people/search/tickets" />
          <Tab label="Members" component={Link} to="/people/search/members" />
          <Tab label="Payments" component={Link} to="/people/search/payments" />
        </Tabs>
      </Box>
      <Box sx={{ mt: 2.5 }}>
        <Outlet />
      </Box>
    </MainCard>
  );
};

export default SearchTabs;
