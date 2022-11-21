const express = require('express')
const app = express()
const port = 5000

app.get('/api', (req, res) => {
    res.send({"user" : ["user1", "user2"]})
})

app.listen(port, () => {
    console.log('Getting data on port {port}')
})