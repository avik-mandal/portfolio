import React, { useState, useEffect, useRef } from 'react';
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
import { styled, keyframes } from '@mui/material/styles';

// Animations
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AboutContainer = styled(Box)({
  minHeight: '100vh',
  padding: 0,
  background: '#000000',
  color: '#ffffff',
  overflow: 'hidden',
  position: 'relative',
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

const AboutPaper = styled(Paper)({
  padding: '32px',
  background: 'rgba(26, 26, 46, 0.4)',
  backdropFilter: 'blur(20px)',
  borderRadius: '16px',
  border: '1px solid rgba(0, 217, 255, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    border: '1px solid rgba(0, 217, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(0, 217, 255, 0.15)',
    transform: 'translateY(-4px)',
  }
});

const SkillsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
  gap: theme.spacing(2),
  marginTop: theme.spacing(4),
}));

const GradientText = styled(Typography)({
  background: 'linear-gradient(45deg, #00D9FF, #0066FF, #A855F7)',
  backgroundSize: '200% 200%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      if (skillsRef.current) {
        const rect = skillsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setSkillsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AboutContainer>
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

      <Box sx={{ position: 'relative', zIndex: 1, py: 10 }}>
        <Container maxWidth="lg">
          <Fade in={isVisible} timeout={1000}>
            <Grid container spacing={4} alignItems="center">
              {/* Text Section */}
              {/* @ts-ignore */}
              <Grid item xs={12} md={7}>
                <AboutPaper elevation={3}>
                  <GradientText
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 3,
                      fontSize: { xs: '2rem', md: '2.5rem' },
                    }}
                  >
                    Get to <Box component="span" sx={{ fontWeight: 900 }}>know</Box> me!
                  </GradientText>
                  
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
                    I'm a <Box component="strong" sx={{ color: '#A855F7' }}>Frontend web developer</Box> and a final year college student pursuing <Box component="strong" sx={{ color: '#00D9FF' }}>M.C.A</Box> at DR BC Roy Engineering College.
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
                    I am <Box component="strong" sx={{ color: '#A855F7' }}>open</Box> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.
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
                          color: '#A855F7',
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
                <Fade in={isVisible} timeout={1500}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Tilt>
                      <Box
                        sx={{
                          animation: `${float} 4s ease-in-out infinite`,
                          filter: 'drop-shadow(0 0 20px rgba(0, 217, 255, 0.3))',
                        }}
                      >
                        <Lottie
                          animationData={Coder}
                          loop={true}
                          style={{ 
                            maxWidth: '100%', 
                            height: 'auto',
                          }}
                        />
                      </Box>
                    </Tilt>
                  </Box>
                </Fade>
              </Grid>
            </Grid>
          </Fade>

          {/* Skills Section */}
          <Box ref={skillsRef} sx={{ mt: 10 }}>
            <Fade in={skillsVisible} timeout={1000}>
              <Box sx={{ textAlign: 'center', mb: 6 }}>
                <GradientText
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                  }}
                >
                  Professional Skillset
                </GradientText>
                <Box
                  sx={{
                    width: '96px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #00D9FF, #0066FF, #A855F7)',
                    borderRadius: '2px',
                    mx: 'auto',
                  }}
                />
              </Box>
            </Fade>

            <Fade in={skillsVisible} timeout={1500}>
              <SkillsGrid>
                {['React', 'Node', 'Express', 'MongoDb', 'Git', 'Github', 'Javascript', 'Postman', 'Figma', 'Vercel', 'Npm', 'Bootstrap'].map((skill, index) => (
                  <Box
                    key={skill}
                    sx={{
                      animation: skillsVisible ? `${slideUp} 0.8s ease-out forwards` : 'none',
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <Skills skill={skill} />
                  </Box>
                ))}
              </SkillsGrid>
            </Fade>
          </Box>
        </Container>
      </Box>
    </AboutContainer>
  );
};

export default About;
