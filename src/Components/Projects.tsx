// Projects.tsx
import React, { useState, useEffect } from 'react';
import ProjectBox from './ProjectBox';
import WigglesImage from '../images/WigglesImage.png';
import TindogImage from '../images/TindogImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import NewsletterImage from '../images/NewsletterImage.png';
import {
  Container,
  Box,
  Typography,
  Grid,
  Fade
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

// Animations
const pulseGlow = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ProjectsContainer = styled(Box)({
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

const GradientText = styled(Typography)({
  background: 'linear-gradient(45deg, #00D9FF, #0066FF, #A855F7)',
  backgroundSize: '200% 200%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    { photo: WigglesImage, name: 'PRACTO' },
    { photo: TindogImage, name: 'Tindog' },
    { photo: RogfreeImage, name: 'RogFree' },
    { photo: NewsletterImage, name: 'Newsletter' },
  ];

  return (
    <ProjectsContainer>
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
                My Projects
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
                Here are some of my recent projects. Each one represents a learning journey and a step forward in my development career.
              </Typography>
            </Box>
          </Fade>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              /* @ts-ignore */
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Box
                  sx={{
                    animation: isVisible ? `${slideUp} 0.8s ease-out forwards` : 'none',
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <ProjectBox projectPhoto={project.photo} projectName={project.name} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ProjectsContainer>
  );
};

export default Projects;
