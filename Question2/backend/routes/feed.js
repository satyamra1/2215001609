
const express = require('express');
const apiClient = require('../utils/api');
const router = express.Router();

router.get('/feed', async (req, res) => {
  try {
  
    const usersResponse = await apiClient.get('/users');
    const users = usersResponse.data;

    let allPosts = [];

    for (const user of users) {
      const postsResponse = await apiClient.get(`/users/${user.id}/posts`);
      allPosts.push(...postsResponse.data);
    }


    allPosts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    res.json(allPosts.slice(0, 5)); 
  } catch (error) {
    console.error('Feed Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch real-time feed' });
  }
});

module.exports = router;
