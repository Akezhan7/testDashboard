const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/dashboard', async (req, res) => {
  try {
    const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
    res.json({
      posts: postsResponse.data,
      users: usersResponse.data,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.get('/api/employees', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.get('/api/profile', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
