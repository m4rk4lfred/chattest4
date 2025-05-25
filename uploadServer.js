const express = require('express');
const app = express();
const port = 3090;

app.use(express.json());

const sql_connection = {

} 
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/upload', (req, res) => {
  res.send('Upload endpoint');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
