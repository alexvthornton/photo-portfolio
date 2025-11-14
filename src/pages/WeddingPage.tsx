import { useEffect, useState } from 'react';
import { Stack, Box } from '@mui/material';
import VideoGallery from '../components/VideoGallery';
import WeddingSectionCarousel from '../components/WeddingSectionCarousel';
import PricingWithSlideshow from '../components/PricingWithSlideshow';
import WeddingFooter from '../components/WeddingFooter';
import PortfolioHeader from '../components/PortfolioHeader';
import PhotoArrow from '../components/PhotoArrow';
import weddingVideo from '../assets/video/wedding-video.webm';
import { useTheme, useMediaQuery } from "@mui/material";
import { weddingData } from '../data/weddingData';

function WeddingPage() {
    const [background, setBackground] = useState("black");

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.only("xs"));

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
        <Box sx={{ overflowX: 'hidden', width: '100%' }}>
            <Stack
                direction={"row"}
                alignItems={"center"} justifyContent={"center"}
                sx={{
                    backgroundColor: background,
                    transition: "background-color 1s ease",
                    minHeight: "100vh",
                }}
            >
                {background === 'black' && <PhotoArrow text="VIDEOS" />}
                <Box>
                    <PortfolioHeader backgroundColor={background} showLinkedIn={false} />
                </Box>

                <Stack direction={"column"} alignItems={"center"} sx={{ width: isXs ? "75vw" : "85vw" }}>
                    <VideoGallery videoSrc={weddingVideo} />

                    {/* Wedding Sections Carousel */}
                    <Stack
                        sx={{
                            width: '100%',
                            // border: "2px solid red"
                        }}
                        alignItems={"center"} justifyContent={"center"}

                    >
                        <WeddingSectionCarousel weddings={weddingData} />

                        {/* Pricing Section with Slideshow */}
                        <PricingWithSlideshow />
                    </Stack>
                </Stack>
            </Stack>

            {/* Footer */}
            <WeddingFooter />
        </Box>
    );
}

export default WeddingPage;
