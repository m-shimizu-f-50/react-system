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

const setNavLinks: Array<{ text: string; url: string }> = [
  { text: 'Top', url: '/' },
  { text: 'Profile', url: '/profile' },
  { text: 'Skill', url: '/skill' },
  { text: 'Production', url: '/production' },
  { text: 'Contact', url: '/contact' },
];

const Header: React.FC = () => {
  return (
    <>
      <AppBar component='header' position='static'>
        <Container maxWidth='md'>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography component='h1'>
                <Link to='/'>
                  <img src={Logo} alt='画像' height='60' width='auto' />
                </Link>
              </Typography>
            </Box>
            <Box>
              <List
                component='nav'
                sx={{ display: 'flex', justifyContent: 'flex-start' }}
              >
                {setNavLinks.map((nav) => (
                  <ListItem disablePadding key={nav.text}>
                    <ListItemButton
                      sx={{ textAlign: 'center' }}
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
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
