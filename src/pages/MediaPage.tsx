import { useEffect, useState } from 'react';
import { Stack, Box } from '@mui/material';
import VideoGallery from '../components/VideoGallery';
import PhotoGallery from '../components/PhotoGallery';
import PortfolioHeader from '../components/PortfolioHeader';
import PhotoArrow from '../components/PhotoArrow';
import portolioVideo from '../assets/video/potfolio-video.webm'

function MediaPage() {
    const [background, setBackground] = useState("black");

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > window.innerHeight * .05) {
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
                minHeight: "100vh",
            }}
        >
            {background === 'black' && <PhotoArrow text="PHOTOS" />}
            <Box sx={{ width: "5vw" }}>
                <PortfolioHeader backgroundColor={background} />
            </Box>

            <Stack direction={"column"} alignItems={"center"} sx={{ width: "90vw" }}>
                <VideoGallery videoSrc={portolioVideo} />
                <PhotoGallery />
            </Stack>
        </Stack>
    );
}

export default MediaPage;
