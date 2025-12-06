import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  Fade,
  Zoom,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import WebIcon from '@mui/icons-material/Web';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportIcon from '@mui/icons-material/Support';

const ServicesContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: theme.spacing(10, 0),
  background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
}));

const ServiceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'rgba(26, 26, 26, 0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  border: '1px solid rgba(0, 217, 255, 0.1)',
  height: '100%',
  transition: 'all 0.3s ease',
  textAlign: 'center',
  '&:hover': {
    transform: 'translateY(-8px)',
    border: '1px solid rgba(0, 217, 255, 0.3)',
    boxShadow: '0 12px 32px rgba(0, 217, 255, 0.2)',
  }
}));

const ServiceIcon = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  background: 'linear-gradient(45deg, #00D9FF, #0099CC)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease',
  '& svg': {
    fontSize: 40,
    color: '#fff',
  },
  '&:hover': {
    transform: 'scale(1.1) rotate(5deg)',
    boxShadow: '0 8px 20px rgba(0, 217, 255, 0.4)',
  }
}));

const services = [
  {
    icon: <WebIcon />,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies like React, Node.js, and MongoDB. Responsive, fast, and user-friendly.',
  },
  {
    icon: <SmartphoneIcon />,
    title: 'Responsive Design',
    description: 'Mobile-first designs that work seamlessly across all devices. Ensuring your website looks perfect on any screen size.',
  },
  {
    icon: <DesignServicesIcon />,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that enhance user experience. Focus on usability and aesthetic appeal.',
  },
  {
    icon: <CodeIcon />,
    title: 'Frontend Development',
    description: 'Building interactive and dynamic frontend experiences using React, TypeScript, and modern CSS frameworks.',
  },
  {
    icon: <SpeedIcon />,
    title: 'Performance Optimization',
    description: 'Optimizing websites for speed and performance. Fast loading times and smooth user experiences.',
  },
  {
    icon: <SupportIcon />,
    title: 'Maintenance & Support',
    description: 'Ongoing support and maintenance for your projects. Keeping everything up-to-date and running smoothly.',
  },
];

const Services: React.FC = () => {
  return (
    <ServicesContainer>
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              My{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(45deg, #00D9FF, #FF006E)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Services
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '1.1rem',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              I offer a range of services to help bring your digital vision to life. 
              From design to development, I've got you covered.
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            // @ts-ignore
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Zoom in timeout={800 + index * 100}>
                <ServiceCard elevation={3}>
                  <ServiceIcon>
                    {service.icon}
                  </ServiceIcon>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: '#00D9FF',
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      lineHeight: 1.8,
                    }}
                  >
                    {service.description}
                  </Typography>
                </ServiceCard>
              </Zoom>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ServicesContainer>
  );
};

export default Services;

