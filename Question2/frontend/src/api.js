const BASE_URL = 'http://localhost:8080/api';
const TOKEN = '89465134816874153';

export const fetchTopUsers = async () => {
  const res = await fetch(`${BASE_URL}/users`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
  });
  return res.json();
};
