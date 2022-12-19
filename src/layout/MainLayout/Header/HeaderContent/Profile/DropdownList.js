import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// assets
import { EditOutlined, LaptopOutlined, LogoutOutlined, UserOutlined, UserSwitchOutlined, QuestionCircleOutlined } from '@ant-design/icons';
//project import
import useAuth from 'hooks/useAuth';
// ==============================|| HEADER PROFILE - PROFILE TAB ||============================== //

const DropdownList = ({ handleLogout }) => {
  const { user } = useAuth();
  console.log(user);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}>
      <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
        <ListItemIcon>
          <UserOutlined />
        </ListItemIcon>
        <ListItemText primary="My Profile" />
      </ListItemButton>
      <ListItemButton divider="true" selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
        <ListItemIcon>
          <EditOutlined />
        </ListItemIcon>
        <ListItemText primary="My Preferences" />
      </ListItemButton>
      {user.role == 'admin' && (
        <>
          <ListItemButton selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
            <ListItemIcon>
              <LaptopOutlined />
            </ListItemIcon>
            <ListItemText primary="Administrator" />
          </ListItemButton>
          <ListItemButton selected={selectedIndex === 4} onClick={(event) => handleListItemClick(event, 4)}>
            <ListItemIcon>
              <UserSwitchOutlined />
            </ListItemIcon>
            <ListItemText primary="Employee Management" />
          </ListItemButton>
        </>
      )}
      <ListItemButton divider="true" selected={selectedIndex === 5} onClick={(event) => handleListItemClick(event, 5)}>
        <ListItemIcon>
          <QuestionCircleOutlined />
        </ListItemIcon>
        <ListItemText primary="Help Center" />
      </ListItemButton>
      <ListItemButton selected={selectedIndex === 2} onClick={handleLogout} sx={{ color: 'error.main' }}>
        <ListItemIcon sx={{ rotate: '-90deg', transformOrigin: '23% 45%',color: 'error.main' }}>
          <LogoutOutlined />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </List>
  );
};

DropdownList.propTypes = {
  handleLogout: PropTypes.func
};

export default DropdownList;
