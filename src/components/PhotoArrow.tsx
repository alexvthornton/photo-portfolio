import { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { keyframes, Stack } from '@mui/material';
import { styled } from '@mui/system';

export interface PhotoArrowProps {
    text?: string;
}

function PhotoArrow({ text = "PHOTOS" }: PhotoArrowProps) {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 1000);  // Delay to trigger animation after component mounts
    }, []);

    const moveUpDown = keyframes`
    0% { transform: translateY(-100px); },
    100% { transform: translateY(100px); }
    `

    const StyledBox = styled(Box)(() => ({
        width: "5px",
        height: "75px",
        backgroundColor: '#aaa',
        animation: `${moveUpDown} 2s infinite`,
    }))


    return (
        <Stack
            sx={{
                position: 'fixed',
                left: '2vw',
                bottom: isVisible ? 0 : '-20vh',
                height: '100px',
                width: "50px",
                transition: 'bottom 1s ease-in-out',
            }}
            direction={"row"}
            justifyContent="start"
            alignItems="space between"
            spacing={1}

        >
            <Typography variant="body2" fontSize="12px" sx={{
                color: '#bbb',
                position: 'absolute',
                top: '20px',
                right: "30px",
                transform: "rotate(-90deg)"
            }}>
                {text}
            </Typography>
            <Box sx={{ height: '100px', width: '5px', overflow: "hidden", backgroundColor: "#222", borderRadius: "3px"}}>
                <StyledBox />
            </Box>
        </Stack>
    );
}

export default PhotoArrow;