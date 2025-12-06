// ProjectBox.tsx
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Zoom
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LaunchIcon from '@mui/icons-material/Launch';

interface ProjectBoxProps {
  projectPhoto: string;
  projectName: string;
}

interface ProjectDesc {
  [key: string]: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: 'rgba(26, 26, 26, 0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  border: '1px solid rgba(0, 217, 255, 0.1)',
  transition: 'all 0.3s ease',
  overflow: 'hidden',
  
  '&:hover': {
    transform: 'translateY(-8px)',
    border: '1px solid rgba(0, 217, 255, 0.3)',
    boxShadow: '0 12px 32px rgba(0, 217, 255, 0.2)',
    
    '& .project-image': {
      transform: 'scale(1.05)',
    },
  },
}));

const ProjectImage = styled(CardMedia)(({ theme }) => ({
  height: 240,
  transition: 'transform 0.3s ease',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.4) 100%)',
  },
}));

const ProjectButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  textTransform: 'none',
  fontWeight: 600,
  padding: theme.spacing(1, 2.5),
  transition: 'all 0.3s ease',
}));

const GithubButton = styled(ProjectButton)(({ theme }) => ({
  backgroundColor: 'rgba(0, 217, 255, 0.1)',
  color: '#00D9FF',
  border: '1px solid rgba(0, 217, 255, 0.3)',
  '&:hover': {
    backgroundColor: 'rgba(0, 217, 255, 0.2)',
    border: '1px solid rgba(0, 217, 255, 0.5)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 217, 255, 0.3)',
  },
}));

const DemoButton = styled(ProjectButton)(({ theme }) => ({
  background: 'linear-gradient(45deg, #00D9FF, #0099CC)',
  color: '#fff',
  '&:hover': {
    background: 'linear-gradient(45deg, #0099CC, #00D9FF)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 217, 255, 0.4)',
  },
}));

const ProjectBox: React.FC<ProjectBoxProps> = ({ projectPhoto, projectName }) => {
  const desc: ProjectDesc = {
    TindogDesc: "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    TindogGithub: "https://github.com/DevanshSahni/tindog",
    TindogWebsite: "https://devanshsahni.github.io/tindog/",

    RogFreeDesc: "A website that shows you over seven specialized yoga postures for specific diseases or health problems. This was a group project made in a team of two for a 36-hour-long online hackathon named Hackodisha 2.0.",
    RogFreeGithub: "https://github.com/DevanshSahni/Rog-Free",
    RogFreeWebsite: "https://devanshsahni.github.io/Rog-Free/",

    NewsletterDesc: "A newsletter signup site made using Mailchimp API where the signups can be monitored from the MailChimp account. This project was made to understand API integration, environment variables and vercel deployment.",
    NewsletterGithub: "",
    NewsletterWebsite: "https://newsletter-signup-teal.vercel.app/",

    PRACTODesc: "Procto Exam represents a pioneering solution for modernizing remote proctored examinations.",
    PRACTOGithub: "https://github.com/avik-mandal/PRACTO-FRONTEND",
    PRACTOWebsite: "https://practoexam.vercel.app/",
  };

  const githubUrl = desc[projectName + 'Github'];
  const websiteUrl = desc[projectName + 'Website'];
  const description = desc[projectName + 'Desc'];

  return (
    <Zoom in timeout={500}>
      <StyledCard elevation={3}>
        <ProjectImage
          className="project-image"
          image={projectPhoto}
          title={projectName}
        />
        
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography 
            variant="h5" 
            component="h3" 
            gutterBottom
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(45deg, #00D9FF, #FF006E)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            {projectName}
          </Typography>
          
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.7,
              fontSize: '0.95rem'
            }}
          >
            {description}
          </Typography>
        </CardContent>

        <CardActions sx={{ p: 2, pt: 0, gap: 1 }}>
          {githubUrl && (
            <Box component="a" href={githubUrl} target="_blank" rel="noreferrer" sx={{ textDecoration: 'none' }}>
              <GithubButton
                startIcon={<FaGithub />}
              >
                GitHub
              </GithubButton>
            </Box>
          )}
          
          <Box component="a" href={websiteUrl} target="_blank" rel="noreferrer" sx={{ textDecoration: 'none' }}>
            <DemoButton
              startIcon={<LaunchIcon />}
            >
              Live Demo
            </DemoButton>
          </Box>
        </CardActions>
      </StyledCard>
    </Zoom>
  );
};

export default ProjectBox;