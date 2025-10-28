import { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import { Stack, Tooltip } from '@mui/material';


export interface PortfolioHeaderProps {
    backgroundColor: string;
    showInstagram?: boolean;
    showLinkedIn?: boolean;
    showEmail?: boolean;
}

function PortfolioHeader({
    backgroundColor,
    showInstagram = true,
    showLinkedIn = true,
    showEmail = true
}: PortfolioHeaderProps) {

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
            <Stack direction={"column"} alignItems={"center"} justifyContent={"center"}>
                {showInstagram && (
                    <Tooltip title="Instagram" placement="right" arrow>
                        <IconButton
                            size="large"
                            href="https://www.instagram.com/alexvthornton/"
                            target="_blank"
                            sx={{ color: backgroundColor === 'black' ? 'white' : 'black' }}
                        >
                            <InstagramIcon />
                        </IconButton>
                    </Tooltip>
                )}
                {showLinkedIn && (
                    <Tooltip title="LinkedIn" placement="right" arrow>
                        <IconButton
                            size="large"
                            href="https://www.linkedin.com/in/alex-thornton-431b69210/"
                            target="_blank"
                            sx={{ color: backgroundColor === 'black' ? 'white' : 'black' }}

                        >
                            <LinkedInIcon />
                        </IconButton>
                    </Tooltip>
                )}
                {showEmail && (
                    <Tooltip title="Email" placement="right" arrow>
                        <IconButton
                            size="large"
                            href="mailto:athornton.media@gmail.com"
                            sx={{ color: backgroundColor === 'black' ? 'white' : 'black' }}

                        >
                            <MailIcon />
                        </IconButton>
                    </Tooltip>
                )}
            </Stack>
        </Box>
    );
}

export default PortfolioHeader;