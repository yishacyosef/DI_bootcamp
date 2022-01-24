const exp = require('express');
const app = exp();

console.log('listening...');

const bp = require('body-parser')
const fs = require('fs');

app.use(bp.json());
app.use('/',exp.static(__dirname));

app.post('/',(req,res) => {