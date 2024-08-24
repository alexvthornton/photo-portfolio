import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import { Stack } from '@mui/material';


export interface PortfolioHeaderProps {
    backgroundColor: string
}

function PortfolioHeader({ backgroundColor }: PortfolioHeaderProps) {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100);  // Delay to trigger animation after component mounts
    }, []);

    return (
        <Box sx={{
            height: "100vh",
            width: "5vw",
            position: 'fixed',
            top: 0,
            left: isVisible ? 0 : '-5vw',
            transition: 'left 1s ease-in-out',
            overScrollBehavior: "none",
        }}>
            <Stack direction={"column"} alignItems={"center"} justifyContent={"center"} sx={{

            }}
            >
                <IconButton
                    size="large"
                    href="https://www.instagram.com/alexvthornton/"
                    target="_blank"
                    sx={{ color: backgroundColor === 'black' ? 'white' : 'black' }}
                >
                    <InstagramIcon />
                </IconButton>
                <IconButton
                    size="large"
                    href="https://www.linkedin.com/in/alex-thornton-431b69210/"
                    target="_blank"
                    sx={{ color: backgroundColor === 'black' ? 'white' : 'black' }}

                >
                    <LinkedInIcon />
                </IconButton>
                <IconButton
                    size="large"
                    href="mailto:athornton.media@gmail.com"
                    sx={{ color: backgroundColor === 'black' ? 'white' : 'black' }}

                >
                    <MailIcon />
                </IconButton>
                <Typography variant="h6" sx={{
                    transform: "rotate(-90deg)",
                    color: backgroundColor === 'black' ? 'white' : 'black' 
                }}>
                </Typography>
            </Stack>
        </Box>
    );
}

export default PortfolioHeader;