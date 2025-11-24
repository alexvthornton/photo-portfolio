import { useEffect, useRef } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';

// Import all wedding screenshots using Vite's glob import
const weddingImageModules = import.meta.glob('../assets/images/wedding-thumbnails-2/*.{png,jpg,jpeg,PNG,JPEG,JPG}', { eager: true, as: 'url' });

// Extract the URLs from the imported modules and sort them
const weddingImages = Object.values(weddingImageModules).sort();

const WeddingSlideshow = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    console.log("break point", isXsScreen)
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const scroll = () => {
      scrollAmount += scrollSpeed;

      if (isXsScreen) {
        // Horizontal scroll for xs screens
        container.scrollLeft = scrollAmount;

        // Reset scroll when we've scrolled through all images
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
      } else {
        // Vertical scroll for larger screens
        container.scrollTop = scrollAmount;

        // Reset scroll when we've scrolled through all images
        if (scrollAmount >= container.scrollHeight / 2) {
          scrollAmount = 0;
        }
      }

      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isXsScreen]);

  // Duplicate images for infinite scroll effect
  const duplicatedImages = [...weddingImages, ...weddingImages];

  return (
    <Box
      ref={scrollContainerRef}
      sx={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: { xs: 'row', md: 'column' },
        gap: '1rem',
      }}
    >
      {duplicatedImages.map((src, index) => (
        <Box
          key={index}
          sx={{
            width: { xs: '80vw', md: '100%' },
            minHeight: { xs: '100%', md: '200px' },
            borderRadius: '4px',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          <img
            src={src}
            alt={`Wedding screenshot ${(index % weddingImages.length) + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default WeddingSlideshow;
