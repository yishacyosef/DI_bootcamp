const exp = require('express');

const app = exp();

app.listen(3000, ()=>{
    console.log(`listening 3000`)
})

app.get('/login', (req, res)=>
    res.json({user:'ishac'})
)