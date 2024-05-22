import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import React from 'react';

interface CardProps {
    title: string;
    image: string;
    onClick?: () => void;
}

const CardComponent: React.FC<CardProps> = ({ title, image, onClick }) => {
    return (
        <Card sx={{ width: 300, height: 300, margin: 'auto', marginTop: 2, marginBottom: 2 }} onClick={onClick}>
            <CardMedia component="img" height="200" image={image} alt={title} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardComponent;
