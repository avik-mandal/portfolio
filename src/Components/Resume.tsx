import React, { useState, useEffect } from 'react';
import { BsDownload } from "react-icons/bs";
import pdf from "../Resume.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import {
  Container,
  Box,
  Button,
  Paper,
  Typography,
  Fade,
  CircularProgress
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// Animations
const pulseGlow = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
`;

const ResumeContainer = styled(Box)({
  minHeight: '100vh',
  background: '#000000',
  color: '#ffffff',
  overflow: 'hidden',
  position: 'relative',
  py: 10,
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

const PdfPaper = styled(Paper)({
  padding: '24px',
  background: 'rgba(26, 26, 46, 0.4)',
  backdropFilter: 'blur(20px)',
  borderRadius: '16px',
  border: '1px solid rgba(0, 217, 255, 0.1)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '32px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    border: '1px solid rgba(0, 217, 255, 0.3)',
    boxShadow: '0 12px 40px rgba(0, 217, 255, 0.2)',
  }
});

const DownloadButton = styled(Button)({
  padding: '12px 32px',
  borderRadius: '12px',
  fontWeight: 600,
  fontSize: '1.1rem',
  textTransform: 'none',
  background: 'linear-gradient(135deg, #00D9FF 0%, #0066FF 100%)',
  color: '#fff',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, #0066FF 0%, #00D9FF 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 20px rgba(0, 217, 255, 0.4)',
  },
});

const GradientText = styled(Typography)({
  background: 'linear-gradient(45deg, #00D9FF, #0066FF, #A855F7)',
  backgroundSize: '200% 200%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const Resume: React.FC = () => {
  const [wid, setWid] = useState<number>(window.innerWidth);
  const [loading, setLoading] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleResize = (): void => {
      setWid(window.innerWidth);
    };

    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scale = wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1;

  const onDocumentLoadSuccess = () => {
    setLoading(false);
  };

  return (
    <ResumeContainer>
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

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Container maxWidth="md">
          <Fade in={isVisible} timeout={1000}>
            <Box>
              <Box sx={{ textAlign: 'center', mb: 6 }}>
                <GradientText
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                  }}
                >
                  My Resume
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

              <PdfPaper elevation={3}>
                {loading && (
                  <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
                    <CircularProgress sx={{ color: '#00D9FF' }} size={60} />
                  </Box>
                )}
                <Document
                  file={pdf}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={
                    <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
                      <CircularProgress sx={{ color: '#00D9FF' }} size={60} />
                    </Box>
                  }
                >
                  <Page
                    pageNumber={1}
                    scale={scale}
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                  />
                </Document>
              </PdfPaper>

              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box component="a" href={pdf} download="Avik_Mandal_Resume" sx={{ textDecoration: 'none' }}>
                  <DownloadButton
                    startIcon={<DownloadIcon />}
                  >
                    Download CV
                  </DownloadButton>
                </Box>
              </Box>
            </Box>
          </Fade>
        </Container>
      </Box>
    </ResumeContainer>
  );
};

export default Resume;
