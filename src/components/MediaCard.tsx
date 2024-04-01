import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

type MediaCardProps = {
  data: {
    title: string;
    description: string;
    image: string;
  };
};

const MediaCard: React.FC<MediaCardProps> = ({ data }) => {
  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            component='img'
            sx={{ height: { xs: '250px', md: '140px' } }}
            image={data.image}
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {data.title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {data.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Link
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default MediaCard;
