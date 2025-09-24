const express = require("express")
const app = express()

const PORT = 3000

const member = [
    {
        user: 1,
        name: "John Doe",
        age: 10,
        
    },
    {
        user: 2,
        name: "Jane Doe",
        age: 15,

    },
    {
        user: 3,
        name: "Simon",
        age: 20,

    }
]
app.get("/showUser")

app.listen(PORT, () => {
    console.log(`This server is running on port http://localhost:${PORT}`)
})