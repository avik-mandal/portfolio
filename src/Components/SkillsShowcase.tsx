import React from 'react';
import Skills from './Skills';
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  Fade,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';

const SkillsContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: theme.spacing(10, 0),
  background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
}));

const SkillCategory = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'rgba(26, 26, 26, 0.6)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  border: '1px solid rgba(0, 217, 255, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    border: '1px solid rgba(0, 217, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(0, 217, 255, 0.15)',
  }
}));

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Javascript', 'Bootstrap'],
  },
  {
    title: 'Backend',
    skills: ['Node', 'Express', 'MongoDb'],
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'Github', 'Npm', 'Postman', 'Figma', 'Vercel'],
  },
];

const SkillsShowcase: React.FC = () => {
  return (
    <SkillsContainer>
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
                Skills
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
              Technologies and tools I work with to build amazing digital experiences.
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            // @ts-ignore
            <Grid item xs={12} md={4} key={index}>
              <Fade in timeout={1200 + index * 200}>
                <SkillCategory elevation={3}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      mb: 3,
                      textAlign: 'center',
                      background: 'linear-gradient(45deg, #00D9FF, #FF006E)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {category.title}
                  </Typography>
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                      gap: 2,
                    }}
                  >
                    {category.skills.map((skill) => (
                      <Skills key={skill} skill={skill} />
                    ))}
                  </Box>
                </SkillCategory>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SkillsContainer>
  );
};

export default SkillsShowcase;

