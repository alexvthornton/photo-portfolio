import { Box } from '@mui/material';
import PricingSection from './PricingSection';
import WeddingSlideshow from './WeddingSlideshow';


const PricingWithSlideshow = () => {
  return (
    <Box
      sx={{
        // REMOVED: maxHeight. This must be removed so the content
        // of PricingSection can determine the height.
        width: '100%',
        marginTop: '2rem',

        // On desktop (md), become a 'relative' positioning context.
        position: { md: 'relative' },

        // On mobile (xs), use 'flex' for stacking.
        // On desktop (md), use 'block' (the default) so we can use
        // our absolute positioning trick.
        display: { xs: 'flex', md: 'block' },
        flexDirection: { xs: 'column' }, // This only applies on mobile now

        // Gap for mobile stacking. On desktop, we'll position manually.
        gap: { xs: '2rem', md: 0 },

        // REMOVED: alignItems. This was forcing equal height.
      }}
    >
      {/* Pricing Section - Sets the height on desktop */}
      <Box
        sx={{
          // This child is in-flow. On desktop, it sets the parent's height.
          width: { xs: '100%', md: '60%' },
          minWidth: 0,
          // 'flex' is only relevant for mobile, but '1' is fine.
          flex: { xs: '1', md: 'none' },
        }}
      >
        <PricingSection />
      </Box>

      {/* Slideshow - Matches height and scrolls */}
      <Box
        sx={{
          // On desktop (md), this is absolutely positioned.
          position: { xs: 'relative', md: 'absolute' },
          top: { md: 0 },

          // Position it after child 1 (60%) plus the 2rem gap.
          left: { md: 'calc(60% + 2rem)' },

          // Full width on mobile, remaining width (minus gap) on desktop.
          width: { xs: '100%', md: 'calc(40% - 2rem)' },

          // Use a fixed height on mobile (like your original idea).
          // On desktop, '100%' makes it match the parent's height
          // (which is set by PricingSection).
          height: { xs: '200px', md: '100%' },

          // Allow vertical scrolling if content is taller than the container.
          overflow: 'hidden', // Good practice to hide horizontal scroll
          minWidth: 0,
        }}
      >
        <WeddingSlideshow />
      </Box>
    </Box>
  );
};

export default PricingWithSlideshow;
