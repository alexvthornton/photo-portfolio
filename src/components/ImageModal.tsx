import { Dialog, Stack, styled, IconButton } from '@mui/material'
import React, { useEffect } from 'react'
import { KeyboardArrowLeft, KeyboardArrowRight, Close } from '@mui/icons-material'
import { ImageType } from './PhotoGallery'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const StyledModal = styled(Dialog)(({ theme }) => ({
    width: "100vw",
    backdropFilter: 'blur(1px)', // Optional: adds a blur effect to the background

}))

export interface ModalInterface {
    images: ImageType[]
    open: boolean,
    setOpen: (open: boolean) => void
    imgIndex: number,
    setImgIndex: (idx: number) => void
}

function ImageModal({ images, open, setOpen, imgIndex, setImgIndex }: ModalInterface) {

    const handleNext = () => {
        setImgIndex(imgIndex + 1);
    };

    const handleBack = () => {
        setImgIndex(imgIndex - 1);
    };


    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {

    }, [])

    const imageElements = images.map((image, index) => (
        <LazyLoadImage
            key={index}
            src={image.src}
            effect="blur"
            style={{ height: "90vh", objectFit: 'cover' }}
        />
    ));

    return (
        <StyledModal
            open={open}
            fullScreen
            onClose={handleClose}
            PaperProps={{
                style: {
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    boxShadow: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: "center"
                },
            }}
        >
            <IconButton disableRipple color="success" size="small" onClick={handleClose}>
                <Close sx={{
                    width: '70px', height: '70px', position: 'fixed', top: 0, right: 0, margin: "1vw"
                }} />
            </IconButton>
            <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                sx={{
                    width: "100%",
                }}
            >
                <IconButton disableRipple color="success" size="small" onClick={handleBack} disabled={imgIndex === 0}>
                    <KeyboardArrowLeft sx={{ width: '100px', height: '100px' }} />
                </IconButton>
                {imageElements[imgIndex]}
                <IconButton disableRipple color="success" size="small" onClick={handleNext} disabled={imgIndex === images.length - 1}>
                    <KeyboardArrowRight sx={{ width: '100px', height: '100px' }} />
                </IconButton>
            </Stack>
        </StyledModal>
    )
}

export default ImageModal