// CarouselCard.tsx
import * as React from 'react';
import { Card, CardMedia, CardContent, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// old card component, may still be able to be used w/ EmblaCarousel.tsx

interface CarouselCardProps {
  imageUrl: string;
  text: string;
  buttonText: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ imageUrl, text, buttonText }) => {
  const theme = useTheme();

  return (
    <Card sx={{ backgroundColor: theme.palette.background.default }}>
      <CardMedia component="img" image={imageUrl} alt={text} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">{text}</Typography>
        <Button variant="contained" color="info">{buttonText}</Button>
      </CardContent>
    </Card>
  );
}

export default CarouselCard;
