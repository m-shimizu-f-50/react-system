import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Logo from '../assets/images/logo512.png';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';

const setNavLinks: Array<{ text: string; url: string }> = [
  { text: 'Top', url: '/' },
  { text: 'Profile', url: '/profile' },
  { text: 'Skill', url: '/skill' },
  { text: 'Production', url: '/production' },
  { text: 'Contact', url: '/contact' },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <AppBar component='header' position='static'>
        <Container maxWidth='md'>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography component='h1'>
                <Link to='/'>
                  <img src={Logo} alt='画像' height='50' width='auto' />
                </Link>
              </Typography>
            </Box>
            <Box>
              <List
                component='nav'
                sx={{ display: 'flex', justifyContent: 'flex-start' }}
              >
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      textAlign: 'center',
                      display: { xs: 'block', md: 'none' },
                    }}
                    onClick={handleDrawerOpen}
                  >
                    <ListItemText primary={<MenuIcon />} />
                  </ListItemButton>
                </ListItem>
                {setNavLinks.map((nav) => (
                  <ListItem disablePadding key={nav.text}>
                    <ListItemButton
                      sx={{
                        textAlign: 'center',
                        display: { xs: 'none', md: 'block' },
                      }}
                      component={Link}
                      to={nav.url}
                    >
                      <ListItemText primary={nav.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
          <Drawer
            anchor='right'
            open={open}
            onClose={handleDrawerClose}
            PaperProps={{
              style: {
                width: '100%',
                backgroundColor: '#1976d2',
                color: '#fff',
              },
            }}
          >
            <List
              component='nav'
              sx={{ display: 'block', justifyContent: 'normal' }}
            >
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    textAlign: 'center',
                    borderBottom: 'solid 1px #696969',
                  }}
                  onClick={handleDrawerClose}
                >
                  <ListItemText primary={<CloseIcon />} />
                </ListItemButton>
              </ListItem>
              {setNavLinks.map((nav) => (
                <ListItem disablePadding key={nav.text}>
                  <ListItemButton
                    sx={{
                      textAlign: 'center',
                      borderBottom: 'solid 1px #696969',
                    }}
                    onClick={handleDrawerClose}
                    component={Link}
                    to={nav.url}
                  >
                    <ListItemText primary={nav.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
