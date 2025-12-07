import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Paper,
  IconButton,
  Fade,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import {
  Download as DownloadIcon,
  Mail as MailIcon,
  Code as CodeIcon,
  MenuBook as BookOpenIcon,
  Work as BriefcaseIcon,
  Star as StarIcon,
  AutoAwesome as SparklesIcon,
  Bolt as ZapIcon,
  GitHub as GithubIcon,
  LinkedIn as LinkedinIcon,
  Twitter as TwitterIcon,
  LocalCafe as CoffeeIcon
} from '@mui/icons-material';

// Animations
const gradientShift = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-25px) rotate(10deg); }
`;

const spinSlow = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

// Styled Components
const HomeContainer = styled(Box)({
  minHeight: '100vh',
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

const MouseGlow = styled(Box)({
  position: 'absolute',
  width: '384px',
  height: '384px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #000000ff 0%, #ffffffff 100%)',
  filter: 'blur(60px)',
  opacity: 0.3,
  transition: 'all 0.5s ease-out',
  pointerEvents: 'none',
});

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4, 2),
  paddingTop: theme.spacing(10),
  position: 'relative',
  zIndex: 1,
}));

const GlassCard = styled(Paper)({
  background: 'rgba(26, 26, 46, 0.4)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '16px',
  padding: '16px',
});

const GradientText = styled(Typography)({
  background: 'linear-gradient(45deg, #00D9FF, #0066FF, #A855F7)',
  backgroundSize: '200% 200%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animation: `${gradientShift} 4s ease infinite`,
});

const PrimaryButton = styled(Button)({
  background: 'linear-gradient(135deg, #00D9FF 0%, #0066FF 50%, #A855F7 100%)',
  color: '#ffffff',
  fontWeight: 700,
  padding: '16px 40px',
  borderRadius: '16px',
  fontSize: '18px',
  textTransform: 'none',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.5s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 40px rgba(0, 217, 255, 0.5)',
    background: 'linear-gradient(135deg, #A855F7 0%, #0066FF 50%, #00D9FF 100%)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, #A855F7 0%, #0066FF 50%, #00D9FF 100%)',
    opacity: 0,
    transition: 'opacity 0.5s ease',
  },
  '&:hover::before': {
    opacity: 1,
  },
  '& > *': {
    position: 'relative',
    zIndex: 1,
  },
});

const SecondaryButton = styled(Button)({
  background: 'rgba(26, 26, 46, 0.4)',
  backdropFilter: 'blur(20px)',
  border: '2px solid transparent',
  color: '#ffffff',
  fontWeight: 700,
  padding: '16px 40px',
  borderRadius: '16px',
  fontSize: '18px',
  textTransform: 'none',
  transition: 'all 0.5s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    border: '2px solid #00D9FF',
    background: 'rgba(26, 26, 46, 0.6)',
  },
});

const SocialButton = styled(IconButton)({
  width: '56px',
  height: '56px',
  background: 'rgba(26, 26, 46, 0.4)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(107, 114, 128, 0.5)',
  color: '#ffffff',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
    border: '1px solid #00D9FF',
    background: 'rgba(26, 26, 46, 0.6)',
  },
});

const TypewriterText = styled(Box)({
  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
  fontWeight: 700,
  fontFamily: 'monospace',
  color: '#ffffff',
  minHeight: '80px',
  display: 'flex',
  alignItems: 'center',
  '& .cursor': {
    color: '#00D9FF',
    animation: `${blink} 1s infinite`,
    marginLeft: '4px',
  },
});

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 2),
  position: 'relative',
  zIndex: 1,
}));

const StatCard = styled(Paper)<{ delay?: string }>(({ delay = '0s' }) => ({
  background: 'rgba(26, 26, 46, 0.4)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(31, 41, 55, 0.8)',
  borderRadius: '24px',
  padding: '32px',
  textAlign: 'center',
  transition: 'all 0.7s ease',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'scale(1.05)',
    border: '1px solid rgba(0, 217, 255, 0.5)',
    boxShadow: '0 12px 40px rgba(0, 217, 255, 0.2)',
  },
}));

const IconWrapper = styled(Box)<{ gradient: string }>(({ gradient }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '16px',
  background: gradient,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 24px',
  transition: 'transform 0.5s ease',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const TechBadge = styled(Box)({
  padding: '8px 16px',
  background: 'rgba(26, 26, 46, 0.4)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(107, 114, 128, 0.5)',
  borderRadius: '12px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    border: '1px solid #00D9FF',
  },
});

const ModernPortfolioHome: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const roles = ['Full Stack Developer', 'MERN Stack Developer', 'Problem Solver', 'Coffee Enthusiast ☕'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setAboutVisible(true);
        }
      }
      
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setStatsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const stats = [
    { 
      icon: CodeIcon, 
      value: '10+', 
      label: 'Projects Completed', 
      gradient: 'linear-gradient(135deg, #00D9FF 0%, #0066FF 100%)',
      description: 'Successfully delivered'
    },
    { 
      icon: BookOpenIcon, 
      value: '3+', 
      label: 'Years Learning', 
      gradient: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)',
      description: 'Continuous growth'
    },
    { 
      icon: BriefcaseIcon, 
      value: 'MERN', 
      label: 'Stack Expertise', 
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      description: 'Full-stack mastery'
    },
    { 
      icon: StarIcon, 
      value: '100%', 
      label: 'Dedication', 
      gradient: 'linear-gradient(135deg, #F97316 0%, #DC2626 100%)',
      description: 'Always committed'
    },
  ];

  const techStack = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Node.js', color: '#68A063' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'Express', color: '#000000' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'Python', color: '#3776AB' },
    { name: 'Java', color: '#007396' },
  ];

  return (
    <HomeContainer>
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
        <MouseGlow
          sx={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </AnimatedBackground>

      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Fade in={isVisible} timeout={1000}>
          <Grid container spacing={4} alignItems="center">
              {/* @ts-ignore - MUI Grid item prop type issue */}
            <Grid item xs={12} md={6}>
                <Box sx={{ mb: 2 }}>
                  <GlassCard sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 3 }}>
                    <SparklesIcon sx={{ color: '#00D9FF', fontSize: 20, animation: `${pulseGlow} 2s infinite` }} />
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 500 }}>
                      Available for opportunities
                    </Typography>
                  </GlassCard>
                </Box>

                <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.6)', mb: 2, fontSize: '1.25rem' }}>
                  👋 Hi there! I'm
                </Typography>

                <GradientText
                  variant="h1"
                  sx={{
                    fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' },
                    fontWeight: 900,
                    mb: 3,
                    lineHeight: 1.2,
                  }}
                >
                  AVIK MANDAL
                </GradientText>

                <Box sx={{ mb: 4, position: 'relative', minHeight: '80px', display: 'flex', alignItems: 'center' }}>
                  <ZapIcon
                    sx={{ 
                      position: 'absolute',
                      left: '-48px',
                      color: '#00D9FF',
                      fontSize: 32,
                      animation: `${bounce} 2s ease-in-out infinite`,
                      display: { xs: 'none', md: 'block' },
                    }}
                  />
                  <TypewriterText>
                    {typedText}
                    <span className="cursor">|</span>
                  </TypewriterText>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    mb: 4,
                    fontSize: '1.125rem',
                    lineHeight: 1.8,
                    maxWidth: '600px',
                  }}
                >
                  Crafting elegant solutions to complex problems. Passionate about building impactful
                  digital experiences that make a difference.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 3 }}>
                  <PrimaryButton
                    startIcon={<MailIcon />}
                    onClick={() => navigate('/Contact')}
                  >
                    Let's Connect
                  </PrimaryButton>
                  <Box
                    component="a"
                    href="/Avik_Mandal_Resume.pdf"
                    download
                    sx={{ textDecoration: 'none' }}
                  >
                    <SecondaryButton startIcon={<DownloadIcon />}>
                      Get Resume
                    </SecondaryButton>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Box component="a" href="https://github.com" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none' }}>
                    <SocialButton aria-label="GitHub">
                      <GithubIcon />
                    </SocialButton>
                  </Box>
                  <Box component="a" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none' }}>
                    <SocialButton aria-label="LinkedIn">
                      <LinkedinIcon />
                    </SocialButton>
                  </Box>
                  <Box component="a" href="https://twitter.com" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none' }}>
                    <SocialButton aria-label="Twitter">
                      <TwitterIcon />
                    </SocialButton>
                  </Box>
                </Box>
              </Grid>

              {/* @ts-ignore - MUI Grid item prop type issue */}
              <Grid item xs={12} md={6}>
                <Fade in={isVisible} timeout={1500}>
                  <Box
                    sx={{ 
                      position: 'relative',
                      width: '100%',
                      maxWidth: '500px',
                      margin: '0 auto',
                      aspectRatio: '1',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '50%',
                        border: '2px solid rgba(0, 217, 255, 0.3)',
                        animation: `${spinSlow} 25s linear infinite`,
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: '32px',
                        borderRadius: '50%',
                        border: '2px solid rgba(168, 85, 247, 0.3)',
                        animation: `${spinSlow} 20s linear infinite reverse`,
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: '64px',
                        borderRadius: '50%',
                        border: '2px solid rgba(0, 102, 255, 0.3)',
                        animation: `${spinSlow} 25s linear infinite`,
                      }}
                    />
                    <GlassCard
                      sx={{
                        position: 'absolute',
                        inset: '80px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        background: 'rgba(26, 26, 46, 0.6)',
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: '144px',
                          animation: `${bounce} 2s ease-in-out infinite`,
                        }}
                      >
                        👨‍💻
                    </Box>
                    </GlassCard>

                    <IconWrapper
                      gradient="linear-gradient(135deg, #00D9FF 0%, #00B8D4 100%)"
                      sx={{
                        position: 'absolute',
                        top: '-16px',
                        right: '-16px',
                        animation: `${float} 4s ease-in-out infinite`,
                        boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)',
                      }}
                    >
                      <CodeIcon sx={{ fontSize: 40, color: 'white' }} />
                    </IconWrapper>

                    <IconWrapper
                      gradient="linear-gradient(135deg, #A855F7 0%, #7C3AED 100%)"
                      sx={{
                        position: 'absolute',
                        bottom: '-16px',
                        left: '-16px',
                        animation: `${float} 4s ease-in-out infinite 2s`,
                        boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
                      }}
                    >
                      <CoffeeIcon sx={{ fontSize: 40, color: 'white' }} />
                    </IconWrapper>
                </Box>
              </Fade>
            </Grid>
            </Grid>
          </Fade>
        </Container>
      </HeroSection>

      {/* About Section */}
      <Section ref={aboutRef}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* @ts-ignore - MUI Grid item prop type issue */}
            <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
              <Fade in={aboutVisible} timeout={1000}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box sx={{ position: 'relative' }}>
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: '-16px',
                        background: 'linear-gradient(135deg, #00D9FF, #0066FF, #A855F7)',
                        borderRadius: '50%',
                        opacity: 0.75,
                        filter: 'blur(32px)',
                        animation: `${spinSlow} 25s linear infinite`,
                      }}
                    />
                    <Box
                      sx={{
                        width: { xs: '280px', md: '384px' },
                        height: { xs: '280px', md: '384px' },
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #00D9FF 0%, #A855F7 100%)',
                        padding: '8px',
                        transition: 'transform 0.7s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                          background: '#1a1a2e',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '4px solid #1f2937',
                        }}
                      >
                        <Box sx={{ fontSize: '144px', animation: `${bounce} 2s ease-in-out infinite` }}>
                          👤
                        </Box>
                      </Box>
                    </Box>
                    <GlassCard
                      sx={{
                        position: 'absolute',
                        top: '-24px',
                        right: '-24px',
                        animation: `${float} 4s ease-in-out infinite`,
                      }}
                    >
                      <Typography variant="body2" sx={{ color: '#00D9FF', fontWeight: 700 }}>
                        Creative
                      </Typography>
                    </GlassCard>
                    <GlassCard
                      sx={{
                        position: 'absolute',
                        bottom: '-24px',
                        left: '-24px',
                        animation: `${float} 4s ease-in-out infinite 2s`,
                      }}
                    >
                      <Typography variant="body2" sx={{ color: '#A855F7', fontWeight: 700 }}>
                        Innovative
                      </Typography>
                    </GlassCard>
                  </Box>
                </Box>
              </Fade>
            </Grid>

            {/* @ts-ignore - MUI Grid item prop type issue */}
            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
              <Fade in={aboutVisible} timeout={1500}>
                <Box>
                  <GlassCard sx={{ display: 'inline-block', mb: 3 }}>
                    <Typography variant="body2" sx={{ color: '#00D9FF', fontWeight: 600 }}>
                      ABOUT ME
                    </Typography>
                  </GlassCard>

                  <Typography 
                    variant="h2" 
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                    }}
                  >
                    Turning Ideas Into{' '}
                    <Box component="span" sx={{ background: 'linear-gradient(45deg, #00D9FF, #A855F7)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      Reality
                    </Box>
                  </Typography>

                  <Box
                    sx={{ 
                      width: '96px',
                      height: '6px',
                      background: 'linear-gradient(90deg, #00D9FF, #0066FF, #A855F7)',
                      borderRadius: '4px',
                      mb: 4,
                    }}
                  />

                  <Typography 
                    variant="body1"
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      mb: 3,
                      fontSize: '1.125rem',
                      lineHeight: 1.8,
                      pl: 3,
                      borderLeft: '4px solid rgba(0, 217, 255, 0.5)',
                    }}
                  >
                    I love transforming raw ideas into products and websites that create meaningful impact.
                    I thrive on challenges that push my boundaries and work that I can be genuinely proud of.
                  </Typography>

                  <GlassCard sx={{ mb: 3, p: 3 }}>
                    <Typography variant="h6" sx={{ color: '#00D9FF', fontWeight: 700, mb: 2 }}>
                      Tech Stack:
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
                      Fluent in{' '}
                      <Box component="span" sx={{ display: 'inline-flex', px: 1.5, py: 0.5, background: 'rgba(0, 217, 255, 0.2)', color: '#00D9FF', borderRadius: '8px', fontWeight: 700 }}>
                        Java
                      </Box>
                      , comfortable with{' '}
                      <Box component="span" sx={{ display: 'inline-flex', px: 1.5, py: 0.5, background: 'rgba(168, 85, 247, 0.2)', color: '#A855F7', borderRadius: '8px', fontWeight: 700 }}>
                        Python
                      </Box>
                      , and building amazing projects in the{' '}
                      <Box component="span" sx={{ display: 'inline-flex', px: 1.5, py: 0.5, background: 'rgba(0, 102, 255, 0.2)', color: '#0066FF', borderRadius: '8px', fontWeight: 700 }}>
                        MERN
                      </Box>
                      {' '}stack.
                    </Typography>
                  </GlassCard>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 3 }}>
                    {techStack.map((tech, i) => (
                      <TechBadge key={i}>
                        <Typography variant="body2" sx={{ color: tech.color, fontWeight: 500 }}>
                          {tech.name}
                        </Typography>
                      </TechBadge>
                    ))}
                  </Box>

                  <GlassCard sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 3 }}>
                    <CoffeeIcon sx={{ fontSize: 48, color: '#A855F7', animation: `${bounce} 2s ease-in-out infinite` }} />
                    <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      Fueled by <Box component="span" sx={{ color: '#A855F7', fontWeight: 700 }}>coffee</Box> and passion for coding
                    </Typography>
                  </GlassCard>
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section ref={statsRef}>
        <Container maxWidth="lg">
          <Fade in={statsVisible} timeout={1000}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <GlassCard sx={{ display: 'inline-block', mb: 3 }}>
                <Typography variant="body2" sx={{ color: '#00D9FF', fontWeight: 600 }}>
                  ACHIEVEMENTS
                </Typography>
              </GlassCard>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                Success By The{' '}
                <Box component="span" sx={{ background: 'linear-gradient(45deg, #00D9FF, #0066FF, #A855F7)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Numbers
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '1.25rem',
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                Every project, every line of code, every challenge overcome
              </Typography>
            </Box>
          </Fade>

          <Grid container spacing={3}>
            {stats.map((stat, index) => (
              /* @ts-ignore - MUI Grid item prop type issue */
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Fade in={statsVisible} timeout={1000 + index * 200}>
                  <StatCard
                    sx={{
                      animation: statsVisible ? `${slideUp} 0.8s ease-out forwards` : 'none',
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <IconWrapper gradient={stat.gradient}>
                      <stat.icon sx={{ fontSize: 40, color: 'white' }} />
                    </IconWrapper>

                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 900,
                        background: 'linear-gradient(45deg, #00D9FF, #0066FF, #A855F7)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 2,
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                      }}
                    >
                      {stat.value}
                    </Typography>

                    <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 700, mb: 1 }}>
                      {stat.label}
                    </Typography>

                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                      {stat.description}
                    </Typography>

                    <Box
                      sx={{
                        height: '4px',
                        background: '#1f2937',
                        borderRadius: '2px',
                        mt: 3,
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        sx={{
                          height: '100%',
                          background: stat.gradient,
                          width: 0,
                          transition: 'width 1s ease',
                          '&:hover': {
                            width: '100%',
                          },
                        }}
                      />
                </Box>
                  </StatCard>
                </Fade>
            </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section>
        <Container maxWidth="md">
          <Fade in timeout={1000}>
            <GlassCard sx={{ textAlign: 'center', p: 6 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                Let's{' '}
                <Box component="span" sx={{ background: 'linear-gradient(45deg, #00D9FF, #A855F7)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Connect
    </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '1.25rem',
                  mb: 4,
                }}
              >
                Have a project in mind or want to collaborate? I'd love to hear from you!
              </Typography>

              <PrimaryButton
                size="large"
                startIcon={<MailIcon />}
                onClick={() => navigate('/Contact')}
                sx={{ px: 6, py: 2, fontSize: '1.25rem' }}
              >
                Get In Touch
              </PrimaryButton>
            </GlassCard>
          </Fade>
        </Container>
      </Section>
    </HomeContainer>
  );
};

export default ModernPortfolioHome;
