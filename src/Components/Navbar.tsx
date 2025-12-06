import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'scrolled',
})<{ scrolled: boolean }>(({ scrolled }) => ({
  backgroundColor: scrolled ? 'rgba(26, 26, 26, 0.95)' : 'transparent',
  backdropFilter: scrolled ? 'blur(10px)' : 'none',
  boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none',
  transition: 'all 0.3s ease',
  borderBottom: scrolled ? '1px solid rgba(0, 217, 255, 0.1)' : 'none',
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.8rem',
  cursor: 'pointer',
  background: 'linear-gradient(45deg, #00D9FF, #FF006E)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  marginLeft: theme.spacing(1),
  padding: theme.spacing(1, 2),
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(0, 217, 255, 0.1)',
    color: '#00D9FF',
    transform: 'translateY(-2px)',
  },
  '&.active': {
    backgroundColor: 'rgba(0, 217, 255, 0.15)',
    color: '#00D9FF',
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 280,
    backgroundColor: '#1a1a1a',
    borderLeft: '1px solid rgba(0, 217, 255, 0.2)',
  },
}));

const DrawerListItem = styled(ListItem)(({ theme }) => ({
  margin: theme.spacing(1, 2),
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(0, 217, 255, 0.1)',
    transform: 'translateX(-4px)',
  },
  '& .MuiListItemIcon-root': {
    color: '#00D9FF',
    minWidth: 40,
  },
  '& .MuiListItemText-primary': {
    color: '#fff',
    fontWeight: 500,
  },
}));

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const scrollHandler = (): void => {
      setScrolled(window.scrollY >= 20);
    };

    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'About', icon: <PersonIcon />, path: '/About' },
    { text: 'Project', icon: <CodeIcon />, path: '/Project' },
    { text: 'Resume', icon: <DescriptionIcon />, path: '/Resume' },
    { text: 'Contact', icon: <EmailIcon />, path: '/Contact' },
  ];

  const drawer = (
    <Box>
      <Box 
        sx={{ 
          p: 2, 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          borderBottom: '1px solid rgba(0, 217, 255, 0.1)'
        }}
      >
        <Logo variant="h5">AM</Logo>
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#00D9FF' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ mt: 2 }}>
        {menuItems.map((item) => (
          <Box key={item.text} component={Link} to={item.path} sx={{ textDecoration: 'none' }}>
            <DrawerListItem
              onClick={handleDrawerToggle}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </DrawerListItem>
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <StyledAppBar position="fixed" scrolled={scrolled}>
        <Toolbar>
          <Logo 
            variant="h5" 
            onClick={() => window.location.reload()}
          >
            AM
          </Logo>

          <Box sx={{ flexGrow: 1 }} />

          {isMobile ? (
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ 
                color: '#00D9FF',
                '&:hover': {
                  backgroundColor: 'rgba(0, 217, 255, 0.1)',
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {menuItems.map((item) => (
                <Box key={item.text} component={Link} to={item.path} sx={{ textDecoration: 'none' }}>
                  <NavButton
                    startIcon={item.icon}
                  >
                    {item.text}
                  </NavButton>
                </Box>
              ))}
            </Box>
          )}
        </Toolbar>
      </StyledAppBar>

      <StyledDrawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </StyledDrawer>
    </>
  );
};

export default Nav;