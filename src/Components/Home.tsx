import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.png";
import { CiCoffeeCup } from "react-icons/ci";
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Fade,
  Zoom,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(0, 217, 255, 0.1) 0%, transparent 50%)',
    animation: 'pulse 4s ease-in-out infinite',
  },
  '@keyframes pulse': {
    '0%, 100%': { opacity: 0.5 },
    '50%': { opacity: 1 },
  },
}));

const AboutSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: 'linear-gradient(135deg, #1a1a2e 0%, #0a0a0a 100%)',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  borderRadius: '12px',
  fontWeight: 600,
  fontSize: '1rem',
  textTransform: 'none',
  transition: 'all 0.3s ease',
}));

const PrimaryButton = styled(StyledButton)(({ theme }) => ({
  background: 'linear-gradient(45deg, #00D9FF, #0099CC)',
  color: '#fff',
  '&:hover': {
    background: 'linear-gradient(45deg, #0099CC, #00D9FF)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 20px rgba(0, 217, 255, 0.4)',
  },
}));

const SecondaryButton = styled(StyledButton)(({ theme }) => ({
  border: '2px solid #00D9FF',
  color: '#00D9FF',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'rgba(0, 217, 255, 0.1)',
    border: '2px solid #00D9FF',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 20px rgba(0, 217, 255, 0.3)',
  },
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

const StatsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: 'linear-gradient(135deg, #1a1a2e 0%, #0a0a0a 100%)',
}));

const StatCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'rgba(26, 26, 26, 0.6)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  border: '1px solid rgba(0, 217, 255, 0.1)',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-8px)',
    border: '1px solid rgba(0, 217, 255, 0.3)',
    boxShadow: '0 12px 32px rgba(0, 217, 255, 0.2)',
  }
}));

