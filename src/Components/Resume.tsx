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
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const ResumeContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: theme.spacing(10, 0),
  background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
}));

const PdfPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'rgba(26, 26, 26, 0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  border: '1px solid rgba(0, 217, 255, 0.1)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  borderRadius: '12px',
  fontWeight: 600,
  fontSize: '1.1rem',
  textTransform: 'none',
  background: 'linear-gradient(45deg, #00D9FF, #0099CC)',
  color: '#fff',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(45deg, #0099CC, #00D9FF)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 20px rgba(0, 217, 255, 0.4)',
  },
}));

const Resume: React.FC = () => {
  const [wid, setWid] = useState<number>(window.innerWidth);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
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
      <Container maxWidth="md">
        <Fade in timeout={1000}>
          <Box>
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 4,
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
                Resume
              </Box>
            </Typography>

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
    </ResumeContainer>
  );
};

export default Resume;