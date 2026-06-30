'use client';

import { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/Share';
import TerminalIcon from '@mui/icons-material/Terminal';
import SendIcon from '@mui/icons-material/Send';
import type { Profile } from '@/types/portfolio';
import { Reveal } from './Reveal';
import { colors } from '@/theme/theme';

interface ContactProps {
  profile: Profile;
}

export function Contact({ profile }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        const details = data.details
          ? Object.values(data.details as Record<string, string[]>).flat().join(', ')
          : data.error;
        throw new Error(details || 'Failed to send message');
      }

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  const firstName = profile.name.split(' ')[0];

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 10, md: 15 } }}>
      <Container maxWidth="lg">
        <Reveal>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 4, md: 8 },
              textAlign: 'center',
              border: '1px solid #222',
              bgcolor: colors.surfaceContainerLowest,
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 256,
                height: 256,
                bgcolor: `${colors.primary}0D`,
                borderRadius: '50%',
                filter: 'blur(48px)',
                transform: 'translate(50%, -50%)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: 256,
                height: 256,
                bgcolor: `${colors.secondary}0D`,
                borderRadius: '50%',
                filter: 'blur(48px)',
                transform: 'translate(-50%, 50%)',
              }}
            />

            <Typography variant="h1" sx={{ mb: 3, fontSize: { xs: '2.5rem', md: '4rem' } }}>
              Let&apos;s connect,{' '}
              <Box component="span" sx={{ color: 'secondary.main' }}>
                {firstName}
              </Box>
              .
            </Typography>

            <Typography color="text.secondary" sx={{ maxWidth: 560, mx: 'auto', mb: 4 }}>
              Send a message directly — it&apos;s saved to the database and I&apos;ll get back to you soon.
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ maxWidth: 520, mx: 'auto', mb: 4, textAlign: 'left' }}
            >
              <Stack spacing={2}>
                <TextField
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  fullWidth
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      bgcolor: colors.surfaceContainerLow,
                      '& fieldset': { borderColor: colors.outlineVariant },
                    },
                  }}
                />
                <TextField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  fullWidth
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      bgcolor: colors.surfaceContainerLow,
                      '& fieldset': { borderColor: colors.outlineVariant },
                    },
                  }}
                />
                <TextField
                  label="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      bgcolor: colors.surfaceContainerLow,
                      '& fieldset': { borderColor: colors.outlineVariant },
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={status === 'loading'}
                  endIcon={<SendIcon />}
                  sx={{
                    alignSelf: 'center',
                    px: 5,
                    py: 1.5,
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: `0 0 20px ${colors.primary}4D`,
                    },
                  }}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>
              </Stack>
            </Box>

            {status === 'success' && (
              <Alert severity="success" sx={{ maxWidth: 520, mx: 'auto', mb: 3 }}>
                Message sent! I&apos;ll respond within 24 hours.
              </Alert>
            )}
            {status === 'error' && (
              <Alert severity="error" sx={{ maxWidth: 520, mx: 'auto', mb: 3 }}>
                {errorMsg}
              </Alert>
            )}

            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
              {[
                { icon: EmailIcon, href: `mailto:${profile.email}` },
                { icon: TerminalIcon, href: profile.github },
                { icon: ShareIcon, href: profile.linkedin },
              ].map(({ icon: Icon, href }, i) => (
                <IconButton
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ border: '1px solid #222', '&:hover': { bgcolor: `${colors.surfaceBright}80` } }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Stack>

            <Typography
              sx={{
                fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
                fontSize: '0.875rem',
                color: 'text.secondary',
                opacity: 0.5,
              }}
            >
              Typically responds within 24 hours.
            </Typography>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
