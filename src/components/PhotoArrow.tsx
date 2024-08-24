import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import { LinearProgress, Stack } from '@mui/material';


function PhotoArrow() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 1000);  // Delay to trigger animation after component mounts
    }, []);

    return (
        <Stack
            sx={{
                position: 'fixed',
                left: '0',
                bottom: isVisible ? 0 : '-20vh',
                height: '10vh',
                width: "5vw",
                transition: 'bottom 1s ease-in-out',
                // border: "2px solid red"
            }}
            justifyContent="start"
            alignItems="space between"
            spacing={1}

        >
            <Typography variant="body2" fontSize="12px" sx={{
                color: '#bbb',
                position: "absolute",
                top: "-7vh",
                right: "-3vh"
            }}>
                PHOTOS
            </Typography>
            <LinearProgress
                color={"info"}
                sx={{
                    height: "2px",
                    width: "100%",
                    transform: 'rotate(90deg)', // Rotate to make it vertical
                }}
            />
        </Stack>
    );
}

export default PhotoArrow;