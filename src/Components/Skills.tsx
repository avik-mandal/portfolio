import React from 'react';
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiVercel } from "react-icons/si";
import { Box, Tooltip, Zoom } from '@mui/material';
import { styled } from '@mui/material/styles';

interface SkillsProps {
  skill: string;
}

const SkillBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '16px',
  background: 'rgba(26, 26, 26, 0.6)',
  backdropFilter: 'blur(10px)',
  border: '2px solid rgba(0, 217, 255, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '3rem',
  color: '#00D9FF',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(0, 217, 255, 0.1), rgba(255, 0, 110, 0.1))',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },

  '&:hover': {
    transform: 'translateY(-8px) scale(1.05)',
    border: '2px solid rgba(0, 217, 255, 0.5)',
    boxShadow: '0 12px 28px rgba(0, 217, 255, 0.3)',
    
    '&::before': {
      opacity: 1,
    },
  },

  '& svg': {
    position: 'relative',
    zIndex: 1,
    filter: 'drop-shadow(0 0 8px rgba(0, 217, 255, 0.5))',
  },
}));

const Skills: React.FC<SkillsProps> = ({ skill }) => {
  const icon: Record<string, React.ReactElement> = {
    'C++': <CgCPlusPlus />,
    'Postman': <SiPostman />,
    'React': <FaReact />,
    'Javascript': <DiJavascript1 />,
    'Node': <DiNodejs />,
    'Express': <SiExpress />,
    'MongoDb': <SiMongodb />,
    'Git': <FaGitAlt />,
    'Github': <FaGithub />,
    'Npm': <FaNpm />,
    'Figma': <FaFigma />,
    'Bootstrap': <FaBootstrap />,
    'Vercel': <SiVercel />
  };

  return (
    <Zoom in timeout={500}>
      <Tooltip 
        title={skill} 
        arrow 
        placement="top"
        TransitionComponent={Zoom}
        componentsProps={{
          tooltip: {
            sx: {
              backgroundColor: 'rgba(0, 217, 255, 0.9)',
              color: '#000',
              fontSize: '0.875rem',
              fontWeight: 600,
              padding: '8px 12px',
              borderRadius: '8px',
            },
          },
          arrow: {
            sx: {
              color: 'rgba(0, 217, 255, 0.9)',
            },
          },
        }}
      >
        <SkillBox>
          {icon[skill]}
        </SkillBox>
      </Tooltip>
    </Zoom>
  );
};

export default Skills;