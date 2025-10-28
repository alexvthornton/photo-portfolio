import { Box } from '@mui/material';

export interface YouTubeEmbedProps {
    videoId: string;
    title?: string;
}

function YouTubeEmbed({ videoId, title = "YouTube video player" }: YouTubeEmbedProps) {
    return (
        <Box
            sx={{
                position: 'relative',
                paddingBottom: '56.25%', // 16:9 aspect ratio
                height: 0,
                overflow: 'hidden',
                maxWidth: '100%',
                marginBottom: '2rem',
            }}
        >
            <iframe
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </Box>
    );
}

export default YouTubeEmbed;
