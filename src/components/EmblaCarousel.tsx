import  useEmblaCarousel  from 'embla-carousel-react';
import '../index.css';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';


const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel();

  // Array of JSON data for card contents
  const cardData = [
    {
      id: 1,
      thumbnail: 'https://photos.smugmug.com/Burdett-Family/n-ftTZgq/Ts-ranch-8-24-22/i-TFfHwZg/0/c104d3b4/X2/T%27s%20ranch%208-24-22-11-X2.jpg',
      title: 'Slide 1',
      description: 'Description for Slide 1',
    },
    {
      id: 2,
      thumbnail: 'https://photos.smugmug.com/Burdett-Family/n-ftTZgq/Ts-ranch-8-24-22/i-TFfHwZg/0/c104d3b4/X2/T%27s%20ranch%208-24-22-11-X2.jpg',
      title: 'Slide 2',
      description: 'Description for Slide 2',
    },
    {
      id: 3,
      thumbnail: 'https://photos.smugmug.com/Burdett-Family/n-ftTZgq/Ts-ranch-8-24-22/i-TFfHwZg/0/c104d3b4/X2/T%27s%20ranch%208-24-22-11-X2.jpg',
      title: 'Slide 3',
      description: 'Description for Slide 3',
    },
  ];

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {cardData.map((card) => (
          <Card key={card.id} className="embla__slide">
            <CardMedia component="img" height="140" src={card.thumbnail} alt={`Slide ${card.id} Thumbnail`} />
            <CardContent>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
              <Button variant="contained">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
