import { useState } from 'react';
import { Box, IconButton, Stack } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import WeddingSection from './WeddingSection';
import { WeddingCouple } from '../data/weddingData';

interface WeddingSectionCarouselProps {
  weddings: WeddingCouple[];
}

const WeddingSectionCarousel = ({ weddings }: WeddingSectionCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((prev) =>
      prev === 0 ? weddings.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === weddings.length - 1 ? 0 : prev + 1
    );
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const showCarouselControls = weddings.length > 1;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        height: { xs: '90vh', sm: '60vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2rem',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Wedding Section Display */}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '100%',
            height: '100%',
            overflow: 'auto',
            boxSizing: 'border-box',
          }}
        >
          <WeddingSection wedding={weddings[activeIndex]} />
        </Box>
      </Box>

      {/* Navigation Buttons */}
      {showCarouselControls && (
        <>
          <IconButton
            onClick={handlePrevious}
            sx={{
              position: 'absolute',
              left: { xs: '0.5rem', sm: '1rem' },
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
              zIndex: 10,
            }}
            aria-label="Previous wedding"
          >
            <ChevronLeftIcon />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: { xs: '0.5rem', sm: '1rem' },
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
              zIndex: 10,
            }}
            aria-label="Next wedding"
          >
            <ChevronRightIcon />
          </IconButton>
        </>
      )}

      {/* Dot Indicators */}
      {showCarouselControls && (
        <Stack
          direction="row"
          spacing={1}
          sx={{
            position: 'absolute',
            bottom: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
          }}
        >
          {weddings.map((_, index) => (
            <Box
              key={index}
              onClick={() => handleDotClick(index)}
              sx={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: index === activeIndex ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.4)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.2)',
                },
              }}
            />
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default WeddingSectionCarousel;
