
const axios = require('axios');

const BASE_URL = 'http://20.244.56.144/evaluation-service';

const getAllUsers = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data;
};

const getUserPosts = async (userId) => {
  const response = await axios.get(`${BASE_URL}/users/${userId}/posts`);
  return response.data;
};

const getPostComments = async (postId) => {
  const response = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
  return response.data;
};

//top user
const getTopUsers = async () => {
  const users = await getAllUsers();
  const commentCounts = [];

  for (let user of users) {
    const posts = await getUserPosts(user.id);
    let totalComments = 0;

    for (let post of posts) {
      const comments = await getPostComments(post.id);
      totalComments += comments.length;
    }

    commentCounts.push({
      id: user.id,
      name: user.name,
      totalComments,
    });
  }

  commentCounts.sort((a, b) => b.totalComments - a.totalComments);
  return commentCounts.slice(0, 5);
};



module.exports = {
  getTopUsers,
};
