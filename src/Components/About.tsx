import React from 'react';
import Skills from './Skills';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import Coder from '../LottieFiles/coder.json';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Grid, 
  Fade,
  Link
} from '@mui/material';
import { styled } from '@mui/material/styles';

const AboutContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: theme.spacing(8, 0),
  background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
}));

const AboutPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'rgba(26, 26, 26, 0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  border: '1px solid rgba(0, 217, 255, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    border: '1px solid rgba(0, 217, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(0, 217, 255, 0.15)',
  }
}));

const SkillsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
  gap: theme.spacing(2),
  marginTop: theme.spacing(4),
}));

const About: React.FC = () => {
  return (
    <AboutContainer>
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Grid container spacing={4} alignItems="center">
            {/* Text Section */}
            {/* @ts-ignore */}
            <Grid item xs={12} md={7}>
              <AboutPaper elevation={3}>
                <Typography 
                  variant="h3" 
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    background: 'linear-gradient(45deg, #00D9FF, #FF006E)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 3
                  }}
                >
                  Get to <Box component="span" sx={{ fontWeight: 900 }}>know</Box> me!
                </Typography>
                
                <Typography 
                  variant="body1" 
                  paragraph
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.85)',
                    lineHeight: 1.8,
                    fontSize: '1.05rem'
                  }}
                >
                  Hi, my name is <Box component="strong" sx={{ color: '#00D9FF' }}>Avik Mandal</Box> and I am from West Bengal, India.
                  I'm a <Box component="strong" sx={{ color: '#FF006E' }}>Frontend web developer</Box> and a final year college student pursuing <Box component="strong" sx={{ color: '#00D9FF' }}>M.C.A</Box> at DR BC Roy Engineering College.
                </Typography>

                <Typography 
                  variant="body1" 
                  paragraph
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.85)',
                    lineHeight: 1.8,
                    fontSize: '1.05rem'
                  }}
                >
                  I have done my BCA from <Box component="strong" sx={{ color: '#00D9FF' }}>Vidyasagar University</Box>.
                  I love to create original projects with beautiful designs, you can check out some of my work in the projects section.
                </Typography>

                <Typography 
                  variant="body1" 
                  paragraph
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.85)',
                    lineHeight: 1.8,
                    fontSize: '1.05rem'
                  }}
                >
                  I am <Box component="strong" sx={{ color: '#FF006E' }}>open</Box> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.
                </Typography>

                <Typography 
                  variant="body1"
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.85)',
                    lineHeight: 1.8,
                    fontSize: '1.05rem'
                  }}
                >
                  Apart from coding I love to play games, you can check out my YT here{' '}
                  <Link 
                    href="https://www.youtube.com/@advh1826" 
                    target='_blank' 
                    rel="noreferrer"
                    sx={{
                      color: '#00D9FF',
                      textDecoration: 'none',
                      fontWeight: 600,
                      '&:hover': {
                        color: '#FF006E',
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    Youtube
                  </Link>.
                </Typography>
              </AboutPaper>
            </Grid>

            {/* Animation Section */}
            {/* @ts-ignore */}
            <Grid item xs={12} md={5}>
              <Fade in timeout={1500}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Tilt>
                    <Lottie
                      animationData={Coder}
                      loop={true}
                      style={{ 
                        maxWidth: '100%', 
                        height: 'auto',
                        filter: 'drop-shadow(0 0 20px rgba(0, 217, 255, 0.3))'
                      }}
                    />
                  </Tilt>
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Fade>

        {/* Skills Section */}
        <Box sx={{ mt: 8 }}>
          <Fade in timeout={2000}>
            <Typography 
              variant="h3" 
              align="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 4,
                background: 'linear-gradient(45deg, #00D9FF, #FF006E)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Professional Skillset
            </Typography>
          </Fade>

          <SkillsGrid>
            <Skills skill='React' />
            <Skills skill='Node' />
            <Skills skill='Express' />
            <Skills skill='MongoDb' />
            <Skills skill='Git' />
            <Skills skill='Github' />
            <Skills skill='Javascript' />
            <Skills skill='Postman' />
            <Skills skill='Figma' />
            <Skills skill='Vercel' />
            <Skills skill='Npm' />
            <Skills skill='Bootstrap' />
          </SkillsGrid>
        </Box>
      </Container>
    </AboutContainer>
  );
};

export default About;