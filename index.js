require('dotenv').config()
const cors = require('cors');
const mongoose = require('mongoose')
const express = require('express');

const Rout = require('./router/blog')

const app = express()


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/blog_app');
}


app.use(cors())
app.use(express.json())
app.use(express.static(process.env.PUBLIC_DIR))

app.use('/', Rout.blog)

app.get('/', (rq, rs) => {
    rs.send("S-E-R-V-E-R")
})

console.log(process.env.PUBLIC_DIR)
app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`)
})