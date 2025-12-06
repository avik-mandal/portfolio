import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { 
  Box, 
  Container, 
  Typography, 
  IconButton, 
  Divider,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
  borderTop: '1px solid rgba(0, 217, 255, 0.1)',
  padding: theme.spacing(4, 0),
  marginTop: 'auto',
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: '#fff',
  backgroundColor: 'rgba(0, 217, 255, 0.1)',
  border: '1px solid rgba(0, 217, 255, 0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(0, 217, 255, 0.2)',
    border: '1px solid rgba(0, 217, 255, 0.5)',
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 16px rgba(0, 217, 255, 0.3)',
  },
}));

const Footer: React.FC = () => {
  return (
    <Box component="footer">
      <FooterContainer>
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center">
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600,
              background: 'linear-gradient(45deg, #00D9FF, #FF006E)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Developed by Avik Mandal
          </Typography>

          <Stack 
            direction="row" 
            spacing={2} 
            sx={{ my: 2 }}
          >
            <Box component="a" href="https://github.com/avik-mandal" target="_blank" rel="noreferrer" sx={{ textDecoration: 'none' }}>
              <SocialButton aria-label="GitHub">
                <FaGithub size={24} />
              </SocialButton>
            </Box>

            <Box component="a" href="https://www.linkedin.com/in/avik-mandal-a901b7294" target="_blank" rel="noreferrer" sx={{ textDecoration: 'none' }}>
              <SocialButton aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </SocialButton>
            </Box>

            <Box component="a" href="mailto:avikmandal2022@gmail.com" target="_blank" rel="noreferrer" sx={{ textDecoration: 'none' }}>
              <SocialButton aria-label="Email">
                <GrMail size={22} />
              </SocialButton>
            </Box>
          </Stack>

          <Divider 
            sx={{ 
              width: '100%', 
              maxWidth: 300,
              backgroundColor: 'rgba(0, 217, 255, 0.1)' 
            }} 
          />

          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.6)',
              textAlign: 'center'
            }}
          >
            Copyright &copy; 2024 AM. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </FooterContainer>
    </Box>
  );
};

export default Footer;