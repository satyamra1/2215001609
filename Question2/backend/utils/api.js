const axios = require('axios');

const apiClient = axios.create({
  baseURL: 'http://20.244.56.144/evaluation-service',
  headers: {
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  },
});

module.exports = apiClient;
