import { useEffect, useState } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import VideoGallery from '../components/VideoGallery';
import YouTubeEmbed from '../components/YouTubeEmbed';
import PortfolioHeader from '../components/PortfolioHeader';
import PhotoArrow from '../components/PhotoArrow';
import weddingVideo from '../assets/video/wedding-video.webm';

interface YouTubeVideo {
    id: string;
    title: string;
}

function WeddingPage() {
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

    // You can add your YouTube video IDs here
    const youtubeVideos: YouTubeVideo[] = [
        { id: 'HVCG9xnMEGU', title: 'Wedding Video 1' },
        { id: 'oDlXypGqj6Y', title: 'Wedding Video 3' },
        { id: 'O58W6HOANLQ', title: 'Wedding Video 2' },
    ];

    return (
        <Stack
            direction={"row"}
            sx={{
                backgroundColor: background,
                transition: "background-color 1s ease",
                minHeight: "100vh",
            }}
        >
            {background === 'black' && <PhotoArrow text="VIDEOS" />}
            <Box sx={{ width: "5vw" }}>
                <PortfolioHeader backgroundColor={background} showLinkedIn={false} />
            </Box>

            <Stack direction={"column"} alignItems={"center"} sx={{ width: "90vw" }}>
                <VideoGallery videoSrc={weddingVideo} />

                {/* YouTube Videos Section */}
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '1200px',
                        padding: '4rem 2rem',
                    }}
                >
                    {youtubeVideos.length > 0 ? (
                        <>
                            {youtubeVideos.map((video, index) => (
                                <YouTubeEmbed
                                    key={index}
                                    videoId={video.id}
                                    title={video.title}
                                />
                            ))}
                        </>
                    ) : (
                        <Typography
                            variant="h5"
                            sx={{
                                textAlign: 'center',
                                color: '#666',
                                fontStyle: 'italic'
                            }}
                        >
                            YouTube videos will appear here
                        </Typography>
                    )}
                </Box>
            </Stack>
        </Stack>
    );
}

export default WeddingPage;
