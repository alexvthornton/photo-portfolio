import React from 'react';
import PhotoGallery from './components/PhotoGallery';
import PortfolioHeader from './components/PortfolioHeader';
import { Box } from '@mui/material';

const App: React.FC = () => {
  return (
    <Box>
      <PortfolioHeader />
      <PhotoGallery />
    </Box >
  );
};

export default App;