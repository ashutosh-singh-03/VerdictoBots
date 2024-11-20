import express from 'express';
import sendFeedbackEmail from '../nodemailerConfig.js';
const router = express.Router();

router.post('/send-feedback', async (req, res) => {
  const { feedback, rating, email } = req.body;

  if (!feedback || !email) {
    return res.status(400).json({ message: 'Feedback and email are required.' });
  }

  try {
    await sendFeedbackEmail(feedback, rating, email);
    res.status(200).json({ message: 'Feedback sent successfully!' });
    res.json({ message: 'Feedback received' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send feedback. Please try again later.' });
  }
});

export default router;
