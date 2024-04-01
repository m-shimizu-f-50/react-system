import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MediaCard from './MediaCard';

const ProductionList: React.FC = () => {
  const setMediaList = [
    {
      title: 'テスト1',
      description: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
      image: 'images/production/production-001.png',
    },
    {
      title: 'テスト2',
      description: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
      image: 'images/production/production-002.png',
    },
    {
      title: 'テスト3',
      description: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
      image: 'images/production/production-003.png',
    },
  ];
  return (
    <>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
          <Typography component='h2' variant='h2'>
            Production
          </Typography>
        </Grid>
        {setMediaList.map((data, index) => {
          return (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{ width: '100%' }}>
                <MediaCard data={data} />
              </Box>
            </Grid>
          );
        })}
        <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
          <Button variant='contained' size='large'>
            LearnMore
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductionList;
