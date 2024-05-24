import React from 'react';
import { AppBar, Toolbar, Typography, Menu, MenuItem, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.png'; // Assurez-vous que le chemin est correct

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#6a1b9a' }}>
      <Toolbar>
        <Link to="/game">
          <img src={logo} alt="Logo" style={{ width: '50px', height: '50px', marginRight: '10px', cursor: 'pointer' }} />
        </Link>
        <Typography variant="h6" style={{ flexGrow: 1, color: 'white' }}>
          Mystic Quests
        </Typography>
        <div>
          <Typography
            variant="h6"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleMenu}
            style={{ color: 'white', cursor: 'pointer' }}
          >
            Profile
          </Typography>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{ style: { backgroundColor: 'black' } }}
          >
            <MenuItem onClick={handleClose} component={Link} to="/historique" style={{ color: 'white' }}>
              Historique
            </MenuItem>
            <MenuItem onClick={handleClose} style={{ color: 'white' }}>
              Déconnexion
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
