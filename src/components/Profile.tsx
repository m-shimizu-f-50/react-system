import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Profile: React.FC = () => {
  return (
    <>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
          <Typography component='h2' variant='h2'>
            Profile
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            component='img'
            sx={{
              width: {
                xs: '200px',
                md: '100%',
              },
              height: {
                xs: '200px',
                md: 'auto',
              },
              borderRadius: '50%',
            }}
            src='/images/common/profile.png'
            alt='プロフィール画像'
          />
          {/* <Box sx={{ width: '100%' }}>
            <img
              style={{ width: '100%', height: 'auto', borderRadius: '50%' }}
              src='/images/common/profile.png'
              alt='プロフィール画像'
            />
          </Box> */}
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: '100%',
              paddingLeft: { xs: '0px', md: '30px' },
            }}
          >
            <Typography variant='body2' color='text.secondary'>
              プロフィール内容プロフィール内容プロフィール内容 プロフィール内容
              プロフィール内容 プロフィール内容 プロフィール内容
              プロフィール内容プロフィール内容プロフィール内容プロフィール内容プロフィール内容プロフィール内容プロフィール内容プロフィール内容プロフィール内容プロフィール内容プロフィール内容プロフィール内容
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
          <Button variant='contained' size='large'>
            LearnMore
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