const Home: React.FC = () => {
  const animationData = useMemo(() => SpaceBoy as unknown, []);

  return (
    <Box component="main">
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* Left Content */}
            {/* @ts-ignore - MUI Grid item prop type issue */}
            <Grid item xs={12} md={6}>
              <Fade in timeout={1000}>
                <Box>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      mb: 2,
                      fontSize: '1.5rem',
                      color: 'rgba(255, 255, 255, 0.8)'
                    }}
                  >
                    👋 Hi there!
                  </Typography>

                  <Typography 
                    variant="h1" 
                    sx={{ 
                      mb: 3,
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                      fontWeight: 700,
                      color: '#fff'
                    }}
                  >
                    I'M{' '}
                    <Box 
                      component="span" 
                      sx={{
                        background: 'linear-gradient(45deg, #00D9FF, #FF006E)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      AVIK MANDAL
                    </Box>
                  </Typography>

                  <Box sx={{ mb: 4, minHeight: '60px' }}>
                    <Typed />
                  </Box>

                  <Stack 
                    direction={{ xs: 'column', sm: 'row' }} 
                    spacing={2}
                  >
                    <PrimaryButton
                      variant="contained"
                      startIcon={<EmailIcon />}
                      href="#contact"
                    >
                      Contact Me
                    </PrimaryButton>

                    <Box
                      component="a"
                      href="/Avik_Mandal_Resume.pdf"
                      download
                      sx={{ textDecoration: 'none' }}
                    >
                      <SecondaryButton
                        variant="outlined"
                        startIcon={<DownloadIcon />}
                      >
                        Download Resume
                      </SecondaryButton>
                    </Box>
                  </Stack>
                </Box>
              </Fade>
            </Grid>

            {/* Right Animation */}
            {/* @ts-ignore - MUI Grid item prop type issue */}
            <Grid item xs={12} md={6}>
              <Zoom in timeout={1500}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    style={{ 
                      maxWidth: '100%',
                      height: 'auto',
                      filter: 'drop-shadow(0 0 30px rgba(0, 217, 255, 0.5))'
                    }}
                  />
                </Box>
              </Zoom>
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      {/* About Section */}
      <AboutSection>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* Left Content */}
            {/* @ts-ignore - MUI Grid item prop type issue */}
            <Grid item xs={12} md={6}>
              <Fade in timeout={1000}>
                <AboutPaper elevation={3}>
                  <Typography 
                    variant="h2" 
                    gutterBottom
                    sx={{
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      fontWeight: 700,
                      mb: 3
                    }}
                  >
                    Brief <Box component="strong" sx={{ color: '#00D9FF' }}>introduction</Box>
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
                    I love transforming a raw idea into a product or website that impacts
                    lives. I enjoy work that challenges me – and work I can be proud of.
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
                    I'm fluent in <Box component="strong" sx={{ color: '#00D9FF' }}>Java</Box>, comfortable with{' '}
                    <Box component="strong" sx={{ color: '#FF006E' }}>Python</Box>, and building projects in the{' '}
                    <Box component="strong" sx={{ color: '#00D9FF' }}>MERN</Box> stack. I plan to learn{' '}
                    <Box component="strong" sx={{ color: '#FF006E' }}>Next.js</Box>,{' '}
                    <Box component="strong" sx={{ color: '#00D9FF' }}>Three.js</Box>, and{' '}
                    <Box component="strong" sx={{ color: '#FF006E' }}>TypeScript</Box> soon.
                  </Typography>

                  <Typography 
                    variant="body1"
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.85)',
                      lineHeight: 1.8,
                      fontSize: '1.05rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    Also, I love <Box component="strong" sx={{ color: '#00D9FF' }}>coffee</Box>
                    <CiCoffeeCup size={28} style={{ color: '#FF006E' }} />
                  </Typography>
                </AboutPaper>
              </Fade>
            </Grid>

            {/* Right Avatar */}
            {/* @ts-ignore - MUI Grid item prop type issue */}
            <Grid item xs={12} md={6}>
              <Zoom in timeout={1500}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Tilt
                    tiltMaxAngleX={8}
                    tiltMaxAngleY={8}
                    glareEnable={true}
                    glareMaxOpacity={0.12}
                  >
                    <Box
                      component="img"
                      src={Avatar}
                      alt="Avatar of Avik Mandal"
                      sx={{
                        width: { xs: 250, md: 350 },
                        height: { xs: 250, md: 350 },
                        borderRadius: '50%',
                        border: '4px solid rgba(0, 217, 255, 0.3)',
                        boxShadow: '0 0 40px rgba(0, 217, 255, 0.4)',
                      }}
                    />
                  </Tilt>
                </Box>
              </Zoom>
            </Grid>
          </Grid>
        </Container>
      </AboutSection>

      {/* Statistics Section */}
      <StatsSection>
        <Container maxWidth="lg">
          <Fade in timeout={1000}>
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 6,
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              By The{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(45deg, #00D9FF, #FF006E)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Numbers
              </Box>
            </Typography>
          </Fade>

          <Grid container spacing={4}>
            {/* @ts-ignore */}
            <Grid item xs={6} md={3}>
              <Fade in timeout={1200}>
                <StatCard elevation={3}>
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, #00D9FF, #0099CC)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <CodeIcon sx={{ fontSize: 40, color: '#fff' }} />
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      background: 'linear-gradient(45deg, #00D9FF, #FF006E)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    10+
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Projects Completed
                  </Typography>
                </StatCard>
              </Fade>
            </Grid>

            {/* @ts-ignore */}
            <Grid item xs={6} md={3}>
              <Fade in timeout={1400}>
                <StatCard elevation={3}>
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, #00D9FF, #0099CC)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <SchoolIcon sx={{ fontSize: 40, color: '#fff' }} />
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      background: 'linear-gradient(45deg, #00D9FF, #FF006E)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    3+
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Years Learning
                  </Typography>
                </StatCard>
              </Fade>
            </Grid>

            {/* @ts-ignore */}
            <Grid item xs={6} md={3}>
              <Fade in timeout={1600}>
                <StatCard elevation={3}>
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, #00D9FF, #0099CC)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <WorkIcon sx={{ fontSize: 40, color: '#fff' }} />
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      background: 'linear-gradient(45deg, #00D9FF, #FF006E)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    MERN
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Stack Expertise
                  </Typography>
                </StatCard>
              </Fade>
            </Grid>

            {/* @ts-ignore */}
            <Grid item xs={6} md={3}>
              <Fade in timeout={1800}>
                <StatCard elevation={3}>
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, #00D9FF, #0099CC)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <StarIcon sx={{ fontSize: 40, color: '#fff' }} />
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      background: 'linear-gradient(45deg, #00D9FF, #FF006E)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    100%
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Dedication
                  </Typography>
                </StatCard>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </StatsSection>

      {/* Contact Section */}
      <Box
        id="contact"
        sx={{
          py: 10,
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
        }}
      >
        <Container maxWidth="md">
          <Fade in timeout={1000}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '3rem' },
                }}
              >
                Let's{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(45deg, #00D9FF, #FF006E)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Connect
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  mb: 4,
                  fontSize: '1.1rem',
                }}
              >
                Have a project in mind or want to collaborate? I'd love to hear from you!
              </Typography>
              <Box component={Link} to="/Contact" sx={{ textDecoration: 'none' }}>
                <PrimaryButton
                  variant="contained"
                  startIcon={<EmailIcon />}
                >
                  Get In Touch
                </PrimaryButton>
              </Box>
            </Box>
          </Fade>
        </Container>
      </Box>
    </Box>
  );
};

export default React.memo(Home);