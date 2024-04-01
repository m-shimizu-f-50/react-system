import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false); // 送信したかどうか判定フラグ
  const [isSending, setIsSending] = useState(false); // 送信中かどうか判定フラグ

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const sleep = (waitTime: number) =>
    new Promise((resolve) => setTimeout(resolve, waitTime));

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault(); // submitのデフォルトの動作を制御(リロードを防ぐ)

    try {
      setIsSending(true);
      await sleep(5000);
      // 送信する処理
      console.log('メールが送信されました。');
      // メール送信が終わった後
      setEmailSent(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSending(false);
    }

    console.log('送信されたメールアドレス', email);
    console.log('送信されたメッセージ', message);
  };

  return (
    <>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
          <Typography component='h2' variant='h2'>
            Contact
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
          {emailSent ? (
            <Box sx={{ width: '100%', textAlign: 'center' }}>
              メールが送信されました。
            </Box>
          ) : (
            <Stack
              sx={{ width: '100%' }}
              component='form'
              onSubmit={handleSubmit}
              spacing={4}
            >
              <TextField
                required
                fullWidth
                label='メールアドレス'
                name='email'
                value={email}
                onChange={handleChangeEmail}
                variant='outlined'
                autoComplete='off'
                disabled={isSending}
              />
              <TextField
                required
                fullWidth
                label='お問い合わせ内容'
                name='message'
                value={message}
                variant='outlined'
                multiline
                rows={4}
                onChange={handleChangeMessage}
                disabled={isSending}
              />
              {isSending ? (
                <Button variant='contained' color='primary'>
                  <CircularProgress size={20} color='inherit' />
                </Button>
              ) : (
                <Button type='submit' variant='contained' color='primary'>
                  送信
                </Button>
              )}
            </Stack>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default ContactForm;
