import express from 'express';
import http from 'http';
import cors from 'cors';
import fetch from 'node-fetch'; // Use dynamic import if necessary
import { Server } from 'socket.io';
import feedbackRouter from './routes/feedbackRoute.js'; // Feedback route
import chatRouter from './routes/chatRoute.js'; // Chat route

// Initialize Express app
const app = express();

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.IO
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000', // Replace with your frontend URL if different
    methods: ['GET', 'POST'],
  },
});

// Middleware to parse JSON bodies and handle CORS
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL if different
}));
app.use(express.json());

// Mount the feedback router
app.use('/send-feedback', feedbackRouter);

// Mount the chat router
app.use('/chat', chatRouter); // Chat route for chatbot

// Socket.IO logic for real-time chat
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('sendMessage', async (message) => {
    console.log('Received message from user:', message);

    try {
      // Here you call your Rasa model API to get the chatbot's response
      const response = await fetch('http://localhost:5000/chat/run-model', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: message }),
      });
      const data = await response.json();

      // Send the response back to the client
      socket.emit('receiveMessage', data.response);
    } catch (error) {
      console.error('Error while processing the message:', error);
    }
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Catch-all for unhandled errors
app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);
  res.status(500).json({ message: 'Something broke! Please try again later.' });
});

// Start the server
server.listen(5000, () => {
  console.log('Server running on port 5000');
});
