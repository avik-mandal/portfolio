import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  Fade,
  Zoom
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import WebIcon from '@mui/icons-material/Web';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportIcon from '@mui/icons-material/Support';

// Animations
const pulseGlow = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ServicesContainer = styled(Box)({
  minHeight: '100vh',
  background: '#000000',
  color: '#ffffff',
  overflow: 'hidden',
  position: 'relative',
  py: 10,
});

const AnimatedBackground = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  pointerEvents: 'none',
  overflow: 'hidden',
  zIndex: 0,
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #000000 100%)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(0, 217, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 217, 255, 0.05) 1px, transparent 1px)
    `,
    backgroundSize: '50px 50px',
    opacity: 0.2,
  },
});

const GlowBlob = styled(Box)<{ delay?: string }>(({ delay = '0s' }) => ({
  position: 'absolute',
  borderRadius: '50%',
  filter: 'blur(60px)',
  opacity: 0.2,
  animation: `${pulseGlow} 3s ease-in-out infinite`,
  animationDelay: delay,
}));

const ServiceCard = styled(Paper)({
  padding: '32px',
  background: 'rgba(26, 26, 46, 0.4)',
  backdropFilter: 'blur(20px)',
  borderRadius: '16px',
  border: '1px solid rgba(0, 217, 255, 0.1)',
  height: '100%',
  transition: 'all 0.3s ease',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
    border: '1px solid rgba(0, 217, 255, 0.3)',
    boxShadow: '0 12px 32px rgba(0, 217, 255, 0.2)',
  }
});

const ServiceIcon = styled(Box)({
  width: 80,
  height: 80,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #00D9FF 0%, #0066FF 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 24px',
  transition: 'all 0.3s ease',
  '& svg': {
    fontSize: 40,
    color: '#fff',
  },
  '&:hover': {
    transform: 'scale(1.1) rotate(5deg)',
    boxShadow: '0 8px 20px rgba(0, 217, 255, 0.4)',
  }
});

const GradientText = styled(Typography)({
  background: 'linear-gradient(45deg, #00D9FF, #0066FF, #A855F7)',
  backgroundSize: '200% 200%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const services = [
  {
    icon: <WebIcon />,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies like React, Node.js, and MongoDB. Responsive, fast, and user-friendly.',
    gradient: 'linear-gradient(135deg, #00D9FF 0%, #0066FF 100%)',
  },
  {
    icon: <SmartphoneIcon />,
    title: 'Responsive Design',
    description: 'Mobile-first designs that work seamlessly across all devices. Ensuring your website looks perfect on any screen size.',
    gradient: 'linear-gradient(135deg, #A855F7 0%, #7C3AED 100%)',
  },
  {
    icon: <DesignServicesIcon />,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that enhance user experience. Focus on usability and aesthetic appeal.',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)',
  },
  {
    icon: <CodeIcon />,
    title: 'Frontend Development',
    description: 'Building interactive and dynamic frontend experiences using React, TypeScript, and modern CSS frameworks.',
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
  },
  {
    icon: <SpeedIcon />,
    title: 'Performance Optimization',
    description: 'Optimizing websites for speed and performance. Fast loading times and smooth user experiences.',
    gradient: 'linear-gradient(135deg, #F97316 0%, #DC2626 100%)',
  },
  {
    icon: <SupportIcon />,
    title: 'Maintenance & Support',
    description: 'Ongoing support and maintenance for your projects. Keeping everything up-to-date and running smoothly.',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
  },
];

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <ServicesContainer>
      <AnimatedBackground>
        <GlowBlob
          sx={{
            width: '500px',
            height: '500px',
            background: '#00D9FF',
            top: '10%',
            left: '5%',
          }}
        />
        <GlowBlob
          delay="1.5s"
          sx={{
            width: '400px',
            height: '400px',
            background: '#A855F7',
            top: '50%',
            right: '5%',
          }}
        />
        <GlowBlob
          delay="0.75s"
          sx={{
            width: '300px',
            height: '300px',
            background: '#0066FF',
            bottom: '10%',
            left: '50%',
          }}
        />
      </AnimatedBackground>

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Container maxWidth="lg">
          <Fade in={isVisible} timeout={1000}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <GradientText
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                My Services
              </GradientText>
              <Box
                sx={{
                  width: '96px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #00D9FF, #0066FF, #A855F7)',
                  borderRadius: '2px',
                  mx: 'auto',
                  mb: 3,
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1.125rem',
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.8,
                }}
              >
                I offer a range of services to help bring your digital vision to life. 
                From design to development, I've got you covered.
              </Typography>
            </Box>
          </Fade>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              /* @ts-ignore */
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    animation: isVisible ? `${slideUp} 0.8s ease-out forwards` : 'none',
                    animationDelay: `${index * 0.15}s`,
                  }}
                >
                  <Zoom in={isVisible} timeout={800 + index * 100}>
                    <ServiceCard elevation={3}>
                      <ServiceIcon sx={{ background: service.gradient }}>
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
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ServicesContainer>
  );
};

export default Services;
