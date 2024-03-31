import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Top: React.FC = () => {
  return (
    <>
      <Box sx={{ height: '65vh', backgroundColor: 'red' }}>
        <Container maxWidth='md'>
          <Grid container rowSpacing={0} column-spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography component='h2' variant='h2'>
                MVタイトル
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography>
                テキスト テキストテキストテキストテキストテキスト
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container maxWidth='md'>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
              <Typography component='h2' variant='h2'>
                Skill
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ height: 200, backgroundColor: 'red' }}></Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ height: 200, backgroundColor: 'red' }}></Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ height: 200, backgroundColor: 'red' }}></Box>
            </Grid>
            <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
              <Button variant='contained' size='large'>
                LearnMore
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container maxWidth='md'>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
              <Typography component='h2' variant='h2'>
                Production
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ height: 200, backgroundColor: 'red' }}></Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ height: 200, backgroundColor: 'red' }}></Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ height: 200, backgroundColor: 'red' }}></Box>
            </Grid>
            <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
              <Button variant='contained' size='large'>
                LearnMore
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container maxWidth='md'>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
              <Typography component='h2' variant='h2'>
                Profile
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ height: 200, backgroundColor: 'red' }}></Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box sx={{ height: 200, backgroundColor: 'red' }}></Box>
            </Grid>

            <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
              <Button variant='contained' size='large'>
                LearnMore
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container maxWidth='md'>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
              <Typography component='h2' variant='h2'>
                Contact
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
              <Box sx={{ height: '400px', backgroundColor: 'red' }}></Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Top;
