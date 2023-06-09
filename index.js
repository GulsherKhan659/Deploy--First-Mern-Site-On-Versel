
require('dotenv').config()
const cors = require('cors');
const mongoose = require('mongoose')
const express = require('express');
const path = require('path')


const Rout = require('./router/blog')

const app = express()


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(`${process.env.MONGO_DB}`);
}


app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)))

app.use('/api', Rout.blog)
app.use('*', (req, res) => {
    res.send(path.resolve(__dirname, process.env.PUBLIC_DIR, 'index.html'))
})


console.log(process.env.PUBLIC_DIR)
app.listen(process.env.PORT, () => {
    console.log(process.env.PORT)
})