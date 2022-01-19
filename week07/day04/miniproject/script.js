fetch('http://localhost:3000/items')
.then(res => res.json())
.then(data =>{
    console.log(data)

})
.catch(e=>{
    console.log(e)
})