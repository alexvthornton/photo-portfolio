import React, { useEffect, useState } from 'react'
import PhotoGallery from './components/PhotoGallery';
import PortfolioHeader from './components/PortfolioHeader';
import { Box, Grid, LinearProgress, Stack } from '@mui/material';
import VideoGallery from './components/VideoGallery';
import PhotoArrow from './components/PhotoArrow';

const App: React.FC = () => {
  const [background, setBackground] = useState("black");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > window.innerHeight * .1) {
      setBackground("white");
    } else {
      setBackground("black");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Stack
      direction={"row"}
      sx={{
        backgroundColor: background,
        transition: "background-color 1s ease",
        minHeight: "100vh", // Ensures there's enough height to scroll
      }}
    >
     { background === 'black' && <PhotoArrow />}
      <Box sx={{ width: "5vw" }}>
        <PortfolioHeader backgroundColor={background} />
      </Box>

      <Stack direction={"column"} alignItems={"center"} sx={{ width: "90vw" }}>
        <VideoGallery />
        <PhotoGallery />
      </Stack>
    </Stack>
  );
};

export default App;