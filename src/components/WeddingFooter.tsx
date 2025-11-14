import { Box, Typography, Stack, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const WeddingFooter = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100vw',
        backgroundColor: '#000',
        color: '#fff',
        padding: { xs: '3rem 2rem', sm: '4rem 3rem', md: '5rem 4rem' },
        marginTop: '4rem',
        boxSizing: 'border-box',
      }}
    >
      <Stack
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        {/* Main Message */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 300,
            letterSpacing: '0.1em',
            textAlign: 'center',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            lineHeight: 1.4,
          }}
        >
          Let's Capture Your Story
        </Typography>

        {/* Subtext */}
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            fontSize: { xs: '1rem', sm: '1.1rem' },
            lineHeight: 1.8,
            color: 'rgba(255, 255, 255, 0.85)',
            maxWidth: '700px',
            fontWeight: 300,
          }}
        >
          Every wedding is a unique love story waiting to be told.
          I'd be honored to document your special day and create memories
          that will last a lifetime.
        </Typography>

        {/* Contact Section */}
        <Stack
          spacing={2}
          alignItems="center"
          sx={{
            marginTop: '2rem',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              letterSpacing: '0.08em',
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
            }}
          >
            GET IN TOUCH
          </Typography>

          <Link
            href="mailto:athornton.media@gmail.com"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: '#fff',
              textDecoration: 'none',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              transition: 'all 0.3s ease',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            <EmailIcon sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem' } }} />
            <Typography
              sx={{
                fontSize: { xs: '1rem', sm: '1.1rem' },
                fontWeight: 300,
              }}
            >
              athornton.media@gmail.com
            </Typography>
          </Link>
        </Stack>

        {/* Divider */}
        <Box
          sx={{
            width: '100%',
            height: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            marginTop: '3rem',
          }}
        />
      </Stack>
    </Box>
  );
};

export default WeddingFooter;
