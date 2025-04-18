const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const feedRoutes = require('./routes/feed');

dotenv.config(); 

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());



app.use('/api', feedRoutes);

app.get('/', (req, res) => {
  res.send('Social Media Analytics ');
});


app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
