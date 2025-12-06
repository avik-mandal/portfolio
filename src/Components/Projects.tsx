// Projects.tsx
import React from 'react';
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

const Projects: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 10,
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
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
                Projects
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
              Here are some of my recent projects. Each one represents a learning journey and a step forward in my development career.
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={4}>
          {/* @ts-ignore */}
          <Grid item xs={12} md={6} lg={4}>
            <ProjectBox projectPhoto={WigglesImage} projectName="PRACTO" />
          </Grid>
          {/* @ts-ignore */}
          <Grid item xs={12} md={6} lg={4}>
            <ProjectBox projectPhoto={TindogImage} projectName="Tindog" />
          </Grid>
          {/* @ts-ignore */}
          <Grid item xs={12} md={6} lg={4}>
            <ProjectBox projectPhoto={RogfreeImage} projectName="RogFree" />
          </Grid>
          {/* @ts-ignore */}
          <Grid item xs={12} md={6} lg={4}>
            <ProjectBox projectPhoto={NewsletterImage} projectName="Newsletter" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
