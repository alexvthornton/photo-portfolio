import { useEffect, useState } from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import { WeddingCouple } from '../data/weddingData';

interface WeddingSectionProps {
  wedding: WeddingCouple;
}

const WeddingSection = ({ wedding }: WeddingSectionProps) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  useEffect(() => {
    setActiveVideoIndex(0);
  }, [wedding.videoIds]);

  const handleThumbnailClick = (index: number) => {
    setActiveVideoIndex(index);
  };

  const showThumbnails = wedding.videoIds.length > 1;

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
            letterSpacing: '0.05em',
            textAlign: 'center',
            marginBottom: '1.5rem',
            fontSize: 'clamp(1rem, 4vw, 1.75rem)',
            color: 'text.primary',
            whiteSpace: 'nowrap',
          }}
        >
          {wedding.coupleNames}
        </Typography>

        {/* Video Display */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            flex: 1,
            minHeight: 0,
            overflow: 'hidden',
            borderRadius: '4px',
            marginBottom: { xs: showThumbnails ? '1rem' : 0, sm: 0 },
          }}
        >
          <iframe
            key={`${wedding.id}-${wedding.videoIds[activeVideoIndex]}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '4px',
            }}
            src={`https://www.youtube.com/embed/${wedding.videoIds[activeVideoIndex]}?playsinline=1&rel=0&modestbranding=1&feature=oembed`}
            title={`${wedding.coupleNames} - Wedding video ${activeVideoIndex + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>

        {/* Video Thumbnails (Mobile - Below Video) */}
        {showThumbnails && (
          <Box
            sx={{
              display: { xs: 'flex', sm: 'none' },
              gap: '0.75rem',
              marginTop: '1rem',
              overflowX: 'auto',
              paddingBottom: '0.5rem',
            }}
          >
            {wedding.videoIds.map((videoId, index) => (
              <Box
                key={index}
                onClick={() => handleThumbnailClick(index)}
                sx={{
                  minWidth: '120px',
                  width: '120px',
                  height: '68px',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: index === activeVideoIndex ? '3px solid #000' : '3px solid transparent',
                  opacity: index === activeVideoIndex ? 1 : 0.6,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    opacity: 1,
                    transform: 'scale(1.05)',
                  },
                  position: 'relative',
                  flexShrink: 0,
                }}
              >
                <img
                  src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                  alt={`Video ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            ))}
          </Box>
        )}
      </Box>

      {/* Details Section (Right on desktop) */}
      <Box
        sx={{
          flex: { xs: '0 0 auto', sm: '0 0 40%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          marginTop: { xs: '1.5rem', sm: 0 },
          minWidth: 0,
          overflow: 'hidden',
          gap: '2rem',
        }}
      >
        {/* Show title on tablet/desktop only */}
        <Typography
          variant="h3"
          sx={{
            display: { xs: 'none', sm: 'block' },
            fontWeight: 300,
            letterSpacing: '0.05em',
            fontSize: 'clamp(1.5rem, 3vw, 3rem)',
            color: 'text.primary',
            whiteSpace: 'nowrap',
          }}
        >
          {wedding.coupleNames}
        </Typography>

        {/* Thumbnails and Coverage Details Side by Side */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: '1.5rem',
            alignItems: { xs: 'stretch', sm: 'flex-start' },
          }}
        >
          {/* Video Thumbnails (Desktop - In Details Section) */}
          {showThumbnails && (
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                flexDirection: 'column',
                gap: '0.5rem',
                flexShrink: 0,
                padding: '5px', // Add padding to prevent clipping
              }}
            >
              {wedding.videoIds.map((videoId, index) => (
                <Box
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  sx={{
                    width: { sm: '40px', md: '50px', lg: '70px' },
                    height: { sm: '40px', md: '50px', lg: '70px' },
                    borderRadius: { sm: '8px', lg: '12px' },
                    overflow: 'visible',
                    cursor: 'pointer',
                    border: index === activeVideoIndex ? '3px solid #000' : '3px solid rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      border: '3px solid #000',
                      zIndex: 10,
                    },
                    position: 'relative',
                    flexShrink: 0,
                    backgroundImage: `url(https://img.youtube.com/vi/${videoId}/mqdefault.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Overlay for better text visibility */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: index === activeVideoIndex ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      borderRadius: { sm: '8px', lg: '12px' },
                      overflow: 'hidden',
                    }}
                  >
                    {/* Video number */}
                    <Typography
                      sx={{
                        color: 'white',
                        fontSize: { sm: '1rem', md: '1.25rem', lg: '1.5rem' },
                        fontWeight: 700,
                        textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                      }}
                    >
                      {index + 1}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          )}

          {/* Coverage Details - Always Visible */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
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
                {wedding.coverage.hours} Hour{wedding.coverage.hours !== 1 ? 's' : ''} Coverage
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
    </Box>
  );
};

export default WeddingSection;
