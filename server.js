// envファイルの値取得
require('dotenv').config();
const { GMAILUSER, GMAILPASSWORD } = process.env;

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const port = 3001;

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-mail', async (req, res) => {
  //メール送信の処理を記述する
  const { email, message } = req.body;

  //メール送信の設定
  const tranceporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: GMAILUSER, // ユーザー名
      pass: GMAILPASSWORD, // 二段階認証を行い、アプリパスワードする
    },
  });

  const SendMailOptions = {
    from: 'test@test.com', // 送信元のメールアドレス
    to: email, // 送信先のメールアドレス
    subject: 'お問い合わせありがとうございます。', // 件名
    text: message, // 本文
  };

  const ReceiveMailOptions = {
    from: email, // 送信先のメールアドレス
    to: process.env.GMAILUSER, //送信先のメールアドレス
    subject: 'ホームページからのお問い合わせ', // 件名
    text: `Email: ${email}\n 本文: ${message}`, // 本文
  };

  try {
    await tranceporter.sendMail(SendMailOptions);
    await tranceporter.sendMail(ReceiveMailOptions);
    res.status(200).json({ message: 'メールが送信されました。' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'メールの送信に失敗しました。' });
  }
});

app.listen(port, () => {
  console.log(`サーバーがポート${port}で起動しました。`);
});
