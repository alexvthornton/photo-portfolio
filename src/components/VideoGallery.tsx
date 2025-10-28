import { useEffect, useState } from 'react'
import { Stack } from "@mui/material";

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
        }} alignItems={"center"} justifyContent={"center"}
        >
            <video
                loop
                autoPlay
                muted
                playsInline
                style={{
                    height: "85vh",
                    objectFit: 'cover',
                }}
            >
                <source src={videoSrc} type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </Stack>
    );
}

export default VideoGallery;
