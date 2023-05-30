import React from 'react';
import { ThemeProvider, Card, CardContent, CardMedia, CardActions, Button, Grid, Typography } from '@mui/material';
import theme from '../theme/theme';

interface CardItem {
  id: number;
  title: string;
  content: string;
  imageUrl: string; // New field for the image URL
}

const cardItems: CardItem[] = [
  { id: 1, title: "Title 1", content: "Content 1", imageUrl: "https://source.unsplash.com/random/800x600?sig=1&35mm&flowers" },
  { id: 2, title: "Title 2", content: "Content 2", imageUrl: "https://source.unsplash.com/random/800x600?sig=2&35mm&flowers" },
  { id: 3, title: "Title 3", content: "Content 3", imageUrl: "https://source.unsplash.com/random/800x600?sig=3&35mm&flowers" },
  { id: 4, title: "Title 1", content: "Content 1", imageUrl: "https://source.unsplash.com/random/800x600?sig=1&35mm&flowers" },
  { id: 5, title: "Title 2", content: "Content 2", imageUrl: "https://source.unsplash.com/random/800x600?sig=2&35mm&flowers" },
  { id: 6, title: "Title 3", content: "Content 3", imageUrl: "https://source.unsplash.com/random/800x600?sig=3&35mm&flowers" },
  // Add more card items here with unique image URLs
];

const CardList: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} direction={{ xs: 'column', sm: 'row' }}>
        {cardItems.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={item.imageUrl} // Use the imageUrl from the item data
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2">
                  {item.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => console.log(`Button clicked on ${item.title}`)}>
                  Click Me
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
};

export default CardList;
