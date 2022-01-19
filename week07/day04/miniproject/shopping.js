const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'))
console.log('listening...');

app.listen(3000)

