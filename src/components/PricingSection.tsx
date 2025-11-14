import { Box, Typography, Grid } from '@mui/material';

const PricingSection = () => {
  const basePackages = [
    { hours: 4, price: 1300 },
    { hours: 6, price: 1800 },
    { hours: 8, price: 2200 },
  ];

  const addOns = [
    { name: 'Drone', price: 250 },
    { name: 'Teaser', price: 250 },
    { name: 'Full Ceremony', price: 400 },
    { name: 'Full Speeches', price: 300 },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        maxWidth: '1200px',
        padding: { xs: '1.5rem 0', sm: '2rem 0', md: '2.5rem 0' },
        backgroundColor: '#f5f5f5',
        border: '1px solid rgba(0, 0, 0, 0.12)',
        borderRadius: '4px',
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 300,
          letterSpacing: '0.1em',
          textAlign: 'center',
          marginBottom: '3rem',
          fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
          color: 'text.primary'
        }}
      >
        Pricing
      </Typography>

      {/* Base Packages */}
      <Box sx={{
        padding: { xs: '0 1rem', sm: '0 1.5rem', md: '0 5rem' },
      }}>

        <Box sx={{ marginBottom: '3rem' }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 500,
              letterSpacing: '0.05em',
              marginBottom: '1.5rem',
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
            }}
          >
            Base Packages
          </Typography>
          <Grid container spacing={3}>
            {basePackages.map((pkg) => (
              <Grid item xs={12} sm={4} key={pkg.hours}>
                <Box
                  sx={{
                    padding: '1.5rem',
                    backgroundColor: 'white',
                    borderRadius: '4px',
                    border: '1px solid rgba(0, 0, 0, 0.12)',
                    textAlign: 'center',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 600,
                      marginBottom: '0.5rem',
                      // color: 'primary.main',
                    }}
                  >
                    {pkg.hours} Hours
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 400,
                      color: 'text.primary',
                    }}
                  >
                    ${pkg.price.toLocaleString()}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Add-Ons */}
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 500,
              letterSpacing: '0.05em',
              marginBottom: '1.5rem',
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
            }}
          >
            Add-Ons
          </Typography>
          <Grid container spacing={2}>
            {addOns.map((addon) => (
              <Grid item xs={12} sm={6} key={addon.name}>
                <Box
                  sx={{
                    padding: '1rem 1.5rem',
                    backgroundColor: 'white',
                    borderRadius: '4px',
                    border: '1px solid rgba(0, 0, 0, 0.12)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: '0.95rem', sm: '1rem' },
                    }}
                  >
                    {addon.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: '0.95rem', sm: '1rem' },
                    }}
                  >
                    +${addon.price}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default PricingSection;
