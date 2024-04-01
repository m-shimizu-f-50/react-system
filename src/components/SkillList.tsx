import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RadarChart from './RadarChart';

const SkillList: React.FC = () => {
  const setSkillList = [
    {
      labels: [
        'HTML/CSS',
        'SASS/SCSS',
        'JavaScript',
        'React',
        'Next.js',
        'Vue.js',
      ],
      datasets: [
        {
          label: 'Front-End',
          data: [4, 4, 4, 2, 2, 4],
          backgroundColor: 'rgba(75, 192, 192, 0.4)',
          borderColor: 'rgba(75, 192, 192, 0.4)',
          borderWidth: 1,
        },
      ],
    },
    {
      labels: ['PHP', 'Laravel', 'Ruby', 'Ruby on Rails', 'python', 'Django'],
      datasets: [
        {
          label: 'Back-End',
          data: [1, 1, 1, 1, 0, 0],
          backgroundColor: 'rgba(75, 192, 192, 0.4)',
          borderColor: 'rgba(75, 192, 192, 0.4)',
          borderWidth: 1,
        },
      ],
    },
    {
      labels: ['AWS', 'GCP', 'Linux', 'Mac', 'Nginx', 'Apache'],
      datasets: [
        {
          label: 'DevOps',
          data: [1, 0, 2, 2, 1, 0],
          backgroundColor: 'rgba(75, 192, 192, 0.4)',
          borderColor: 'rgba(75, 192, 192, 0.4)',
          borderWidth: 1,
        },
      ],
    },
  ];

  // チャートオプションの定義
  const setSkillChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        max: 5,
        min: 0,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };
  return (
    <>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
          <Typography component='h2' variant='h2'>
            Skill
          </Typography>
        </Grid>
        {setSkillList.map((data, index) => {
          return (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{ width: '100%', height: { xs: '400px', md: '200px' } }}>
                <RadarChart options={setSkillChartOptions} data={data} />
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

export default SkillList;
