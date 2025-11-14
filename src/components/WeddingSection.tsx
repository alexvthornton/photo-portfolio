import { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { WeddingCouple } from '../data/weddingData';

interface WeddingSectionProps {
  wedding: WeddingCouple;
}

const WeddingSection = ({ wedding }: WeddingSectionProps) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const handlePrevious = () => {
    setActiveVideoIndex((prev) =>
      prev === 0 ? wedding.videoIds.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveVideoIndex((prev) =>
      prev === wedding.videoIds.length - 1 ? 0 : prev + 1
    );
  };

  const handleDotClick = (index: number) => {
    setActiveVideoIndex(index);
  };

  const showCarouselControls = wedding.videoIds.length > 1;

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 0, sm: '2rem' },
        padding: { xs: '1.5rem 1rem', sm: '2rem 1.5rem', lg: '2.5rem 3rem' },
        backgroundColor: '#f5f5f5',
        border: '1px solid rgba(0, 0, 0, 0.12)',
        borderRadius: '4px',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Video Section (Left on desktop) */}
      <Box
        sx={{
          flex: { xs: '1', sm: '0 0 60%' },
          display: 'flex',
          flexDirection: 'column',
          minHeight: 0,
          minWidth: 0,
          overflow: 'hidden',
        }}
      >
        {/* Show title on mobile only */}
        <Typography
          variant="h3"
          sx={{
            display: { xs: 'block', sm: 'none' },
            fontWeight: 300,
            letterSpacing: '0.1em',
            textAlign: 'center',
            marginBottom: '1.5rem',
            fontSize: '1.75rem',
            color: 'text.primary'
          }}
        >
          {wedding.coupleNames}
        </Typography>

        {/* Video Carousel */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            flex: 1,
            minHeight: 0,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Video Display */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              flex: 1,
              minHeight: 0,
              overflow: 'hidden',
              borderRadius: '4px',
              marginBottom: { xs: '1rem', sm: 0 },
            }}
          >
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '4px',
              }}
              src={`https://www.youtube.com/embed/${wedding.videoIds[activeVideoIndex]}`}
              title="Wedding video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>

          {/* Navigation Buttons */}
          {showCarouselControls && (
            <>
              <IconButton
                onClick={handlePrevious}
                sx={{
                  position: 'absolute',
                  left: '0.5rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  },
                  zIndex: 2,
                }}
                aria-label="Previous video"
              >
                <ChevronLeftIcon />
              </IconButton>

              <IconButton
                onClick={handleNext}
                sx={{
                  position: 'absolute',
                  right: '0.5rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  },
                  zIndex: 2,
                }}
                aria-label="Next video"
              >
                <ChevronRightIcon />
              </IconButton>
            </>
          )}

          {/* Dot Indicators */}
          {showCarouselControls && (
            <Box
              sx={{
                position: 'absolute',
                bottom: '1rem',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                justifyContent: 'center',
                gap: '0.5rem',
                zIndex: 2,
              }}
            >
              {wedding.videoIds.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => handleDotClick(index)}
                  sx={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: index === activeVideoIndex ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.4)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.2)',
                    },
                  }}
                />
              ))}
            </Box>
          )}
        </Box>
      </Box>

      {/* Details Section (Right on desktop) */}
      <Box
        sx={{
          flex: { xs: '0 0 auto', sm: '0 0 40%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: { xs: '1.5rem', sm: 0 },
          minWidth: 0,
          overflow: 'hidden',
        }}
      >
        {/* Show title on tablet/desktop only */}
        <Typography
          variant="h3"
          sx={{
            display: { xs: 'none', sm: 'block' },
            fontWeight: 300,
            letterSpacing: '0.1em',
            marginBottom: '2rem',
            fontSize: { sm: '2.5rem', lg: '3rem' },
            color: 'text.primary'
          }}
        >
          {wedding.coupleNames}
        </Typography>

        {/* Coverage Details - Always Visible */}
        <Box>
          <Typography
            sx={{
              fontWeight: 500,
              letterSpacing: '0.05em',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              marginBottom: '1rem',
            }}
          >
            Coverage Details
          </Typography>
          <Box>
            {/* Hours */}
            <Typography
              variant="body1"
              sx={{
                marginBottom: '1rem',
                fontWeight: 500,
                fontSize: { xs: '0.95rem', sm: '1rem' },
              }}
            >
              {wedding.coverage.hours} Hour{wedding.coverage.hours !== 1 ? 's' : ''} Video Coverage
            </Typography>

            {/* Features List */}
            <Box component="ul" sx={{ margin: 0, paddingLeft: '1.5rem' }}>
              {wedding.coverage.features.map((feature, index) => (
                <Typography
                  component="li"
                  key={index}
                  variant="body2"
                  sx={{
                    marginBottom: '0.5rem',
                    fontSize: { xs: '0.9rem', sm: '0.95rem' },
                    lineHeight: 1.6,
                  }}
                >
                  {feature}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WeddingSection;
