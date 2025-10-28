import { Box, Stack } from "@mui/material";
import React from "react";
import CustomImage from "./Image";
import ImageModal from "./ImageModal";

export interface ImageType {
    src: string
    fullRes: string
    aspectRatio: number
    orientation: string
}

const gallery = Object.values(
    import.meta.glob('../assets/images/thumbnails/**/*.{png,jpg,jpeg,PNG,JPEG,JPG}', { eager: true, as: 'url' })
).map((image): Promise<ImageType> => {
    const img = new Image();
    img.src = image;

    return new Promise((resolve) => {
        img.onload = () => {
            resolve({
                src: image,
                fullRes: image.replace("thumbnails", "fullres"),
                aspectRatio: img.width / img.height,
                orientation: img.width / img.height > 1 ? "landscape" : "portrait"
            });
        };
    });
});

function PhotoGallery() {

    const [images, setImages] = React.useState<ImageType[]>([]);
    const [openImage, setImageOpen] = React.useState(false);
    const [imgIndex, setImgIndex] = React.useState(0);

    React.useEffect(() => {
        Promise.all(gallery).then((loadedImages) => {
            // const sorted = loadedImages.sort()
            setImages(loadedImages as []);
        });
        console.log(images)
    }, []);

    const handleImageClick = (src: string) => {
        setImgIndex(images.findIndex((image) => image.src === src))
        setImageOpen(true);
    }

    const renderRows = () => {
        const rows = [];

        let currentPortrait: ImageType[] = []
        let currentLandscape: ImageType[] = []
        let currentRow: ImageType[] = []
        let index = 0;
        while (index < images.length) {
            while (!validRowLayout(currentPortrait, currentLandscape) && index < images.length) {
                if (images[index].orientation === 'portrait') {
                    currentPortrait.push(images[index])
                }
                else {
                    currentLandscape.push(images[index])
                }
                currentRow.push(images[index])

                index++;
            }
            rows.push(
                <Stack spacing={1} direction={"row"} key={index} sx={{ width: "100%", display: "flex" }}>
                    {currentRow.map((image, index) => (

                        <Box onClick={() => (handleImageClick(image.src))} key={index} sx={{
                            flexGrow: image.aspectRatio,
                            flexBasis: `${image.aspectRatio * 100}%`,
                        }}
                        >
                            <CustomImage image={image} />
                        </Box>
                    ))}
                </Stack>
            );
            currentPortrait = []
            currentLandscape = []
            currentRow = []
        }

        return rows;
    };

    const validRowLayout = (portrait: ImageType[], landscape: ImageType[]) => {

        if (portrait.length === 3 && landscape.length === 0) {
            return true
        }
        else if (portrait.length === 1 && landscape.length === 2) {
            return true
        }
        else if (portrait.length === 0 && landscape.length === 2) {
            return true
        }
        else if (portrait.length === 2 && landscape.length === 1) {
            return true
        }
        else {
            return false;
        }
    }

    return (
        <Stack spacing={.5} >
            {renderRows()}
            <ImageModal images={images} open={openImage} setOpen={setImageOpen} imgIndex={imgIndex} setImgIndex={setImgIndex} />

        </Stack>
    );
}

export default PhotoGallery;
