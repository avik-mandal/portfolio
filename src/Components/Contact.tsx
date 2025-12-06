import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Fade,
  Snackbar,
  Alert,
  Stack,
  CircularProgress
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { emailjsConfig } from '../config/emailjs.config';

const ContactContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: theme.spacing(10, 0),
  background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
  position: 'relative',
}));

const ContactPaper = styled(Paper)(({ theme }) => ({
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

const InfoCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'rgba(26, 26, 26, 0.6)',
  backdropFilter: 'blur(10px)',
  borderRadius: '12px',
  border: '1px solid rgba(0, 217, 255, 0.1)',
  height: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    border: '1px solid rgba(0, 217, 255, 0.3)',
    boxShadow: '0 8px 24px rgba(0, 217, 255, 0.2)',
  }
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  borderRadius: '12px',
  fontWeight: 600,
  fontSize: '1rem',
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

const SocialLink = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 50,
  height: 50,
  borderRadius: '50%',
  backgroundColor: 'rgba(0, 217, 255, 0.1)',
  border: '1px solid rgba(0, 217, 255, 0.3)',
  color: '#00D9FF',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(0, 217, 255, 0.2)',
    border: '1px solid rgba(0, 217, 255, 0.5)',
    transform: 'translateY(-4px) scale(1.1)',
    boxShadow: '0 8px 16px rgba(0, 217, 255, 0.3)',
  },
}));

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setError('Please fill in all fields');
      setOpen(true);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      setOpen(true);
      return;
    }

    // Check if EmailJS is configured
    if (emailjsConfig.publicKey === 'YOUR_PUBLIC_KEY' || 
        emailjsConfig.serviceId === 'YOUR_SERVICE_ID' || 
        emailjsConfig.templateId === 'YOUR_TEMPLATE_ID') {
      // Fallback to mailto if EmailJS is not configured
      const mailtoLink = `mailto:avikmandal2022@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      setSuccessMessage('Opening your email client...');
      setOpen(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      return;
    }

    setLoading(true);

    try {
      // Initialize EmailJS
      emailjs.init(emailjsConfig.publicKey);

      // Send email using EmailJS
      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'avikmandal2022@gmail.com',
        }
      );

      if (result.text === 'OK') {
        setSuccessMessage('Message sent successfully! I\'ll get back to you soon.');
        setOpen(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to send message. Please try again or email me directly at avikmandal2022@gmail.com');
      setOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setError('');
    setSuccessMessage('');
  };

  return (
    <ContactContainer>
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Get In{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(45deg, #00D9FF, #FF006E)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Touch
            </Box>
          </Typography>
        </Fade>

        <Typography
          variant="body1"
          align="center"
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            mb: 6,
            fontSize: '1.1rem',
          }}
        >
          Have a project in mind? Let's work together!
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Form */}
          {/* @ts-ignore */}
          <Grid item xs={12} md={8}>
            <Fade in timeout={1200}>
              <ContactPaper elevation={3}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    background: 'linear-gradient(45deg, #00D9FF, #FF006E)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Send me a message
                </Typography>

                <form ref={formRef} onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <Grid container spacing={2}>
                      {/* @ts-ignore */}
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          variant="outlined"
                          required
                          disabled={loading}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: '#fff',
                              '& fieldset': {
                                borderColor: 'rgba(0, 217, 255, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(0, 217, 255, 0.5)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#00D9FF',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                              '&.Mui-focused': {
                                color: '#00D9FF',
                              },
                            },
                          }}
                        />
                      </Grid>
                      {/* @ts-ignore */}
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          variant="outlined"
                          required
                          disabled={loading}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: '#fff',
                              '& fieldset': {
                                borderColor: 'rgba(0, 217, 255, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(0, 217, 255, 0.5)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#00D9FF',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                              '&.Mui-focused': {
                                color: '#00D9FF',
                              },
                            },
                          }}
                        />
                      </Grid>
                    </Grid>

                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      disabled={loading}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          '& fieldset': {
                            borderColor: 'rgba(0, 217, 255, 0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(0, 217, 255, 0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#00D9FF',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255, 255, 255, 0.7)',
                          '&.Mui-focused': {
                            color: '#00D9FF',
                          },
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      multiline
                      rows={6}
                      variant="outlined"
                      required
                      disabled={loading}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          '& fieldset': {
                            borderColor: 'rgba(0, 217, 255, 0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(0, 217, 255, 0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#00D9FF',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255, 255, 255, 0.7)',
                          '&.Mui-focused': {
                            color: '#00D9FF',
                          },
                        },
                      }}
                    />

                    <SubmitButton
                      type="submit"
                      variant="contained"
                      startIcon={loading ? <CircularProgress size={20} sx={{ color: '#fff' }} /> : <SendIcon />}
                      fullWidth
                      disabled={loading}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </SubmitButton>
                  </Stack>
                </form>
              </ContactPaper>
            </Fade>
          </Grid>

          {/* Contact Info */}
          {/* @ts-ignore */}
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Fade in timeout={1400}>
                <InfoCard elevation={3}>
                  <Stack spacing={2} alignItems="center" textAlign="center">
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, #00D9FF, #0099CC)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 1,
                      }}
                    >
                      <EmailIcon sx={{ fontSize: 30, color: '#fff' }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#00D9FF' }}>
                      Email
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                      avikmandal2022@gmail.com
                    </Typography>
                  </Stack>
                </InfoCard>
              </Fade>

              <Fade in timeout={1600}>
                <InfoCard elevation={3}>
                  <Stack spacing={2} alignItems="center" textAlign="center">
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, #00D9FF, #0099CC)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 1,
                      }}
                    >
                      <LocationOnIcon sx={{ fontSize: 30, color: '#fff' }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#00D9FF' }}>
                      Location
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                      West Bengal, India
                    </Typography>
                  </Stack>
                </InfoCard>
              </Fade>

              <Fade in timeout={1800}>
                <InfoCard elevation={3}>
                  <Stack spacing={2} alignItems="center">
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#00D9FF', mb: 1 }}>
                      Follow Me
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      <Box component="a" href="https://github.com/avik-mandal" target="_blank" rel="noreferrer" sx={{ textDecoration: 'none' }}>
                        <SocialLink>
                          <FaGithub size={24} />
                        </SocialLink>
                      </Box>
                      <Box component="a" href="https://www.linkedin.com/in/avik-mandal-a901b7294" target="_blank" rel="noreferrer" sx={{ textDecoration: 'none' }}>
                        <SocialLink>
                          <FaLinkedin size={24} />
                        </SocialLink>
                      </Box>
                      <Box component="a" href="mailto:avikmandal2022@gmail.com" sx={{ textDecoration: 'none' }}>
                        <SocialLink>
                          <GrMail size={22} />
                        </SocialLink>
                      </Box>
                    </Stack>
                  </Stack>
                </InfoCard>
              </Fade>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleClose}
          severity={error ? 'error' : 'success'}
          sx={{
            backgroundColor: error ? 'rgba(255, 0, 110, 0.9)' : 'rgba(0, 217, 255, 0.9)',
            color: '#fff',
            '& .MuiAlert-icon': {
              color: '#fff',
            },
          }}
        >
          {error || successMessage || 'Message sent! I\'ll get back to you soon.'}
        </Alert>
      </Snackbar>
    </ContactContainer>
  );
};

export default Contact;

