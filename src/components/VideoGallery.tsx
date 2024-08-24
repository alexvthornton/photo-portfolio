import React, { useEffect, useState } from 'react'
import { Stack } from "@mui/material";



function VideoGallery() {

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
                <source src="/src/assets/video/potfolio-video.m4v" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Stack>
    );
}

export default VideoGallery;
