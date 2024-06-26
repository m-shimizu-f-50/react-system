import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import MV from '../../assets/images/mv.png';
import SkillList from '../../components/SkillList';
import ProductionList from '../../components/ProductionList';
import Profile from '../../components/Profile';
import ContactForm from '../../components/ContactForm';

const Top: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          height: '65vh',
          backgroundImage: 'url(' + MV + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          marginBottom: '20px',
        }}
      >
        <Container
          maxWidth='md'
          sx={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
          }}
        >
          <Grid
            container
            rowSpacing={2}
            column-spacing={2}
            sx={{ color: '#fff', textShadow: '1px 1px 3px #000000' }}
          >
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
        <Button
          variant='contained'
          size='large'
          sx={{
            position: 'absolute',
            bottom: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          LearnMore
        </Button>
      </Box>
      <Box
        sx={{
          marginBottom: '20px',
        }}
      >
        <Container maxWidth='md'>
          <SkillList />
        </Container>
      </Box>
      <Box
        sx={{
          marginBottom: '20px',
        }}
      >
        <Container maxWidth='md'>
          <ProductionList />
        </Container>
      </Box>
      <Box
        sx={{
          marginBottom: '20px',
        }}
      >
        <Container maxWidth='md'>
          <Profile />
        </Container>
      </Box>
      <Box
        sx={{
          marginBottom: '20px',
        }}
      >
        <Container maxWidth='md'>
          <ContactForm />
        </Container>
      </Box>
    </>
  );
};

export default Top;
