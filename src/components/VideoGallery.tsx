import { useEffect, useState } from 'react'
import { Box, Stack } from "@mui/material";

export interface VideoGalleryProps {
    videoSrc: string;
}

function VideoGallery({ videoSrc }: VideoGalleryProps) {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100);  // Delay to trigger animation after component mounts
    }, []);

    return (
        <Stack sx={{
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            height: "100vh",
            bottom: isVisible ? 0 : '-20vh',
            transition: 'bottom 1s ease-in-out',
            marginBottom: "20px",
        }} alignItems={"center"} justifyContent={"center"}
        >
            <Box sx={{
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
            }}>
                <video
                    loop
                    autoPlay
                    muted
                    playsInline
                    style={{
                        width: '100%',
                        height: 'calc(100vh - 80px)',
                        marginTop: '40px',
                        objectFit: 'cover',
                    }}
                >
                    <source src={videoSrc} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
            </Box>
        </Stack>
    );
}

export default VideoGallery;
