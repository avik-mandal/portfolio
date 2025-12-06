// Typed.tsx
import React from 'react';
import Typewriter from 'typewriter-effect';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const TypedContainer = styled(Box)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 600,
  color: '#00D9FF',
  minHeight: '60px',
  display: 'flex',
  alignItems: 'center',
  
  '& .Typewriter': {
    display: 'inline',
  },
  
  '& .Typewriter__wrapper': {
    background: 'linear-gradient(45deg, #00D9FF, #FF006E)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 700,
  },
  
  '& .Typewriter__cursor': {
    color: '#00D9FF',
    animation: 'blink 1s infinite',
  },
  
  '@keyframes blink': {
    '0%, 100%': { opacity: 1 },
    '50%': { opacity: 0 },
  },
  
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
  
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
  },
}));

const Typed: React.FC = () => {
  return (
    <TypedContainer>
      <Typewriter
        options={{
          strings: [
            'Frontend Developer',
            'Designer',
            'Freelancer',
            'MERN Stack Developer',
            'Problem Solver'
          ],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </TypedContainer>
  );
};

export default Typed;
