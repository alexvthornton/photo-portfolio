import { Box } from '@mui/material';
import React, { ReactEventHandler, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CustomImage = ({ image }: any) => {

    return (
        <LazyLoadImage
            alt={image.alt}
            src={image.src}
            effect="blur"
            style={{ width: "100%", objectFit: 'cover' }}
            wrapperProps={{
                // If you need to, you can tweak the effect transition using the wrapper style.
                style: { transitionDelay: "10s" },
            }}
        />)
}

export default CustomImage;


/*

interface ImageType {
    src: string
    aspectRatio: number
    orientation: string
    averageColor: string;
}

const gallery = Object.values(
    import.meta.glob('../assets/images/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' })
).map((image): Promise<ImageType> => {
    const img = new Image();
    img.src = image;

    return new Promise((resolve) => {
        img.onload = () => {
            const fac = new FastAverageColor();
            const averageColor = fac.getColor(img).hex;

            resolve({
                src: image,
                aspectRatio: img.width / img.height,
                orientation: img.width / img.height > 1 ? "landscape" : "portrait",
                averageColor,
            });
        };
    });
});

function PhotoGallery() {

    const [images, setImages] = React.useState<ImageType[]>([]);

    React.useEffect(() => {
        Promise.all(gallery).then((loadedImages) => {
            const sortedImages = (loadedImages as ImageType[]).sort((a, b) => {
                return parseInt(a.averageColor.replace('#', ''), 16) - parseInt(b.averageColor.replace('#', ''), 16);
            });
            setImages(sortedImages);
        });
    }, []);
*/