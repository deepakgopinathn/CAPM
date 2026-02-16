const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send('Hello from node js microservice');
});

const port = process.env.PORT || 3030;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(express.static('webapp'));
 
// app.get('/employee', (req,res) => {
//     const employee = {id:101, name:'John Doe'};
//     res.json(employee);
// })

server.on('error', (err) => {
  console.error('Server error:', err);
});