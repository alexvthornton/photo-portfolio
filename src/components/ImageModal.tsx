import { Stack, styled, IconButton, Modal } from '@mui/material'
import { KeyboardArrowLeft, KeyboardArrowRight, Close } from '@mui/icons-material'
import { ImageType } from './PhotoGallery'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const StyledModal = styled(Modal)(() => ({
    backdropFilter: 'blur(3px)',
    '& .MuiBackdrop-root': {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    }
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
        console.log(images[imgIndex])
        setImgIndex(imgIndex + 1);
    };

    const handleBack = () => {
        setImgIndex(imgIndex - 1);
    };


    const handleClose = () => {
        setOpen(false);
    };


    const imageElements = images.map((image, index) => (
        <LazyLoadImage
            key={index}
            src={image.fullRes}
            effect="blur"
            style={{ height: "90vh", objectFit: 'cover' }}
        />
    ));

    return (
        <StyledModal
            open={open}
            onClose={handleClose}
            onKeyDown={(e) => {
                if (e.key === 'ArrowRight' && imgIndex < images.length - 1) {
                    handleNext();
                } else if (e.key === 'ArrowLeft' && imgIndex > 0) {
                    handleBack();
                }
            }}
            sx={{
                border: "0px solid red",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Stack sx={{ position: 'relative', outline: 'none' }}>
                <IconButton disableRipple color="success" size="small" onClick={handleClose}>
                    <Close sx={{
                        width: '70px', height: '70px', position: 'fixed', top: 0, right: 0, margin: "1vw"
                    }} />
                </IconButton>
                <IconButton disableRipple color="success" size="small" onClick={handleBack} disabled={imgIndex === 0}>
                    <KeyboardArrowLeft sx={{ width: '70px', height: '70px', position: 'fixed', top: "50%", left: 0, margin: "1vw" }} />
                </IconButton>
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    onClick={(e) => e.stopPropagation()}
                >
                    {imageElements[imgIndex]}
                </Stack>
                <IconButton disableRipple color="success" size="small" onClick={handleNext} disabled={imgIndex === images.length - 1}>
                    <KeyboardArrowRight sx={{ width: '70px', height: '70px', position: 'fixed', top: "50%", right: 0, margin: "1vw" }} />
                </IconButton>
            </Stack>
        </StyledModal>
    )
}

export default ImageModal