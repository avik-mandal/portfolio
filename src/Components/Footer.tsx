import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { 
  Box, 
  Container, 
  Typography, 
  IconButton, 
  Divider,
  Stack,
  Grid,
  Fade,
  Zoom
} from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BuildIcon from '@mui/icons-material/Build';
import PsychologyIcon from '@mui/icons-material/Psychology';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
  borderTop: '1px solid rgba(0, 217, 255, 0.1)',
  padding: theme.spacing(6, 0, 3),
  marginTop: 'auto',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #00D9FF, #FF006E, transparent)',
    animation: 'shimmer 3s ease-in-out infinite',
  },
  '@keyframes shimmer': {
    '0%, 100%': { opacity: 0.3 },
    '50%': { opacity: 1 },
  },
}));

const FooterSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
}));

const FooterLink = styled(Box)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  textDecoration: 'none',
  fontSize: '0.95rem',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  '&:hover': {
    color: '#00D9FF',
    transform: 'translateX(4px)',
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: '#fff',
  backgroundColor: 'rgba(0, 217, 255, 0.1)',
  border: '1px solid rgba(0, 217, 255, 0.2)',
  transition: 'all 0.3s ease',
  width: 48,
  height: 48,
  '&:hover': {
    backgroundColor: 'rgba(0, 217, 255, 0.2)',
    border: '1px solid rgba(0, 217, 255, 0.5)',
    transform: 'translateY(-4px) scale(1.1)',
    boxShadow: '0 8px 16px rgba(0, 217, 255, 0.3)',
  },
}));

const InfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  color: 'rgba(255, 255, 255, 0.8)',
  fontSize: '0.9rem',
  marginBottom: theme.spacing(1),
}));

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'About', icon: <PersonIcon />, path: '/About' },
    { text: 'Skills', icon: <PsychologyIcon />, path: '/Skills' },
    { text: 'Projects', icon: <CodeIcon />, path: '/Project' },
    { text: 'Services', icon: <BuildIcon />, path: '/Services' },
    { text: 'Resume', icon: <DescriptionIcon />, path: '/Resume' },
    { text: 'Contact', icon: <EmailIcon />, path: '/Contact' },
  ];

  return (
    <Box component="footer">
      <FooterContainer>
        <Box sx={{ maxWidth: '1400px', mx: 'auto', px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={4}>
            {/* Brand & Description */}
            {/* @ts-ignore */}
            <Grid item xs={12} md={4}>
              <Fade in timeout={1000}>
                <FooterSection>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 700,
                      mb: 2,
                      background: 'linear-gradient(45deg, #00D9FF, #FF006E)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                      transition: 'transform 0.3s ease',
                    }}
                    onClick={scrollToTop}
                  >
                    Avik Mandal
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      lineHeight: 1.8,
                      mb: 2,
                    }}
                  >
                    Frontend Developer & MERN Stack Enthusiast. Passionate about creating beautiful, 
                    functional web experiences that make a difference.
                  </Typography>
                  
                  {/* Social Links */}
                  <Stack direction="row" spacing={1.5} sx={{ mt: 1 }}>
                    <Box component="a" href="https://github.com/avik-mandal" target="_blank" rel="noreferrer" sx={{ textDecoration: 'none' }}>
                      <SocialButton aria-label="GitHub">
                        <FaGithub size={20} />
                      </SocialButton>
                    </Box>
                    <Box component="a" href="https://www.linkedin.com/in/avik-mandal-a901b7294" target="_blank" rel="noreferrer" sx={{ textDecoration: 'none' }}>
                      <SocialButton aria-label="LinkedIn">
                        <FaLinkedin size={20} />
                      </SocialButton>
                    </Box>
                    <Box component="a" href="https://www.youtube.com/@advh1826" target="_blank" rel="noreferrer" sx={{ textDecoration: 'none' }}>
                      <SocialButton aria-label="YouTube">
                        <FaYoutube size={20} />
                      </SocialButton>
                    </Box>
                    <Box component="a" href="mailto:avikmandal2022@gmail.com" sx={{ textDecoration: 'none' }}>
                      <SocialButton aria-label="Email">
                        <GrMail size={18} />
                      </SocialButton>
                    </Box>
                  </Stack>
                </FooterSection>
              </Fade>
            </Grid>

            {/* Quick Links */}
            {/* @ts-ignore */}
            <Grid item xs={12} sm={6} md={4}>
              <Fade in timeout={1200}>
                <FooterSection>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      mb: 2,
                      color: '#00D9FF',
                    }}
                  >
                    Quick Links
                  </Typography>
                  {menuItems.map((item) => (
                    <Box
                      key={item.text}
                      component={Link}
                      to={item.path}
                      sx={{ textDecoration: 'none' }}
                    >
                      <FooterLink>
                        {item.icon}
                        {item.text}
                      </FooterLink>
                    </Box>
                  ))}
                </FooterSection>
              </Fade>
            </Grid>

            {/* Contact Info */}
            {/* @ts-ignore */}
            <Grid item xs={12} sm={6} md={4}>
              <Fade in timeout={1400}>
                <FooterSection>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      mb: 2,
                      color: '#00D9FF',
                    }}
                  >
                    Get In Touch
                  </Typography>
                  <InfoItem>
                    <EmailIcon sx={{ color: '#00D9FF', fontSize: 20 }} />
                    <Box component="a" href="mailto:avikmandal2022@gmail.com" sx={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', '&:hover': { color: '#00D9FF' } }}>
                      avikmandal2022@gmail.com
                    </Box>
                  </InfoItem>
                  <InfoItem>
                    <LocationOnIcon sx={{ color: '#00D9FF', fontSize: 20 }} />
                    <Typography variant="body2">West Bengal, India</Typography>
                  </InfoItem>
                  <InfoItem>
                    <CodeIcon sx={{ color: '#00D9FF', fontSize: 20 }} />
                    <Typography variant="body2">Available for Freelance</Typography>
                  </InfoItem>
                </FooterSection>
              </Fade>
            </Grid>
          </Grid>

          <Divider 
            sx={{ 
              my: 4,
              backgroundColor: 'rgba(0, 217, 255, 0.1)' 
            }} 
          />

          {/* Bottom Section */}
          <Zoom in timeout={1600}>
            <Box sx={{ textAlign: 'center' }}>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.6)',
                  }}
                >
                  Copyright &copy; {currentYear} Avik Mandal. All rights reserved.
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.6)',
                    }}
                  >
                    Made with
                  </Typography>
                  <FavoriteIcon 
                    sx={{ 
                      fontSize: 16, 
                      color: '#FF006E',
                      animation: 'pulse 2s ease-in-out infinite',
                      '@keyframes pulse': {
                        '0%, 100%': { transform: 'scale(1)' },
                        '50%': { transform: 'scale(1.2)' },
                      },
                    }} 
                  />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.6)',
                    }}
                  >
                    using React & Material-UI
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Zoom>
        </Box>
      </FooterContainer>
    </Box>
  );
};

export default Footer;
